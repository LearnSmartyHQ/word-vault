import { ICard } from "../../../types/i-card.js";

import affair_json from "./affair.json" with { type: "json" };
import affect_json from "./affect.json" with { type: "json" };
import affection_json from "./affection.json" with { type: "json" };
import affirm_json from "./affirm.json" with { type: "json" };
import afford_json from "./afford.json" with { type: "json" };
import affordable_json from "./affordable.json" with { type: "json" };
import afraid_json from "./afraid.json" with { type: "json" };
import after_json from "./after.json" with { type: "json" };
import aftermath_json from "./aftermath.json" with { type: "json" };
import afternoon_json from "./afternoon.json" with { type: "json" };
import afterward_json from "./afterward.json" with { type: "json" };
import afterwards_json from "./afterwards.json" with { type: "json" };

export const dir_af: Record<string, ICard> = {
  "affair": affair_json as unknown as ICard,
  "affect": affect_json as unknown as ICard,
  "affection": affection_json as unknown as ICard,
  "affirm": affirm_json as unknown as ICard,
  "afford": afford_json as unknown as ICard,
  "affordable": affordable_json as unknown as ICard,
  "afraid": afraid_json as unknown as ICard,
  "after": after_json as unknown as ICard,
  "aftermath": aftermath_json as unknown as ICard,
  "afternoon": afternoon_json as unknown as ICard,
  "afterward": afterward_json as unknown as ICard,
  "afterwards": afterwards_json as unknown as ICard,
};
