import { IOxford } from "../../../types/index.js";

export const dir_mu: Record<string, () => Promise<IOxford>> = {
  "much": () => import("./much.json") as unknown as Promise<IOxford>,
  "mud": () => import("./mud.json") as unknown as Promise<IOxford>,
  "multiple": () => import("./multiple.json") as unknown as Promise<IOxford>,
  "multiply": () => import("./multiply.json") as unknown as Promise<IOxford>,
  "multitude": () => import("./multitude.json") as unknown as Promise<IOxford>,
  "mum": () => import("./mum.json") as unknown as Promise<IOxford>,
  "mumble": () => import("./mumble.json") as unknown as Promise<IOxford>,
  "mummy": () => import("./mummy.json") as unknown as Promise<IOxford>,
  "municipal": () => import("./municipal.json") as unknown as Promise<IOxford>,
  "murder": () => import("./murder.json") as unknown as Promise<IOxford>,
  "muscle": () => import("./muscle.json") as unknown as Promise<IOxford>,
  "museum": () => import("./museum.json") as unknown as Promise<IOxford>,
  "mushroom": () => import("./mushroom.json") as unknown as Promise<IOxford>,
  "music": () => import("./music.json") as unknown as Promise<IOxford>,
  "musical": () => import("./musical.json") as unknown as Promise<IOxford>,
  "musician": () => import("./musician.json") as unknown as Promise<IOxford>,
  "must": () => import("./must.json") as unknown as Promise<IOxford>,
  "mute": () => import("./mute.json") as unknown as Promise<IOxford>,
  "mutual": () => import("./mutual.json") as unknown as Promise<IOxford>,
};
