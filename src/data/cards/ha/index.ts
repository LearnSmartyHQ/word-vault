import { IOxford } from "../../../types/index.js";

export const dir_ha: Record<string, () => Promise<IOxford>> = {
  "habit": () => import("./habit.json") as unknown as Promise<IOxford>,
  "habitat": () => import("./habitat.json") as unknown as Promise<IOxford>,
  "hail": () => import("./hail.json") as unknown as Promise<IOxford>,
  "hair": () => import("./hair.json") as unknown as Promise<IOxford>,
  "half": () => import("./half.json") as unknown as Promise<IOxford>,
  "halfway": () => import("./halfway.json") as unknown as Promise<IOxford>,
  "hall": () => import("./hall.json") as unknown as Promise<IOxford>,
  "halt": () => import("./halt.json") as unknown as Promise<IOxford>,
  "hand": () => import("./hand.json") as unknown as Promise<IOxford>,
  "handbag": () => import("./handbag.json") as unknown as Promise<IOxford>,
  "handful": () => import("./handful.json") as unknown as Promise<IOxford>,
  "handle": () => import("./handle.json") as unknown as Promise<IOxford>,
  "handling": () => import("./handling.json") as unknown as Promise<IOxford>,
  "handy": () => import("./handy.json") as unknown as Promise<IOxford>,
  "hang": () => import("./hang.json") as unknown as Promise<IOxford>,
  "happen": () => import("./happen.json") as unknown as Promise<IOxford>,
  "happily": () => import("./happily.json") as unknown as Promise<IOxford>,
  "happiness": () => import("./happiness.json") as unknown as Promise<IOxford>,
  "happy": () => import("./happy.json") as unknown as Promise<IOxford>,
  "harassment": () => import("./harassment.json") as unknown as Promise<IOxford>,
  "harbor": () => import("./harbor.json") as unknown as Promise<IOxford>,
  "harbour": () => import("./harbour.json") as unknown as Promise<IOxford>,
  "hard": () => import("./hard.json") as unknown as Promise<IOxford>,
  "hardly": () => import("./hardly.json") as unknown as Promise<IOxford>,
  "hardship": () => import("./hardship.json") as unknown as Promise<IOxford>,
  "hardware": () => import("./hardware.json") as unknown as Promise<IOxford>,
  "harm": () => import("./harm.json") as unknown as Promise<IOxford>,
  "harmful": () => import("./harmful.json") as unknown as Promise<IOxford>,
  "harmony": () => import("./harmony.json") as unknown as Promise<IOxford>,
  "harsh": () => import("./harsh.json") as unknown as Promise<IOxford>,
  "harvest": () => import("./harvest.json") as unknown as Promise<IOxford>,
  "hasty": () => import("./hasty.json") as unknown as Promise<IOxford>,
  "hat": () => import("./hat.json") as unknown as Promise<IOxford>,
  "hate": () => import("./hate.json") as unknown as Promise<IOxford>,
  "hatred": () => import("./hatred.json") as unknown as Promise<IOxford>,
  "haunt": () => import("./haunt.json") as unknown as Promise<IOxford>,
  "have": () => import("./have.json") as unknown as Promise<IOxford>,
  "hazard": () => import("./hazard.json") as unknown as Promise<IOxford>,
  "hazy": () => import("./hazy.json") as unknown as Promise<IOxford>,
};
