import { ICard } from "../../../types/i-card.js";

import kick_json from "./kick.json" with { type: "json" };
import kid_json from "./kid.json" with { type: "json" };
import kidnap_json from "./kidnap.json" with { type: "json" };
import kidney_json from "./kidney.json" with { type: "json" };
import kill_json from "./kill.json" with { type: "json" };
import killing_json from "./killing.json" with { type: "json" };
import kilometer_json from "./kilometer.json" with { type: "json" };
import kilometre_json from "./kilometre.json" with { type: "json" };
import kind_json from "./kind.json" with { type: "json" };
import kindergarten_json from "./kindergarten.json" with { type: "json" };
import king_json from "./king.json" with { type: "json" };
import kingdom_json from "./kingdom.json" with { type: "json" };
import kiss_json from "./kiss.json" with { type: "json" };
import kit_json from "./kit.json" with { type: "json" };
import kitchen_json from "./kitchen.json" with { type: "json" };

export const dir_ki: Record<string, ICard> = {
  "kick": kick_json as unknown as ICard,
  "kid": kid_json as unknown as ICard,
  "kidnap": kidnap_json as unknown as ICard,
  "kidney": kidney_json as unknown as ICard,
  "kill": kill_json as unknown as ICard,
  "killing": killing_json as unknown as ICard,
  "kilometer": kilometer_json as unknown as ICard,
  "kilometre": kilometre_json as unknown as ICard,
  "kind": kind_json as unknown as ICard,
  "kindergarten": kindergarten_json as unknown as ICard,
  "king": king_json as unknown as ICard,
  "kingdom": kingdom_json as unknown as ICard,
  "kiss": kiss_json as unknown as ICard,
  "kit": kit_json as unknown as ICard,
  "kitchen": kitchen_json as unknown as ICard,
};
