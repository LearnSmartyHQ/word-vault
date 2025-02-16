import { IOxford } from "../../../types/index.js";

export const dir_us: Record<string, () => Promise<IOxford>> = {
  "us": () => import("./us.json") as unknown as Promise<IOxford>,
  "usage": () => import("./usage.json") as unknown as Promise<IOxford>,
  "use": () => import("./use.json") as unknown as Promise<IOxford>,
  "used-to": () => import("./used-to.json") as unknown as Promise<IOxford>,
  "used": () => import("./used.json") as unknown as Promise<IOxford>,
  "used1": () => import("./used1.json") as unknown as Promise<IOxford>,
  "used2": () => import("./used2.json") as unknown as Promise<IOxford>,
  "useful": () => import("./useful.json") as unknown as Promise<IOxford>,
  "useless": () => import("./useless.json") as unknown as Promise<IOxford>,
  "user": () => import("./user.json") as unknown as Promise<IOxford>,
  "usual": () => import("./usual.json") as unknown as Promise<IOxford>,
  "usually": () => import("./usually.json") as unknown as Promise<IOxford>,
};
