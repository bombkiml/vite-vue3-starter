import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// Buid for PublicPath : https://v2.vitejs.dev/guide/build.html#public-base-path

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [vue()],
    /* optimizeDeps: {
      exclude: ["js-big-decimal"],
    }, */
    build: {
      minify: "esbuild",
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      },
    },
    server: {
      port: 8080,
      proxy: {
        "^/api1/.*": {
          target: process.env.VITE_APP_ONE_API,
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: (path) => path.replace(/^\/api1/, ""),
        },
        "^/api2/.*": {
          target: process.env.VITE_APP_THREE_API,
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: (path) => path.replace(/^\/api2/, ""),
          configure: (proxy, _options) => {
            proxy.on("error", (err, _req, _res) => {
              console.log("proxy error", err);
            });
            proxy.on("proxyReq", (proxyReq, req, _res) => {
              console.log("Sending Request to :", req.method, req.url);
            });
            proxy.on("proxyRes", (proxyRes, req, _res) => {
              console.log(
                "Received Response from :",
                proxyRes.statusCode,
                req.url
              );
            });
          },
        },
      },
    },
  });
};
