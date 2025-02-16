import type { IOxford } from "../../../types/index.js";

export const dir_ed: Record<string, () => Promise<IOxford>> = {
  "edge": () => import("./edge.json") as unknown as Promise<IOxford>,
  "edit": () => import("./edit.json") as unknown as Promise<IOxford>,
  "edition": () => import("./edition.json") as unknown as Promise<IOxford>,
  "editor": () => import("./editor.json") as unknown as Promise<IOxford>,
  "editorial": () => import("./editorial.json") as unknown as Promise<IOxford>,
  "educate": () => import("./educate.json") as unknown as Promise<IOxford>,
  "educated": () => import("./educated.json") as unknown as Promise<IOxford>,
  "education": () => import("./education.json") as unknown as Promise<IOxford>,
  "educational": () => import("./educational.json") as unknown as Promise<IOxford>,
  "educator": () => import("./educator.json") as unknown as Promise<IOxford>,
};
