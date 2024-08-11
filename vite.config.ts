import { loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";

export default ({ mode }: { mode: any }) => {
    const env = loadEnv(mode, process.cwd());
    return {
        base: '',
        plugins: [
            react(),
            createHtmlPlugin({
                minify: true,
                inject: {
                    data: {
                        naverClientId: env.VITE_KAKAOMAP_API_KEY,
                    },
                },
            }),
        ],
    };
};
