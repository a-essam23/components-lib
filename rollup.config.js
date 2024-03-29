import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };
import postcss from "rollup-plugin-postcss";

import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
    {
        input: "src/index.ts",
        external: ["react-dom"],
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),

            postcss({
                config: { path: "./postcss.config.cjs" },
                extensions: [".css", ".scss"],
                inject: false,
                extract: "index.css",
            }),

            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                exclude: ["./src/App.tsx"],
            }),
            terser(),
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts({ tsconfig: "./tsconfig.json" })],
        external: [/\.css$/, /\.scss$/],
    },
];
