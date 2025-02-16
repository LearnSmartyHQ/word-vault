import { IOxford } from "../../../types/index.js";

export const dir_am: Record<string, () => Promise<IOxford>> = {
  "amateur": () => import("./amateur.json") as unknown as Promise<IOxford>,
  "amazed": () => import("./amazed.json") as unknown as Promise<IOxford>,
  "amazing": () => import("./amazing.json") as unknown as Promise<IOxford>,
  "ambassador": () => import("./ambassador.json") as unknown as Promise<IOxford>,
  "ambition": () => import("./ambition.json") as unknown as Promise<IOxford>,
  "ambitious": () => import("./ambitious.json") as unknown as Promise<IOxford>,
  "ambulance": () => import("./ambulance.json") as unknown as Promise<IOxford>,
  "ambush": () => import("./ambush.json") as unknown as Promise<IOxford>,
  "amend": () => import("./amend.json") as unknown as Promise<IOxford>,
  "amendment": () => import("./amendment.json") as unknown as Promise<IOxford>,
  "america": () => import("./america.json") as unknown as Promise<IOxford>,
  "amid": () => import("./amid.json") as unknown as Promise<IOxford>,
  "among": () => import("./among.json") as unknown as Promise<IOxford>,
  "amount": () => import("./amount.json") as unknown as Promise<IOxford>,
  "amplify": () => import("./amplify.json") as unknown as Promise<IOxford>,
  "amusing": () => import("./amusing.json") as unknown as Promise<IOxford>,
};
