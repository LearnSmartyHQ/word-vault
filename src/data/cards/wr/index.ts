import type { IOxford } from "../../../types/index.js";

export const dir_wr: Record<string, () => Promise<IOxford>> = {
  "wrap": () => import("./wrap.json") as unknown as Promise<IOxford>,
  "wrath": () => import("./wrath.json") as unknown as Promise<IOxford>,
  "wretched": () => import("./wretched.json") as unknown as Promise<IOxford>,
  "wrist": () => import("./wrist.json") as unknown as Promise<IOxford>,
  "write": () => import("./write.json") as unknown as Promise<IOxford>,
  "writer": () => import("./writer.json") as unknown as Promise<IOxford>,
  "writing": () => import("./writing.json") as unknown as Promise<IOxford>,
  "written": () => import("./written.json") as unknown as Promise<IOxford>,
  "wrong": () => import("./wrong.json") as unknown as Promise<IOxford>,
};
