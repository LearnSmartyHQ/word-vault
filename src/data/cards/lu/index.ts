import { ICard } from "../../../types/i-card.js";

import lubricate_json from "./lubricate.json" with { type: "json" };
import luck_json from "./luck.json" with { type: "json" };
import luckily_json from "./luckily.json" with { type: "json" };
import lucky_json from "./lucky.json" with { type: "json" };
import lump_json from "./lump.json" with { type: "json" };
import lunatic_json from "./lunatic.json" with { type: "json" };
import lunch_json from "./lunch.json" with { type: "json" };
import lunchtime_json from "./lunchtime.json" with { type: "json" };
import lung_json from "./lung.json" with { type: "json" };
import luxury_json from "./luxury.json" with { type: "json" };

export const dir_lu: Record<string, ICard> = {
  "lubricate": lubricate_json as unknown as ICard,
  "luck": luck_json as unknown as ICard,
  "luckily": luckily_json as unknown as ICard,
  "lucky": lucky_json as unknown as ICard,
  "lump": lump_json as unknown as ICard,
  "lunatic": lunatic_json as unknown as ICard,
  "lunch": lunch_json as unknown as ICard,
  "lunchtime": lunchtime_json as unknown as ICard,
  "lung": lung_json as unknown as ICard,
  "luxury": luxury_json as unknown as ICard,
};
