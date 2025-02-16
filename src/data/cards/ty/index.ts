import { IOxford } from "../../../types/index.js";

export const dir_ty: Record<string, () => Promise<IOxford>> = {
  "type": () => import("./type.json") as unknown as Promise<IOxford>,
  "typical": () => import("./typical.json") as unknown as Promise<IOxford>,
  "typically": () => import("./typically.json") as unknown as Promise<IOxford>,
  "tyrant": () => import("./tyrant.json") as unknown as Promise<IOxford>,
  "tyre": () => import("./tyre.json") as unknown as Promise<IOxford>,
};
