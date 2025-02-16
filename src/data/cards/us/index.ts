import { ICard } from "../../../types/i-card.js";

import us_json from "./us.json" with { type: "json" };
import usage_json from "./usage.json" with { type: "json" };
import use_json from "./use.json" with { type: "json" };
import used_to_json from "./used-to.json" with { type: "json" };
import used_json from "./used.json" with { type: "json" };
import used1_json from "./used1.json" with { type: "json" };
import used2_json from "./used2.json" with { type: "json" };
import useful_json from "./useful.json" with { type: "json" };
import useless_json from "./useless.json" with { type: "json" };
import user_json from "./user.json" with { type: "json" };
import usual_json from "./usual.json" with { type: "json" };
import usually_json from "./usually.json" with { type: "json" };

export const dir_us: Record<string, ICard> = {
  "us": us_json as unknown as ICard,
  "usage": usage_json as unknown as ICard,
  "use": use_json as unknown as ICard,
  "used-to": used_to_json as unknown as ICard,
  "used": used_json as unknown as ICard,
  "used1": used1_json as unknown as ICard,
  "used2": used2_json as unknown as ICard,
  "useful": useful_json as unknown as ICard,
  "useless": useless_json as unknown as ICard,
  "user": user_json as unknown as ICard,
  "usual": usual_json as unknown as ICard,
  "usually": usually_json as unknown as ICard,
};
