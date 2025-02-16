import { ICard } from "../../../types/i-card.js";

import gain_json from "./gain.json" with { type: "json" };
import gallant_json from "./gallant.json" with { type: "json" };
import gallery_json from "./gallery.json" with { type: "json" };
import gallon_json from "./gallon.json" with { type: "json" };
import gambling_json from "./gambling.json" with { type: "json" };
import game_json from "./game.json" with { type: "json" };
import gaming_json from "./gaming.json" with { type: "json" };
import gang_json from "./gang.json" with { type: "json" };
import gap_json from "./gap.json" with { type: "json" };
import garage_json from "./garage.json" with { type: "json" };
import garbage_json from "./garbage.json" with { type: "json" };
import garden_json from "./garden.json" with { type: "json" };
import garlic_json from "./garlic.json" with { type: "json" };
import gas_json from "./gas.json" with { type: "json" };
import gasoline_json from "./gasoline.json" with { type: "json" };
import gate_json from "./gate.json" with { type: "json" };
import gather_json from "./gather.json" with { type: "json" };
import gathering_json from "./gathering.json" with { type: "json" };
import gay_json from "./gay.json" with { type: "json" };
import gaze_json from "./gaze.json" with { type: "json" };

export const dir_ga: Record<string, ICard> = {
  "gain": gain_json as unknown as ICard,
  "gallant": gallant_json as unknown as ICard,
  "gallery": gallery_json as unknown as ICard,
  "gallon": gallon_json as unknown as ICard,
  "gambling": gambling_json as unknown as ICard,
  "game": game_json as unknown as ICard,
  "gaming": gaming_json as unknown as ICard,
  "gang": gang_json as unknown as ICard,
  "gap": gap_json as unknown as ICard,
  "garage": garage_json as unknown as ICard,
  "garbage": garbage_json as unknown as ICard,
  "garden": garden_json as unknown as ICard,
  "garlic": garlic_json as unknown as ICard,
  "gas": gas_json as unknown as ICard,
  "gasoline": gasoline_json as unknown as ICard,
  "gate": gate_json as unknown as ICard,
  "gather": gather_json as unknown as ICard,
  "gathering": gathering_json as unknown as ICard,
  "gay": gay_json as unknown as ICard,
  "gaze": gaze_json as unknown as ICard,
};
