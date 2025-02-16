import { ICard } from "../../../types/i-card.js";

import go_json from "./go.json" with { type: "json" };
import goal_json from "./goal.json" with { type: "json" };
import god_json from "./god.json" with { type: "json" };
import gold_json from "./gold.json" with { type: "json" };
import golden_json from "./golden.json" with { type: "json" };
import golf_json from "./golf.json" with { type: "json" };
import good_morning_json from "./good-morning.json" with { type: "json" };
import good_night_json from "./good-night.json" with { type: "json" };
import good_json from "./good.json" with { type: "json" };
import goodbye_json from "./goodbye.json" with { type: "json" };
import goodness_json from "./goodness.json" with { type: "json" };
import goods_json from "./goods.json" with { type: "json" };
import gorgeous_json from "./gorgeous.json" with { type: "json" };
import gosh_json from "./gosh.json" with { type: "json" };
import govern_json from "./govern.json" with { type: "json" };
import governance_json from "./governance.json" with { type: "json" };
import government_json from "./government.json" with { type: "json" };
import governor_json from "./governor.json" with { type: "json" };

export const dir_go: Record<string, ICard> = {
  "go": go_json as unknown as ICard,
  "goal": goal_json as unknown as ICard,
  "god": god_json as unknown as ICard,
  "gold": gold_json as unknown as ICard,
  "golden": golden_json as unknown as ICard,
  "golf": golf_json as unknown as ICard,
  "good-morning": good_morning_json as unknown as ICard,
  "good-night": good_night_json as unknown as ICard,
  "good": good_json as unknown as ICard,
  "goodbye": goodbye_json as unknown as ICard,
  "goodness": goodness_json as unknown as ICard,
  "goods": goods_json as unknown as ICard,
  "gorgeous": gorgeous_json as unknown as ICard,
  "gosh": gosh_json as unknown as ICard,
  "govern": govern_json as unknown as ICard,
  "governance": governance_json as unknown as ICard,
  "government": government_json as unknown as ICard,
  "governor": governor_json as unknown as ICard,
};
