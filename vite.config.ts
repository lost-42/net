import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
    base: "./", // 相对路径，适用于项目页面
    build: {
        outDir: "docs", // 输出到 docs 目录
        emptyOutDir: true, // 构建前清空目录
        sourcemap: false, // 生产环境不需要 sourcemap
    },
    server: {
        port: 5173,
        host: true,
    },
});
