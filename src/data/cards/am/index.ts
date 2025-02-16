import { ICard } from "../../../types/i-card.js";

import amateur_json from "./amateur.json" with { type: "json" };
import amazed_json from "./amazed.json" with { type: "json" };
import amazing_json from "./amazing.json" with { type: "json" };
import ambassador_json from "./ambassador.json" with { type: "json" };
import ambition_json from "./ambition.json" with { type: "json" };
import ambitious_json from "./ambitious.json" with { type: "json" };
import ambulance_json from "./ambulance.json" with { type: "json" };
import ambush_json from "./ambush.json" with { type: "json" };
import amend_json from "./amend.json" with { type: "json" };
import amendment_json from "./amendment.json" with { type: "json" };
import america_json from "./america.json" with { type: "json" };
import amid_json from "./amid.json" with { type: "json" };
import among_json from "./among.json" with { type: "json" };
import amount_json from "./amount.json" with { type: "json" };
import amplify_json from "./amplify.json" with { type: "json" };
import amusing_json from "./amusing.json" with { type: "json" };

export const dir_am: Record<string, ICard> = {
  "amateur": amateur_json as unknown as ICard,
  "amazed": amazed_json as unknown as ICard,
  "amazing": amazing_json as unknown as ICard,
  "ambassador": ambassador_json as unknown as ICard,
  "ambition": ambition_json as unknown as ICard,
  "ambitious": ambitious_json as unknown as ICard,
  "ambulance": ambulance_json as unknown as ICard,
  "ambush": ambush_json as unknown as ICard,
  "amend": amend_json as unknown as ICard,
  "amendment": amendment_json as unknown as ICard,
  "america": america_json as unknown as ICard,
  "amid": amid_json as unknown as ICard,
  "among": among_json as unknown as ICard,
  "amount": amount_json as unknown as ICard,
  "amplify": amplify_json as unknown as ICard,
  "amusing": amusing_json as unknown as ICard,
};
