import { ICard } from "../../../types/i-card.js";

import small_json from "./small.json" with { type: "json" };
import smart_json from "./smart.json" with { type: "json" };
import smartphone_json from "./smartphone.json" with { type: "json" };
import smash_json from "./smash.json" with { type: "json" };
import smell_json from "./smell.json" with { type: "json" };
import smile_json from "./smile.json" with { type: "json" };
import smoke_json from "./smoke.json" with { type: "json" };
import smoking_json from "./smoking.json" with { type: "json" };
import smooth_json from "./smooth.json" with { type: "json" };

export const dir_sm: Record<string, ICard> = {
  "small": small_json as unknown as ICard,
  "smart": smart_json as unknown as ICard,
  "smartphone": smartphone_json as unknown as ICard,
  "smash": smash_json as unknown as ICard,
  "smell": smell_json as unknown as ICard,
  "smile": smile_json as unknown as ICard,
  "smoke": smoke_json as unknown as ICard,
  "smoking": smoking_json as unknown as ICard,
  "smooth": smooth_json as unknown as ICard,
};
