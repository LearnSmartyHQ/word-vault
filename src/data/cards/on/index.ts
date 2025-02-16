import { ICard } from "../../../types/i-card.js";

import on_json from "./on.json" with { type: "json" };
import once_json from "./once.json" with { type: "json" };
import one_another_json from "./one-another.json" with { type: "json" };
import one_json from "./one.json" with { type: "json" };
import ongoing_json from "./ongoing.json" with { type: "json" };
import onion_json from "./onion.json" with { type: "json" };
import online_json from "./online.json" with { type: "json" };
import only_json from "./only.json" with { type: "json" };
import onto_json from "./onto.json" with { type: "json" };

export const dir_on: Record<string, ICard> = {
  "on": on_json as unknown as ICard,
  "once": once_json as unknown as ICard,
  "one-another": one_another_json as unknown as ICard,
  "one": one_json as unknown as ICard,
  "ongoing": ongoing_json as unknown as ICard,
  "onion": onion_json as unknown as ICard,
  "online": online_json as unknown as ICard,
  "only": only_json as unknown as ICard,
  "onto": onto_json as unknown as ICard,
};
