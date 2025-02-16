import { ICard } from "../../../types/i-card.js";

import oven_json from "./oven.json" with { type: "json" };
import over_json from "./over.json" with { type: "json" };
import overall_json from "./overall.json" with { type: "json" };
import overcome_json from "./overcome.json" with { type: "json" };
import overlook_json from "./overlook.json" with { type: "json" };
import overly_json from "./overly.json" with { type: "json" };
import overnight_json from "./overnight.json" with { type: "json" };
import overseas_json from "./overseas.json" with { type: "json" };
import oversee_json from "./oversee.json" with { type: "json" };
import overtime_json from "./overtime.json" with { type: "json" };
import overturn_json from "./overturn.json" with { type: "json" };
import overwhelm_json from "./overwhelm.json" with { type: "json" };
import overwhelming_json from "./overwhelming.json" with { type: "json" };

export const dir_ov: Record<string, ICard> = {
  "oven": oven_json as unknown as ICard,
  "over": over_json as unknown as ICard,
  "overall": overall_json as unknown as ICard,
  "overcome": overcome_json as unknown as ICard,
  "overlook": overlook_json as unknown as ICard,
  "overly": overly_json as unknown as ICard,
  "overnight": overnight_json as unknown as ICard,
  "overseas": overseas_json as unknown as ICard,
  "oversee": oversee_json as unknown as ICard,
  "overtime": overtime_json as unknown as ICard,
  "overturn": overturn_json as unknown as ICard,
  "overwhelm": overwhelm_json as unknown as ICard,
  "overwhelming": overwhelming_json as unknown as ICard,
};
