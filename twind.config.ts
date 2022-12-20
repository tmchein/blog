import { Options } from "$fresh/plugins/twind.ts";
import { lineClamp } from "npm:@twind/line-clamp@0.1.1";

export default {
  selfURL: import.meta.url,
  plugins: {
    "line-clamp": lineClamp,
  },
} as unknown as Options;
