import { IOxford } from "../../../types/index.js";

export const dir_id: Record<string, () => Promise<IOxford>> = {
  "id": () => import("./id.json") as unknown as Promise<IOxford>,
  "idea": () => import("./idea.json") as unknown as Promise<IOxford>,
  "ideal": () => import("./ideal.json") as unknown as Promise<IOxford>,
  "ideally": () => import("./ideally.json") as unknown as Promise<IOxford>,
  "identical": () => import("./identical.json") as unknown as Promise<IOxford>,
  "identification": () => import("./identification.json") as unknown as Promise<IOxford>,
  "identify": () => import("./identify.json") as unknown as Promise<IOxford>,
  "identity": () => import("./identity.json") as unknown as Promise<IOxford>,
  "ideological": () => import("./ideological.json") as unknown as Promise<IOxford>,
  "ideology": () => import("./ideology.json") as unknown as Promise<IOxford>,
  "idiot": () => import("./idiot.json") as unknown as Promise<IOxford>,
  "idle": () => import("./idle.json") as unknown as Promise<IOxford>,
  "idol": () => import("./idol.json") as unknown as Promise<IOxford>,
};
