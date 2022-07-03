import { createVuePlugin } from "vite-plugin-vue2";
import { fileURLToPath } from "url";
import { VuetifyResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [
    createVuePlugin(),
    Components({
      resolvers: [
        // Vuetify
        VuetifyResolver(),
      ],
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: ['@import "@/styles/variables"', ""].join("\n"),
      },
    },
  },
  test: {
    global: true,
    environment: "happy-dom",
    coverage: {
      all: true,
      include: ["src/**/*.vue"],
    },
    deps: {
      inline: ["vuetify"],
    },
  },
};
