import { ICard } from "../../../types/i-card.js";

import wrap_json from "./wrap.json" with { type: "json" };
import wrath_json from "./wrath.json" with { type: "json" };
import wretched_json from "./wretched.json" with { type: "json" };
import wrist_json from "./wrist.json" with { type: "json" };
import write_json from "./write.json" with { type: "json" };
import writer_json from "./writer.json" with { type: "json" };
import writing_json from "./writing.json" with { type: "json" };
import written_json from "./written.json" with { type: "json" };
import wrong_json from "./wrong.json" with { type: "json" };

export const dir_wr: Record<string, ICard> = {
  "wrap": wrap_json as unknown as ICard,
  "wrath": wrath_json as unknown as ICard,
  "wretched": wretched_json as unknown as ICard,
  "wrist": wrist_json as unknown as ICard,
  "write": write_json as unknown as ICard,
  "writer": writer_json as unknown as ICard,
  "writing": writing_json as unknown as ICard,
  "written": written_json as unknown as ICard,
  "wrong": wrong_json as unknown as ICard,
};
