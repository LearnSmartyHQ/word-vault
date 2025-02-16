import type { IOxford } from "../../../types/index.js";

export const dir_mi: Record<string, () => Promise<IOxford>> = {
  "microscope": () => import("./microscope.json") as unknown as Promise<IOxford>,
  "middle": () => import("./middle.json") as unknown as Promise<IOxford>,
  "midnight": () => import("./midnight.json") as unknown as Promise<IOxford>,
  "midst": () => import("./midst.json") as unknown as Promise<IOxford>,
  "might": () => import("./might.json") as unknown as Promise<IOxford>,
  "migrate": () => import("./migrate.json") as unknown as Promise<IOxford>,
  "migration": () => import("./migration.json") as unknown as Promise<IOxford>,
  "mild": () => import("./mild.json") as unknown as Promise<IOxford>,
  "mile": () => import("./mile.json") as unknown as Promise<IOxford>,
  "militant": () => import("./militant.json") as unknown as Promise<IOxford>,
  "military": () => import("./military.json") as unknown as Promise<IOxford>,
  "militia": () => import("./militia.json") as unknown as Promise<IOxford>,
  "milk": () => import("./milk.json") as unknown as Promise<IOxford>,
  "mill": () => import("./mill.json") as unknown as Promise<IOxford>,
  "millimetre": () => import("./millimetre.json") as unknown as Promise<IOxford>,
  "million": () => import("./million.json") as unknown as Promise<IOxford>,
  "mind": () => import("./mind.json") as unknown as Promise<IOxford>,
  "mine": () => import("./mine.json") as unknown as Promise<IOxford>,
  "miner": () => import("./miner.json") as unknown as Promise<IOxford>,
  "mineral": () => import("./mineral.json") as unknown as Promise<IOxford>,
  "miniature": () => import("./miniature.json") as unknown as Promise<IOxford>,
  "minimal": () => import("./minimal.json") as unknown as Promise<IOxford>,
  "minimize": () => import("./minimize.json") as unknown as Promise<IOxford>,
  "minimum": () => import("./minimum.json") as unknown as Promise<IOxford>,
  "mining": () => import("./mining.json") as unknown as Promise<IOxford>,
  "minister": () => import("./minister.json") as unknown as Promise<IOxford>,
  "ministry": () => import("./ministry.json") as unknown as Promise<IOxford>,
  "minor": () => import("./minor.json") as unknown as Promise<IOxford>,
  "minority": () => import("./minority.json") as unknown as Promise<IOxford>,
  "minus": () => import("./minus.json") as unknown as Promise<IOxford>,
  "minute": () => import("./minute.json") as unknown as Promise<IOxford>,
  "minute1": () => import("./minute1.json") as unknown as Promise<IOxford>,
  "minute2": () => import("./minute2.json") as unknown as Promise<IOxford>,
  "miracle": () => import("./miracle.json") as unknown as Promise<IOxford>,
  "mirror": () => import("./mirror.json") as unknown as Promise<IOxford>,
  "miserable": () => import("./miserable.json") as unknown as Promise<IOxford>,
  "miserly": () => import("./miserly.json") as unknown as Promise<IOxford>,
  "misery": () => import("./misery.json") as unknown as Promise<IOxford>,
  "misfortune": () => import("./misfortune.json") as unknown as Promise<IOxford>,
  "misleading": () => import("./misleading.json") as unknown as Promise<IOxford>,
  "miss": () => import("./miss.json") as unknown as Promise<IOxford>,
  "missile": () => import("./missile.json") as unknown as Promise<IOxford>,
  "missing": () => import("./missing.json") as unknown as Promise<IOxford>,
  "mission": () => import("./mission.json") as unknown as Promise<IOxford>,
  "mistake": () => import("./mistake.json") as unknown as Promise<IOxford>,
  "mister": () => import("./mister.json") as unknown as Promise<IOxford>,
  "mix": () => import("./mix.json") as unknown as Promise<IOxford>,
  "mixed": () => import("./mixed.json") as unknown as Promise<IOxford>,
  "mixture": () => import("./mixture.json") as unknown as Promise<IOxford>,
};
