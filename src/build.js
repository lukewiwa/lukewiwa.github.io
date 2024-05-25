import { exec as baseExec } from "child_process";
import { build, context } from "esbuild";
import { promisify } from "util";

const exec = promisify(baseExec);

const args = process.argv.slice(2);

const baseContext = {
  entryPoints: ["./frontend/index.ts", "./frontend/index.css"],
  bundle: true,
  outdir: "./frontend/dist/",
};

if (args.includes("--dev")) {
  const devPlugins = [
    {
      name: "collectstatic",
      setup(build) {
        build.onEnd(async (result) => {
          console.log("calling collectstatic");
          const { stdout } = await exec(
            "python manage.py collectstatic --clear --noinput"
          );
          console.log(stdout);
        });
      },
    },
  ];
  const ctx = await context({
    ...baseContext,
    sourcemap: true,
    plugins: devPlugins,
  });
  await ctx.watch();
} else {
  await build({ ...baseContext, minify: true });
}
