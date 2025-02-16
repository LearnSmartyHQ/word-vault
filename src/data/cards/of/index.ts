import { IOxford } from "../../../types/index.js";

export const dir_of: Record<string, () => Promise<IOxford>> = {
  "of": () => import("./of.json") as unknown as Promise<IOxford>,
  "off": () => import("./off.json") as unknown as Promise<IOxford>,
  "offence": () => import("./offence.json") as unknown as Promise<IOxford>,
  "offend": () => import("./offend.json") as unknown as Promise<IOxford>,
  "offender": () => import("./offender.json") as unknown as Promise<IOxford>,
  "offense": () => import("./offense.json") as unknown as Promise<IOxford>,
  "offensive": () => import("./offensive.json") as unknown as Promise<IOxford>,
  "offer": () => import("./offer.json") as unknown as Promise<IOxford>,
  "offering": () => import("./offering.json") as unknown as Promise<IOxford>,
  "office": () => import("./office.json") as unknown as Promise<IOxford>,
  "officer": () => import("./officer.json") as unknown as Promise<IOxford>,
  "official": () => import("./official.json") as unknown as Promise<IOxford>,
  "offspring": () => import("./offspring.json") as unknown as Promise<IOxford>,
  "often": () => import("./often.json") as unknown as Promise<IOxford>,
};
