/**
 * Fingerprinted asset URLs, filled in by the build before any page renders.
 * Layouts read from here rather than hard-coding paths, so a changed
 * stylesheet or script always gets a new URL and can be cached forever.
 */
export const assets = {
  css: "",
  /** Client entry name (file name in site/client, no extension) to URL. */
  scripts: {} as Record<string, string>,
};

export const scriptUrl = (name: string) => {
  const url = assets.scripts[name];
  if (!url) throw new Error(`No client entry named "${name}" in site/client`);
  return url;
};
