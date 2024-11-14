// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "file:///F:/work/vue3-h5-yf/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/work/vue3-h5-yf/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///F:/work/vue3-h5-yf/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import Components from "file:///F:/work/vue3-h5-yf/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///F:/work/vue3-h5-yf/node_modules/unplugin-vue-components/dist/resolvers.js";
import { createSvgIconsPlugin } from "file:///F:/work/vue3-h5-yf/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
import mockDevServerPlugin from "file:///F:/work/vue3-h5-yf/node_modules/vite-plugin-mock-dev-server/dist/index.js";
import viteCompression from "file:///F:/work/vue3-h5-yf/node_modules/vite-plugin-compression/dist/index.mjs";
import { createHtmlPlugin } from "file:///F:/work/vue3-h5-yf/node_modules/vite-plugin-html/dist/index.mjs";

// build/cdn.js
import { cdn } from "file:///F:/work/vue3-h5-yf/node_modules/vite-plugin-cdn2/dist/index.mjs";
import { unpkg } from "file:///F:/work/vue3-h5-yf/node_modules/vite-plugin-cdn2/dist/resolver/unpkg.mjs";
function enableCDN(isEnabled) {
  if (isEnabled === "true") {
    return cdn({
      resolve: unpkg(),
      modules: ["vue", "vue-demi", "pinia", "axios", "vant", "vue-router"]
    });
  }
}

