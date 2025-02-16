import { IOxford } from "../../../types/index.js";

export const dir_gl: Record<string, () => Promise<IOxford>> = {
  "glad": () => import("./glad.json") as unknown as Promise<IOxford>,
  "glance": () => import("./glance.json") as unknown as Promise<IOxford>,
  "glass": () => import("./glass.json") as unknown as Promise<IOxford>,
  "gleam": () => import("./gleam.json") as unknown as Promise<IOxford>,
  "glimpse": () => import("./glimpse.json") as unknown as Promise<IOxford>,
  "global": () => import("./global.json") as unknown as Promise<IOxford>,
  "globalization": () => import("./globalization.json") as unknown as Promise<IOxford>,
  "globe": () => import("./globe.json") as unknown as Promise<IOxford>,
  "gloomy": () => import("./gloomy.json") as unknown as Promise<IOxford>,
  "glorious": () => import("./glorious.json") as unknown as Promise<IOxford>,
  "glory": () => import("./glory.json") as unknown as Promise<IOxford>,
  "glove": () => import("./glove.json") as unknown as Promise<IOxford>,
};
