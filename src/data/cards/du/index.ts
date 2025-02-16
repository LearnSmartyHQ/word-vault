import { ICard } from "../../../types/i-card.js";

import dual_json from "./dual.json" with { type: "json" };
import dub_json from "./dub.json" with { type: "json" };
import duck_json from "./duck.json" with { type: "json" };
import dude_json from "./dude.json" with { type: "json" };
import due_json from "./due.json" with { type: "json" };
import dull_json from "./dull.json" with { type: "json" };
import dumb_json from "./dumb.json" with { type: "json" };
import dump_json from "./dump.json" with { type: "json" };
import duo_json from "./duo.json" with { type: "json" };
import duplicate_json from "./duplicate.json" with { type: "json" };
import duration_json from "./duration.json" with { type: "json" };
import during_json from "./during.json" with { type: "json" };
import dust_json from "./dust.json" with { type: "json" };
import duty_json from "./duty.json" with { type: "json" };

export const dir_du: Record<string, ICard> = {
  "dual": dual_json as unknown as ICard,
  "dub": dub_json as unknown as ICard,
  "duck": duck_json as unknown as ICard,
  "dude": dude_json as unknown as ICard,
  "due": due_json as unknown as ICard,
  "dull": dull_json as unknown as ICard,
  "dumb": dumb_json as unknown as ICard,
  "dump": dump_json as unknown as ICard,
  "duo": duo_json as unknown as ICard,
  "duplicate": duplicate_json as unknown as ICard,
  "duration": duration_json as unknown as ICard,
  "during": during_json as unknown as ICard,
  "dust": dust_json as unknown as ICard,
  "duty": duty_json as unknown as ICard,
};
