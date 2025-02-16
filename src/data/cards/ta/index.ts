import { ICard } from "../../../types/i-card.js";

import table_json from "./table.json" with { type: "json" };
import tablet_json from "./tablet.json" with { type: "json" };
import tackle_json from "./tackle.json" with { type: "json" };
import tact_json from "./tact.json" with { type: "json" };
import tactic_json from "./tactic.json" with { type: "json" };
import tactical_json from "./tactical.json" with { type: "json" };
import tag_json from "./tag.json" with { type: "json" };
import tail_json from "./tail.json" with { type: "json" };
import take_json from "./take.json" with { type: "json" };
import tale_json from "./tale.json" with { type: "json" };
import talent_json from "./talent.json" with { type: "json" };
import talented_json from "./talented.json" with { type: "json" };
import talk_json from "./talk.json" with { type: "json" };
import tall_json from "./tall.json" with { type: "json" };
import tank_json from "./tank.json" with { type: "json" };
import tap_json from "./tap.json" with { type: "json" };
import tape_json from "./tape.json" with { type: "json" };
import target_json from "./target.json" with { type: "json" };
import task_json from "./task.json" with { type: "json" };
import taste_json from "./taste.json" with { type: "json" };
import tax_json from "./tax.json" with { type: "json" };
import taxi_json from "./taxi.json" with { type: "json" };
import taxpayer_json from "./taxpayer.json" with { type: "json" };

export const dir_ta: Record<string, ICard> = {
  "table": table_json as unknown as ICard,
  "tablet": tablet_json as unknown as ICard,
  "tackle": tackle_json as unknown as ICard,
  "tact": tact_json as unknown as ICard,
  "tactic": tactic_json as unknown as ICard,
  "tactical": tactical_json as unknown as ICard,
  "tag": tag_json as unknown as ICard,
  "tail": tail_json as unknown as ICard,
  "take": take_json as unknown as ICard,
  "tale": tale_json as unknown as ICard,
  "talent": talent_json as unknown as ICard,
  "talented": talented_json as unknown as ICard,
  "talk": talk_json as unknown as ICard,
  "tall": tall_json as unknown as ICard,
  "tank": tank_json as unknown as ICard,
  "tap": tap_json as unknown as ICard,
  "tape": tape_json as unknown as ICard,
  "target": target_json as unknown as ICard,
  "task": task_json as unknown as ICard,
  "taste": taste_json as unknown as ICard,
  "tax": tax_json as unknown as ICard,
  "taxi": taxi_json as unknown as ICard,
  "taxpayer": taxpayer_json as unknown as ICard,
};