// vite.config.js
var __vite_injected_original_import_meta_url = "file:///F:/work/vue3-h5-yf/vite.config.js";
var root = process.cwd();
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, root, "");
  return {
    base: env.VITE_PUBLIC_PATH || "/",
    plugins: [
      vue(),
      vueJsx(),
      mockDevServerPlugin(),
      // vant 组件自动按需引入
      Components({
        resolvers: [VantResolver()]
      }),
      // svg icon
      createSvgIconsPlugin({
        // 指定图标文件夹
        iconDirs: [path.resolve(root, "src/icons/svg")],
        // 指定 symbolId 格式
        symbolId: "icon-[dir]-[name]"
      }),
      // 生产环境 gzip 压缩资源
      viteCompression(),
      // 注入模板数据
      createHtmlPlugin({
        inject: {
          data: {
            ENABLE_ERUDA: env.VITE_ENABLE_ERUDA || "false"
          }
        }
      }),
      // 生产环境默认不启用 CDN 加速
      enableCDN(env.VITE_CDN_DEPS)
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      },
      extensions: [
        ".js",
        ".css",
        ".vue",
        ".json",
        ".less",
        ".jsx",
        ".ejs",
        ".mjs"
      ]
      // 导入时想要省略的扩展名列表
    },
    server: {
      host: true,
      // 仅在 proxy 中配置的代理前缀， mock-dev-server 才会拦截并 mock
      // doc: https://github.com/pengzhanbo/vite-plugin-mock-dev-server
      proxy: {
        "^/dev-api": {
          target: ""
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAiYnVpbGQvY2RuLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcd29ya1xcXFx2dWUzLWg1LXlmXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFx3b3JrXFxcXHZ1ZTMtaDUteWZcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L3dvcmsvdnVlMy1oNS15Zi92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gXCJub2RlOnVybFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiO1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xyXG5pbXBvcnQgeyBWYW50UmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgbW9ja0RldlNlcnZlclBsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tbW9jay1kZXYtc2VydmVyXCI7XHJcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4taHRtbFwiO1xyXG5pbXBvcnQgeyBlbmFibGVDRE4gfSBmcm9tIFwiLi9idWlsZC9jZG5cIjtcclxuXHJcbi8vIFx1NUY1M1x1NTI0RFx1NURFNVx1NEY1Q1x1NzZFRVx1NUY1NVx1OERFRlx1NUY4NFxyXG5jb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKTtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcclxuICAvLyBcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcclxuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHJvb3QsIFwiXCIpO1xyXG4gIHJldHVybiB7XHJcbiAgICBiYXNlOiBlbnYuVklURV9QVUJMSUNfUEFUSCB8fCBcIi9cIixcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgdnVlKCksXHJcbiAgICAgIHZ1ZUpzeCgpLFxyXG4gICAgICBtb2NrRGV2U2VydmVyUGx1Z2luKCksXHJcbiAgICAgIC8vIHZhbnQgXHU3RUM0XHU0RUY2XHU4MUVBXHU1MkE4XHU2MzA5XHU5NzAwXHU1RjE1XHU1MTY1XHJcbiAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXVxyXG4gICAgICB9KSxcclxuICAgICAgLy8gc3ZnIGljb25cclxuICAgICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xyXG4gICAgICAgIC8vIFx1NjMwN1x1NUI5QVx1NTZGRVx1NjgwN1x1NjU4N1x1NEVGNlx1NTkzOVxyXG4gICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHJvb3QsIFwic3JjL2ljb25zL3N2Z1wiKV0sXHJcbiAgICAgICAgLy8gXHU2MzA3XHU1QjlBIHN5bWJvbElkIFx1NjgzQ1x1NUYwRlxyXG4gICAgICAgIHN5bWJvbElkOiBcImljb24tW2Rpcl0tW25hbWVdXCJcclxuICAgICAgfSksXHJcbiAgICAgIC8vIFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4MyBnemlwIFx1NTM4Qlx1N0YyOVx1OEQ0NFx1NkU5MFxyXG4gICAgICB2aXRlQ29tcHJlc3Npb24oKSxcclxuICAgICAgLy8gXHU2Q0U4XHU1MTY1XHU2QTIxXHU2NzdGXHU2NTcwXHU2MzZFXHJcbiAgICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xyXG4gICAgICAgIGluamVjdDoge1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBFTkFCTEVfRVJVREE6IGVudi5WSVRFX0VOQUJMRV9FUlVEQSB8fCBcImZhbHNlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICAvLyBcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTlFRDhcdThCQTRcdTRFMERcdTU0MkZcdTc1MjggQ0ROIFx1NTJBMFx1OTAxRlxyXG4gICAgICBlbmFibGVDRE4oZW52LlZJVEVfQ0ROX0RFUFMpXHJcbiAgICBdLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgIFwiQFwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgICB9LFxyXG4gICAgICBleHRlbnNpb25zOiBbXHJcbiAgICAgICAgXCIuanNcIixcclxuICAgICAgICBcIi5jc3NcIixcclxuICAgICAgICBcIi52dWVcIixcclxuICAgICAgICBcIi5qc29uXCIsXHJcbiAgICAgICAgXCIubGVzc1wiLFxyXG4gICAgICAgIFwiLmpzeFwiLFxyXG4gICAgICAgIFwiLmVqc1wiLFxyXG4gICAgICAgIFwiLm1qc1wiXHJcbiAgICAgIF0gLy8gXHU1QkZDXHU1MTY1XHU2NUY2XHU2MEYzXHU4OTgxXHU3NzAxXHU3NTY1XHU3Njg0XHU2MjY5XHU1QzU1XHU1NDBEXHU1MjE3XHU4ODY4XHJcbiAgICB9LFxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgIGhvc3Q6IHRydWUsXHJcbiAgICAgIC8vIFx1NEVDNVx1NTcyOCBwcm94eSBcdTRFMkRcdTkxNERcdTdGNkVcdTc2ODRcdTRFRTNcdTc0MDZcdTUyNERcdTdGMDBcdUZGMEMgbW9jay1kZXYtc2VydmVyIFx1NjI0RFx1NEYxQVx1NjJFNlx1NjIyQVx1NUU3NiBtb2NrXHJcbiAgICAgIC8vIGRvYzogaHR0cHM6Ly9naXRodWIuY29tL3Blbmd6aGFuYm8vdml0ZS1wbHVnaW4tbW9jay1kZXYtc2VydmVyXHJcbiAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgXCJeL2Rldi1hcGlcIjoge1xyXG4gICAgICAgICAgdGFyZ2V0OiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6IFwic3RhdGljL2pzL1tuYW1lXS1baGFzaF0uanNcIixcclxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcInN0YXRpYy9qcy9bbmFtZV0tW2hhc2hdLmpzXCIsXHJcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogXCJzdGF0aWMvW2V4dF0vW25hbWVdLVtoYXNoXS5bZXh0XVwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjpcXFxcd29ya1xcXFx2dWUzLWg1LXlmXFxcXGJ1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFx3b3JrXFxcXHZ1ZTMtaDUteWZcXFxcYnVpbGRcXFxcY2RuLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi93b3JrL3Z1ZTMtaDUteWYvYnVpbGQvY2RuLmpzXCI7aW1wb3J0IHsgY2RuIH0gZnJvbSBcInZpdGUtcGx1Z2luLWNkbjJcIjtcclxuaW1wb3J0IHsgdW5wa2cgfSBmcm9tIFwidml0ZS1wbHVnaW4tY2RuMi9yZXNvbHZlci91bnBrZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUNETihpc0VuYWJsZWQpIHtcclxuICBpZiAoaXNFbmFibGVkID09PSBcInRydWVcIikge1xyXG4gICAgcmV0dXJuIGNkbih7XHJcbiAgICAgIHJlc29sdmU6IHVucGtnKCksXHJcbiAgICAgIG1vZHVsZXM6IFtcInZ1ZVwiLCBcInZ1ZS1kZW1pXCIsIFwicGluaWFcIiwgXCJheGlvc1wiLCBcInZhbnRcIiwgXCJ2dWUtcm91dGVyXCJdXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4TyxTQUFTLGVBQWUsV0FBVztBQUNqUixTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sVUFBVTtBQUNqQixPQUFPLHlCQUF5QjtBQUNoQyxPQUFPLHFCQUFxQjtBQUM1QixTQUFTLHdCQUF3Qjs7O0FDVmlOLFNBQVMsV0FBVztBQUN0USxTQUFTLGFBQWE7QUFFZixTQUFTLFVBQVUsV0FBVztBQUNuQyxNQUFJLGNBQWMsUUFBUTtBQUN4QixXQUFPLElBQUk7QUFBQSxNQUNULFNBQVMsTUFBTTtBQUFBLE1BQ2YsU0FBUyxDQUFDLE9BQU8sWUFBWSxTQUFTLFNBQVMsUUFBUSxZQUFZO0FBQUEsSUFDckUsQ0FBQztBQUFBLEVBQ0g7QUFDRjs7O0FEVmlKLElBQU0sMkNBQTJDO0FBY2xNLElBQU0sT0FBTyxRQUFRLElBQUk7QUFHekIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFFeEMsUUFBTSxNQUFNLFFBQVEsTUFBTSxNQUFNLEVBQUU7QUFDbEMsU0FBTztBQUFBLElBQ0wsTUFBTSxJQUFJLG9CQUFvQjtBQUFBLElBQzlCLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLG9CQUFvQjtBQUFBO0FBQUEsTUFFcEIsV0FBVztBQUFBLFFBQ1QsV0FBVyxDQUFDLGFBQWEsQ0FBQztBQUFBLE1BQzVCLENBQUM7QUFBQTtBQUFBLE1BRUQscUJBQXFCO0FBQUE7QUFBQSxRQUVuQixVQUFVLENBQUMsS0FBSyxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBQUE7QUFBQSxRQUU5QyxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUE7QUFBQSxNQUVELGdCQUFnQjtBQUFBO0FBQUEsTUFFaEIsaUJBQWlCO0FBQUEsUUFDZixRQUFRO0FBQUEsVUFDTixNQUFNO0FBQUEsWUFDSixjQUFjLElBQUkscUJBQXFCO0FBQUEsVUFDekM7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQUE7QUFBQSxNQUVELFVBQVUsSUFBSSxhQUFhO0FBQUEsSUFDN0I7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDdEQ7QUFBQSxNQUNBLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQTtBQUFBO0FBQUEsTUFHTixPQUFPO0FBQUEsUUFDTCxhQUFhO0FBQUEsVUFDWCxRQUFRO0FBQUEsUUFDVjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxlQUFlO0FBQUEsUUFDYixRQUFRO0FBQUEsVUFDTixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
