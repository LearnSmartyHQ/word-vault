import { ICard } from "../../../types/i-card.js";

import giant_json from "./giant.json" with { type: "json" };
import gift_json from "./gift.json" with { type: "json" };
import gig_json from "./gig.json" with { type: "json" };
import girl_json from "./girl.json" with { type: "json" };
import girlfriend_json from "./girlfriend.json" with { type: "json" };
import give_json from "./give.json" with { type: "json" };

export const dir_gi: Record<string, ICard> = {
  "giant": giant_json as unknown as ICard,
  "gift": gift_json as unknown as ICard,
  "gig": gig_json as unknown as ICard,
  "girl": girl_json as unknown as ICard,
  "girlfriend": girlfriend_json as unknown as ICard,
  "give": give_json as unknown as ICard,
};
