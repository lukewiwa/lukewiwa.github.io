import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";

/**
 * Runs one Django management command on the worker function.
 *
 * Both the migration and the blog import trigger use this; which command runs
 * is configuration, not code.
 */
export const handler = async () => {
  const functionName = process.env.WORKER_FUNCTION_NAME;
  const command = process.env.MANAGEMENT_COMMAND;

  if (!functionName) throw new Error("WORKER_FUNCTION_NAME is not set");
  if (!command) throw new Error("MANAGEMENT_COMMAND is not set");

  const client = new LambdaClient({});
  const { Payload, LogResult } = await client.send(
    new InvokeCommand({
      FunctionName: functionName,
      Payload: new TextEncoder().encode(JSON.stringify({ manage: command })),
    })
  );

  const result = Payload
    ? Buffer.from(Payload).toString()
    : "No Payload present";
  const logs = LogResult
    ? Buffer.from(LogResult, "base64").toString()
    : "No logs present";

  console.log(`Ran '${command}' -> ${result}`);
  return { logs, result };
};
