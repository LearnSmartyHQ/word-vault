import { ICard } from "../../../types/i-card.js";

import up_json from "./up.json" with { type: "json" };
import upcoming_json from "./upcoming.json" with { type: "json" };
import update_json from "./update.json" with { type: "json" };
import upgrade_json from "./upgrade.json" with { type: "json" };
import uphold_json from "./uphold.json" with { type: "json" };
import upholstery_json from "./upholstery.json" with { type: "json" };
import upon_json from "./upon.json" with { type: "json" };
import upper_json from "./upper.json" with { type: "json" };
import upset_json from "./upset.json" with { type: "json" };
import upstairs_json from "./upstairs.json" with { type: "json" };
import upward_json from "./upward.json" with { type: "json" };
import upwards_json from "./upwards.json" with { type: "json" };

export const dir_up: Record<string, ICard> = {
  "up": up_json as unknown as ICard,
  "upcoming": upcoming_json as unknown as ICard,
  "update": update_json as unknown as ICard,
  "upgrade": upgrade_json as unknown as ICard,
  "uphold": uphold_json as unknown as ICard,
  "upholstery": upholstery_json as unknown as ICard,
  "upon": upon_json as unknown as ICard,
  "upper": upper_json as unknown as ICard,
  "upset": upset_json as unknown as ICard,
  "upstairs": upstairs_json as unknown as ICard,
  "upward": upward_json as unknown as ICard,
  "upwards": upwards_json as unknown as ICard,
};
