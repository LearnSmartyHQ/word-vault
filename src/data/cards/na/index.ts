import { IOxford } from "../../../types/index.js";

export const dir_na: Record<string, () => Promise<IOxford>> = {
  "nail": () => import("./nail.json") as unknown as Promise<IOxford>,
  "naked": () => import("./naked.json") as unknown as Promise<IOxford>,
  "name": () => import("./name.json") as unknown as Promise<IOxford>,
  "namely": () => import("./namely.json") as unknown as Promise<IOxford>,
  "narcotic": () => import("./narcotic.json") as unknown as Promise<IOxford>,
  "narrative": () => import("./narrative.json") as unknown as Promise<IOxford>,
  "narrow": () => import("./narrow.json") as unknown as Promise<IOxford>,
  "nasty": () => import("./nasty.json") as unknown as Promise<IOxford>,
  "nation": () => import("./nation.json") as unknown as Promise<IOxford>,
  "national": () => import("./national.json") as unknown as Promise<IOxford>,
  "nationwide": () => import("./nationwide.json") as unknown as Promise<IOxford>,
  "native": () => import("./native.json") as unknown as Promise<IOxford>,
  "natural": () => import("./natural.json") as unknown as Promise<IOxford>,
  "naturally": () => import("./naturally.json") as unknown as Promise<IOxford>,
  "nature": () => import("./nature.json") as unknown as Promise<IOxford>,
  "naughty": () => import("./naughty.json") as unknown as Promise<IOxford>,
  "naval": () => import("./naval.json") as unknown as Promise<IOxford>,
  "navigate": () => import("./navigate.json") as unknown as Promise<IOxford>,
  "navigation": () => import("./navigation.json") as unknown as Promise<IOxford>,
};
