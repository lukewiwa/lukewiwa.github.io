import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
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

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), collectStaticPlugin()],
  publicDir: false,
  build: {
    outDir: "./frontend/dist",
    assetsDir: ".",
    rollupOptions: {
      input: "./frontend/src/index.tsx",
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
    // We'll deal with the size limits later
    chunkSizeWarningLimit: 5000,
  },
});
