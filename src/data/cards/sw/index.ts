import { ICard } from "../../../types/i-card.js";

import swallow_json from "./swallow.json" with { type: "json" };
import swap_json from "./swap.json" with { type: "json" };
import swarm_json from "./swarm.json" with { type: "json" };
import swear_json from "./swear.json" with { type: "json" };
import sweater_json from "./sweater.json" with { type: "json" };
import sweep_json from "./sweep.json" with { type: "json" };
import sweet_json from "./sweet.json" with { type: "json" };
import swim_json from "./swim.json" with { type: "json" };
import swimming_json from "./swimming.json" with { type: "json" };
import swing_json from "./swing.json" with { type: "json" };
import switch_json from "./switch.json" with { type: "json" };
import sword_json from "./sword.json" with { type: "json" };

export const dir_sw: Record<string, ICard> = {
  "swallow": swallow_json as unknown as ICard,
  "swap": swap_json as unknown as ICard,
  "swarm": swarm_json as unknown as ICard,
  "swear": swear_json as unknown as ICard,
  "sweater": sweater_json as unknown as ICard,
  "sweep": sweep_json as unknown as ICard,
  "sweet": sweet_json as unknown as ICard,
  "swim": swim_json as unknown as ICard,
  "swimming": swimming_json as unknown as ICard,
  "swing": swing_json as unknown as ICard,
  "switch": switch_json as unknown as ICard,
  "sword": sword_json as unknown as ICard,
};
