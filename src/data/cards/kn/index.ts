import { ICard } from "../../../types/i-card.js";

import knee_json from "./knee.json" with { type: "json" };
import kneel_json from "./kneel.json" with { type: "json" };
import knife_json from "./knife.json" with { type: "json" };
import knock_json from "./knock.json" with { type: "json" };
import know_json from "./know.json" with { type: "json" };
import knowledge_json from "./knowledge.json" with { type: "json" };
import known_json from "./known.json" with { type: "json" };

export const dir_kn: Record<string, ICard> = {
  "knee": knee_json as unknown as ICard,
  "kneel": kneel_json as unknown as ICard,
  "knife": knife_json as unknown as ICard,
  "knock": knock_json as unknown as ICard,
  "know": know_json as unknown as ICard,
  "knowledge": knowledge_json as unknown as ICard,
  "known": known_json as unknown as ICard,
};
