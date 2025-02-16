import { IOxford } from "../../../types/index.js";

export const dir_sc: Record<string, () => Promise<IOxford>> = {
  "scald": () => import("./scald.json") as unknown as Promise<IOxford>,
  "scale": () => import("./scale.json") as unknown as Promise<IOxford>,
  "scan": () => import("./scan.json") as unknown as Promise<IOxford>,
  "scandal": () => import("./scandal.json") as unknown as Promise<IOxford>,
  "scarce": () => import("./scarce.json") as unknown as Promise<IOxford>,
  "scare": () => import("./scare.json") as unknown as Promise<IOxford>,
  "scared": () => import("./scared.json") as unknown as Promise<IOxford>,
  "scary": () => import("./scary.json") as unknown as Promise<IOxford>,
  "scattered": () => import("./scattered.json") as unknown as Promise<IOxford>,
  "scenario": () => import("./scenario.json") as unknown as Promise<IOxford>,
  "scene": () => import("./scene.json") as unknown as Promise<IOxford>,
  "sceptical": () => import("./sceptical.json") as unknown as Promise<IOxford>,
  "schedule": () => import("./schedule.json") as unknown as Promise<IOxford>,
  "scheme": () => import("./scheme.json") as unknown as Promise<IOxford>,
  "scholar": () => import("./scholar.json") as unknown as Promise<IOxford>,
  "scholarship": () => import("./scholarship.json") as unknown as Promise<IOxford>,
  "school": () => import("./school.json") as unknown as Promise<IOxford>,
  "science": () => import("./science.json") as unknown as Promise<IOxford>,
  "scientific": () => import("./scientific.json") as unknown as Promise<IOxford>,
  "scientist": () => import("./scientist.json") as unknown as Promise<IOxford>,
  "scope": () => import("./scope.json") as unknown as Promise<IOxford>,
  "scorch": () => import("./scorch.json") as unknown as Promise<IOxford>,
  "score": () => import("./score.json") as unknown as Promise<IOxford>,
  "scotland": () => import("./scotland.json") as unknown as Promise<IOxford>,
  "scowl": () => import("./scowl.json") as unknown as Promise<IOxford>,
  "scratch": () => import("./scratch.json") as unknown as Promise<IOxford>,
  "scream": () => import("./scream.json") as unknown as Promise<IOxford>,
  "screen": () => import("./screen.json") as unknown as Promise<IOxford>,
  "screening": () => import("./screening.json") as unknown as Promise<IOxford>,
  "screw": () => import("./screw.json") as unknown as Promise<IOxford>,
  "script": () => import("./script.json") as unknown as Promise<IOxford>,
  "scrutiny": () => import("./scrutiny.json") as unknown as Promise<IOxford>,
  "sculpture": () => import("./sculpture.json") as unknown as Promise<IOxford>,
};
