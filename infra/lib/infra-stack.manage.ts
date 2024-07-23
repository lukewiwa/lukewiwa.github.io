export const handler = async () => {
  const healthCheckUrl = process.env.HEALTH_CHECK_URL;
  if (!healthCheckUrl) throw new Error("couldn't find health check url");

  const result = await fetch(healthCheckUrl);
  console.log(result);
  return { result };
};
