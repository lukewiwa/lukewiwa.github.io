import esbuild, { Plugin } from "esbuild";

const args = process.argv.slice(2);

const baseCtx = {
  entryPoints: ["./frontend/admin-highlight.tsx", "./frontend/highlight.tsx"],
  bundle: true,
  outdir: "./static/wagtail_highlight/",
};

(async () => {
  if (args.includes("--dev")) {
    const devPlugins: Plugin[] = [
      {
        name: "rebuildLog",
        setup(build) {
          build.onEnd(() => {
            console.log("Rebuilt files");
          });
        },
      },
    ];
    const ctx = await esbuild.context({
      ...baseCtx,
      sourcemap: true,
      plugins: devPlugins,
      minify: false,
    });
    console.log("watching files");

    await ctx.watch();
  } else {
    await esbuild.build({ ...baseCtx, minify: true });
  }
})();
