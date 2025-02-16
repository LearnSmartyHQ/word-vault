import { ICard } from "../../../types/i-card.js";

import huge_json from "./huge.json" with { type: "json" };
import hullo_json from "./hullo.json" with { type: "json" };
import human_json from "./human.json" with { type: "json" };
import humanitarian_json from "./humanitarian.json" with { type: "json" };
import humanity_json from "./humanity.json" with { type: "json" };
import humble_json from "./humble.json" with { type: "json" };
import humid_json from "./humid.json" with { type: "json" };
import humor_json from "./humor.json" with { type: "json" };
import humorous_json from "./humorous.json" with { type: "json" };
import humour_json from "./humour.json" with { type: "json" };
import hundred_json from "./hundred.json" with { type: "json" };
import hunger_json from "./hunger.json" with { type: "json" };
import hungry_json from "./hungry.json" with { type: "json" };
import hunt_json from "./hunt.json" with { type: "json" };
import hunting_json from "./hunting.json" with { type: "json" };
import hurricane_json from "./hurricane.json" with { type: "json" };
import hurry_json from "./hurry.json" with { type: "json" };
import hurt_json from "./hurt.json" with { type: "json" };
import husband_json from "./husband.json" with { type: "json" };

export const dir_hu: Record<string, ICard> = {
  "huge": huge_json as unknown as ICard,
  "hullo": hullo_json as unknown as ICard,
  "human": human_json as unknown as ICard,
  "humanitarian": humanitarian_json as unknown as ICard,
  "humanity": humanity_json as unknown as ICard,
  "humble": humble_json as unknown as ICard,
  "humid": humid_json as unknown as ICard,
  "humor": humor_json as unknown as ICard,
  "humorous": humorous_json as unknown as ICard,
  "humour": humour_json as unknown as ICard,
  "hundred": hundred_json as unknown as ICard,
  "hunger": hunger_json as unknown as ICard,
  "hungry": hungry_json as unknown as ICard,
  "hunt": hunt_json as unknown as ICard,
  "hunting": hunting_json as unknown as ICard,
  "hurricane": hurricane_json as unknown as ICard,
  "hurry": hurry_json as unknown as ICard,
  "hurt": hurt_json as unknown as ICard,
  "husband": husband_json as unknown as ICard,
};
