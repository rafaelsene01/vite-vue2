import { createVuePlugin } from "vite-plugin-vue2";
import { resolve } from "path";
import { VuetifyResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

const globalSassFiles = ["@/styles/variables.scss"];

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
    port: 8080,
  },
  resolve: {
    alias: {
      "@/": `${resolve(__dirname, "./src")}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: globalSassFiles
          .map((src) => '@import "' + src + '";')
          .join("\n"),
      },
    },
  },
};
