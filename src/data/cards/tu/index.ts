import { ICard } from "../../../types/i-card.js";

import tube_json from "./tube.json" with { type: "json" };
import tuesday_json from "./tuesday.json" with { type: "json" };
import tuition_json from "./tuition.json" with { type: "json" };
import tumor_json from "./tumor.json" with { type: "json" };
import tumult_json from "./tumult.json" with { type: "json" };
import tune_json from "./tune.json" with { type: "json" };
import tunnel_json from "./tunnel.json" with { type: "json" };
import turn_json from "./turn.json" with { type: "json" };
import turnout_json from "./turnout.json" with { type: "json" };
import turnover_json from "./turnover.json" with { type: "json" };

export const dir_tu: Record<string, ICard> = {
  "tube": tube_json as unknown as ICard,
  "tuesday": tuesday_json as unknown as ICard,
  "tuition": tuition_json as unknown as ICard,
  "tumor": tumor_json as unknown as ICard,
  "tumult": tumult_json as unknown as ICard,
  "tune": tune_json as unknown as ICard,
  "tunnel": tunnel_json as unknown as ICard,
  "turn": turn_json as unknown as ICard,
  "turnout": turnout_json as unknown as ICard,
  "turnover": turnover_json as unknown as ICard,
};
