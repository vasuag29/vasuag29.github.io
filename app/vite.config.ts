import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "serve-simran-redirect",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url || "";

          // Redirect bare "/Simran" to "/Simran/" so both URLs behave the same
          if (url === "/Simran") {
            res.writeHead(302, { Location: "/Simran/" });
            return res.end();
          }

          next();
        });
      },
    },
  ],
});