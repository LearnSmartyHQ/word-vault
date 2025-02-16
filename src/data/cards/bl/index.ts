import { IOxford } from "../../../types/index.js";

export const dir_bl: Record<string, () => Promise<IOxford>> = {
  "black": () => import("./black.json") as unknown as Promise<IOxford>,
  "blade": () => import("./blade.json") as unknown as Promise<IOxford>,
  "blame": () => import("./blame.json") as unknown as Promise<IOxford>,
  "blank": () => import("./blank.json") as unknown as Promise<IOxford>,
  "blanket": () => import("./blanket.json") as unknown as Promise<IOxford>,
  "blast": () => import("./blast.json") as unknown as Promise<IOxford>,
  "bleed": () => import("./bleed.json") as unknown as Promise<IOxford>,
  "blend": () => import("./blend.json") as unknown as Promise<IOxford>,
  "bless": () => import("./bless.json") as unknown as Promise<IOxford>,
  "blessing": () => import("./blessing.json") as unknown as Promise<IOxford>,
  "blind": () => import("./blind.json") as unknown as Promise<IOxford>,
  "block": () => import("./block.json") as unknown as Promise<IOxford>,
  "blog": () => import("./blog.json") as unknown as Promise<IOxford>,
  "bloke": () => import("./bloke.json") as unknown as Promise<IOxford>,
  "blond": () => import("./blond.json") as unknown as Promise<IOxford>,
  "blonde": () => import("./blonde.json") as unknown as Promise<IOxford>,
  "blood": () => import("./blood.json") as unknown as Promise<IOxford>,
  "blow": () => import("./blow.json") as unknown as Promise<IOxford>,
  "blue": () => import("./blue.json") as unknown as Promise<IOxford>,
  "blunder": () => import("./blunder.json") as unknown as Promise<IOxford>,
};
