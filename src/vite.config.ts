import { defineConfig } from "vite";
import { exec as baseExec } from "child_process";
import { promisify } from "util";

const exec = promisify(baseExec);

const collectStaticPlugin = () => {
  return {
    name: "collectstatic",
    async writeBundle() {
      console.log("calling collectstatic");
      const { stdout } = await exec(
        "uv run python manage.py collectstatic --clear --noinput --verbosity 0"
      );
      console.log(stdout);
    },
  };
};

// The public site ships no application JavaScript: this build exists to emit
// the Tailwind stylesheet and a copy of htmx for the CMS publish panel.
// React is not bundled here — the only React in the project is the Wagtail
// admin code block widget, which borrows Wagtail's own `window.React`.
export default defineConfig({
  plugins: [collectStaticPlugin()],
  publicDir: false,
  build: {
    outDir: "./frontend/dist",
    assetsDir: ".",
    rollupOptions: {
      input: {
        index: "./frontend/src/index.ts",
        htmx: "./frontend/src/htmx.ts",
      },
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
    chunkSizeWarningLimit: 5000,
  },
});
