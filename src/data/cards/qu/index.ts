import { ICard } from "../../../types/i-card.js";

import qualification_json from "./qualification.json" with { type: "json" };
import qualified_json from "./qualified.json" with { type: "json" };
import qualify_json from "./qualify.json" with { type: "json" };
import quality_json from "./quality.json" with { type: "json" };
import quantity_json from "./quantity.json" with { type: "json" };
import quarter_json from "./quarter.json" with { type: "json" };
import queen_json from "./queen.json" with { type: "json" };
import quench_json from "./quench.json" with { type: "json" };
import query_json from "./query.json" with { type: "json" };
import quest_json from "./quest.json" with { type: "json" };
import question_json from "./question.json" with { type: "json" };
import questionnaire_json from "./questionnaire.json" with { type: "json" };
import queue_json from "./queue.json" with { type: "json" };
import quick_json from "./quick.json" with { type: "json" };
import quickly_json from "./quickly.json" with { type: "json" };
import quid_json from "./quid.json" with { type: "json" };
import quiet_json from "./quiet.json" with { type: "json" };
import quietly_json from "./quietly.json" with { type: "json" };
import quit_json from "./quit.json" with { type: "json" };
import quite_json from "./quite.json" with { type: "json" };
import quota_json from "./quota.json" with { type: "json" };
import quotation_json from "./quotation.json" with { type: "json" };
import quote_json from "./quote.json" with { type: "json" };

export const dir_qu: Record<string, ICard> = {
  "qualification": qualification_json as unknown as ICard,
  "qualified": qualified_json as unknown as ICard,
  "qualify": qualify_json as unknown as ICard,
  "quality": quality_json as unknown as ICard,
  "quantity": quantity_json as unknown as ICard,
  "quarter": quarter_json as unknown as ICard,
  "queen": queen_json as unknown as ICard,
  "quench": quench_json as unknown as ICard,
  "query": query_json as unknown as ICard,
  "quest": quest_json as unknown as ICard,
  "question": question_json as unknown as ICard,
  "questionnaire": questionnaire_json as unknown as ICard,
  "queue": queue_json as unknown as ICard,
  "quick": quick_json as unknown as ICard,
  "quickly": quickly_json as unknown as ICard,
  "quid": quid_json as unknown as ICard,
  "quiet": quiet_json as unknown as ICard,
  "quietly": quietly_json as unknown as ICard,
  "quit": quit_json as unknown as ICard,
  "quite": quite_json as unknown as ICard,
  "quota": quota_json as unknown as ICard,
  "quotation": quotation_json as unknown as ICard,
  "quote": quote_json as unknown as ICard,
};
