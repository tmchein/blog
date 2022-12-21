import { Options } from "$fresh/plugins/twind.ts";
import { lineClamp } from "https://esm.sh/@twind/line-clamp@0.1.1?deps=twind@0.16.17";

export default {
  selfURL: import.meta.url,
  plugins: {
    "line-clamp": lineClamp,
  },
} as unknown as Options;
