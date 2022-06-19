import { createVuePlugin } from "vite-plugin-vue2";
import { resolve } from "path";
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
      "@/": `${resolve(__dirname, "./src")}/`,
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: ['@import "@/styles/variables"', ""].join("\n"),
      },
    },
  },
};
