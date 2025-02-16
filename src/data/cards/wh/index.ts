import { IOxford } from "../../../types/index.js";

export const dir_wh: Record<string, () => Promise<IOxford>> = {
  "what": () => import("./what.json") as unknown as Promise<IOxford>,
  "whatever": () => import("./whatever.json") as unknown as Promise<IOxford>,
  "whatsoever": () => import("./whatsoever.json") as unknown as Promise<IOxford>,
  "wheat": () => import("./wheat.json") as unknown as Promise<IOxford>,
  "wheel": () => import("./wheel.json") as unknown as Promise<IOxford>,
  "when": () => import("./when.json") as unknown as Promise<IOxford>,
  "whenever": () => import("./whenever.json") as unknown as Promise<IOxford>,
  "where": () => import("./where.json") as unknown as Promise<IOxford>,
  "whereas": () => import("./whereas.json") as unknown as Promise<IOxford>,
  "whereby": () => import("./whereby.json") as unknown as Promise<IOxford>,
  "wherever": () => import("./wherever.json") as unknown as Promise<IOxford>,
  "whether": () => import("./whether.json") as unknown as Promise<IOxford>,
  "which": () => import("./which.json") as unknown as Promise<IOxford>,
  "while": () => import("./while.json") as unknown as Promise<IOxford>,
  "whilst": () => import("./whilst.json") as unknown as Promise<IOxford>,
  "whip": () => import("./whip.json") as unknown as Promise<IOxford>,
  "whirling": () => import("./whirling.json") as unknown as Promise<IOxford>,
  "whisky": () => import("./whisky.json") as unknown as Promise<IOxford>,
  "whisper": () => import("./whisper.json") as unknown as Promise<IOxford>,
  "white": () => import("./white.json") as unknown as Promise<IOxford>,
  "who": () => import("./who.json") as unknown as Promise<IOxford>,
  "whoever": () => import("./whoever.json") as unknown as Promise<IOxford>,
  "whole": () => import("./whole.json") as unknown as Promise<IOxford>,
  "wholesale": () => import("./wholesale.json") as unknown as Promise<IOxford>,
  "wholly": () => import("./wholly.json") as unknown as Promise<IOxford>,
  "whom": () => import("./whom.json") as unknown as Promise<IOxford>,
  "whose": () => import("./whose.json") as unknown as Promise<IOxford>,
  "why": () => import("./why.json") as unknown as Promise<IOxford>,
};
