import { ICard } from "../../../types/i-card.js";

import rub_json from "./rub.json" with { type: "json" };
import rubber_json from "./rubber.json" with { type: "json" };
import rubbish_json from "./rubbish.json" with { type: "json" };
import rude_json from "./rude.json" with { type: "json" };
import rugby_json from "./rugby.json" with { type: "json" };
import ruin_json from "./ruin.json" with { type: "json" };
import rule_json from "./rule.json" with { type: "json" };
import ruling_json from "./ruling.json" with { type: "json" };
import rumor_json from "./rumor.json" with { type: "json" };
import rumour_json from "./rumour.json" with { type: "json" };
import run_json from "./run.json" with { type: "json" };
import runner_json from "./runner.json" with { type: "json" };
import running_json from "./running.json" with { type: "json" };
import rural_json from "./rural.json" with { type: "json" };
import rush_json from "./rush.json" with { type: "json" };

export const dir_ru: Record<string, ICard> = {
  "rub": rub_json as unknown as ICard,
  "rubber": rubber_json as unknown as ICard,
  "rubbish": rubbish_json as unknown as ICard,
  "rude": rude_json as unknown as ICard,
  "rugby": rugby_json as unknown as ICard,
  "ruin": ruin_json as unknown as ICard,
  "rule": rule_json as unknown as ICard,
  "ruling": ruling_json as unknown as ICard,
  "rumor": rumor_json as unknown as ICard,
  "rumour": rumour_json as unknown as ICard,
  "run": run_json as unknown as ICard,
  "runner": runner_json as unknown as ICard,
  "running": running_json as unknown as ICard,
  "rural": rural_json as unknown as ICard,
  "rush": rush_json as unknown as ICard,
};
