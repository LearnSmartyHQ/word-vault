import { IOxford } from "../../../types/index.js";

export const dir_du: Record<string, () => Promise<IOxford>> = {
  "dual": () => import("./dual.json") as unknown as Promise<IOxford>,
  "dub": () => import("./dub.json") as unknown as Promise<IOxford>,
  "duck": () => import("./duck.json") as unknown as Promise<IOxford>,
  "dude": () => import("./dude.json") as unknown as Promise<IOxford>,
  "due": () => import("./due.json") as unknown as Promise<IOxford>,
  "dull": () => import("./dull.json") as unknown as Promise<IOxford>,
  "dumb": () => import("./dumb.json") as unknown as Promise<IOxford>,
  "dump": () => import("./dump.json") as unknown as Promise<IOxford>,
  "duo": () => import("./duo.json") as unknown as Promise<IOxford>,
  "duplicate": () => import("./duplicate.json") as unknown as Promise<IOxford>,
  "duration": () => import("./duration.json") as unknown as Promise<IOxford>,
  "during": () => import("./during.json") as unknown as Promise<IOxford>,
  "dust": () => import("./dust.json") as unknown as Promise<IOxford>,
  "duty": () => import("./duty.json") as unknown as Promise<IOxford>,
};
