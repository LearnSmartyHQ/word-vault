import { ICard } from "../../../types/i-card.js";

import you_json from "./you.json" with { type: "json" };
import young_json from "./young.json" with { type: "json" };
import youngster_json from "./youngster.json" with { type: "json" };
import your_json from "./your.json" with { type: "json" };
import yours_json from "./yours.json" with { type: "json" };
import yourself_json from "./yourself.json" with { type: "json" };
import youth_json from "./youth.json" with { type: "json" };

export const dir_yo: Record<string, ICard> = {
  "you": you_json as unknown as ICard,
  "young": young_json as unknown as ICard,
  "youngster": youngster_json as unknown as ICard,
  "your": your_json as unknown as ICard,
  "yours": yours_json as unknown as ICard,
  "yourself": yourself_json as unknown as ICard,
  "youth": youth_json as unknown as ICard,
};
