export const getEnv = (envVar: string) => {
  const env = process.env[envVar];
  if (!env) throw new Error(`No environment variable found for ${envVar}`);
  return env;
};

export const FULLY_QUALIFIED_DOMAIN = getEnv("FULLY_QUALIFIED_DOMAIN");
// Leave SUB_DOMAIN unset/empty to deploy on the apex domain itself.
export const SUB_DOMAIN = process.env.SUB_DOMAIN ?? "";
export const DOMAIN_NAME = SUB_DOMAIN
  ? `${SUB_DOMAIN}.${FULLY_QUALIFIED_DOMAIN}`
  : FULLY_QUALIFIED_DOMAIN;

// When deployed on the apex domain, also serve www.<domain> from the same
// distribution rather than leaving it dangling on whatever it pointed to
// before (e.g. the old GitHub Pages CNAME). Not applicable when deployed on
// a subdomain.
export const WWW_DOMAIN_NAME = SUB_DOMAIN
  ? undefined
  : `www.${FULLY_QUALIFIED_DOMAIN}`;
