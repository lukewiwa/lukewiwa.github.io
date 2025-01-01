import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";

export const handler = async () => {

  const WORKER_FUNCTION_NAME = process.env.WORKER_FUNCTION_NAME

  const managementCommand = {
    "manage": "migrate --noinput"
  }

  const encoder = new TextEncoder();
  const client = new LambdaClient({});
  const command = new InvokeCommand({
    FunctionName: WORKER_FUNCTION_NAME,
    Payload: encoder.encode(JSON.stringify(managementCommand)),
  });

  const { Payload, LogResult } = await client.send(command);
  const result = Payload
    ? Buffer.from(Payload).toString()
    : "No Payload present";
  const logs = LogResult
    ? Buffer.from(LogResult, "base64").toString()
    : "No logs present";
  console.log(`Payload: ${result}`);
  console.log(`Logs: ${logs}`);
  return { logs, result };
}