import { ICard } from "../../../types/i-card.js";

import open_json from "./open.json" with { type: "json" };
import opening_json from "./opening.json" with { type: "json" };
import openly_json from "./openly.json" with { type: "json" };
import opera_json from "./opera.json" with { type: "json" };
import operate_json from "./operate.json" with { type: "json" };
import operation_json from "./operation.json" with { type: "json" };
import operational_json from "./operational.json" with { type: "json" };
import operator_json from "./operator.json" with { type: "json" };
import opinion_json from "./opinion.json" with { type: "json" };
import opponent_json from "./opponent.json" with { type: "json" };
import opportunity_json from "./opportunity.json" with { type: "json" };
import oppose_json from "./oppose.json" with { type: "json" };
import opposed_json from "./opposed.json" with { type: "json" };
import opposite_json from "./opposite.json" with { type: "json" };
import opposition_json from "./opposition.json" with { type: "json" };
import opt_json from "./opt.json" with { type: "json" };
import optical_json from "./optical.json" with { type: "json" };
import optimism_json from "./optimism.json" with { type: "json" };
import optimistic_json from "./optimistic.json" with { type: "json" };
import optimize_json from "./optimize.json" with { type: "json" };
import option_json from "./option.json" with { type: "json" };

export const dir_op: Record<string, ICard> = {
  "open": open_json as unknown as ICard,
  "opening": opening_json as unknown as ICard,
  "openly": openly_json as unknown as ICard,
  "opera": opera_json as unknown as ICard,
  "operate": operate_json as unknown as ICard,
  "operation": operation_json as unknown as ICard,
  "operational": operational_json as unknown as ICard,
  "operator": operator_json as unknown as ICard,
  "opinion": opinion_json as unknown as ICard,
  "opponent": opponent_json as unknown as ICard,
  "opportunity": opportunity_json as unknown as ICard,
  "oppose": oppose_json as unknown as ICard,
  "opposed": opposed_json as unknown as ICard,
  "opposite": opposite_json as unknown as ICard,
  "opposition": opposition_json as unknown as ICard,
  "opt": opt_json as unknown as ICard,
  "optical": optical_json as unknown as ICard,
  "optimism": optimism_json as unknown as ICard,
  "optimistic": optimistic_json as unknown as ICard,
  "optimize": optimize_json as unknown as ICard,
  "option": option_json as unknown as ICard,
};
