import { IOxford } from "../../../types/index.js";

export const dir_af: Record<string, () => Promise<IOxford>> = {
  "affair": () => import("./affair.json") as unknown as Promise<IOxford>,
  "affect": () => import("./affect.json") as unknown as Promise<IOxford>,
  "affection": () => import("./affection.json") as unknown as Promise<IOxford>,
  "affirm": () => import("./affirm.json") as unknown as Promise<IOxford>,
  "afford": () => import("./afford.json") as unknown as Promise<IOxford>,
  "affordable": () => import("./affordable.json") as unknown as Promise<IOxford>,
  "afraid": () => import("./afraid.json") as unknown as Promise<IOxford>,
  "after": () => import("./after.json") as unknown as Promise<IOxford>,
  "aftermath": () => import("./aftermath.json") as unknown as Promise<IOxford>,
  "afternoon": () => import("./afternoon.json") as unknown as Promise<IOxford>,
  "afterward": () => import("./afterward.json") as unknown as Promise<IOxford>,
  "afterwards": () => import("./afterwards.json") as unknown as Promise<IOxford>,
};
