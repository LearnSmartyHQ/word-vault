import { ICard } from "../../../types/i-card.js";

import job_json from "./job.json" with { type: "json" };
import join_json from "./join.json" with { type: "json" };
import joint_json from "./joint.json" with { type: "json" };
import joke_json from "./joke.json" with { type: "json" };
import jolly_json from "./jolly.json" with { type: "json" };
import journal_json from "./journal.json" with { type: "json" };
import journalism_json from "./journalism.json" with { type: "json" };
import journalist_json from "./journalist.json" with { type: "json" };
import journey_json from "./journey.json" with { type: "json" };
import joy_json from "./joy.json" with { type: "json" };

export const dir_jo: Record<string, ICard> = {
  "job": job_json as unknown as ICard,
  "join": join_json as unknown as ICard,
  "joint": joint_json as unknown as ICard,
  "joke": joke_json as unknown as ICard,
  "jolly": jolly_json as unknown as ICard,
  "journal": journal_json as unknown as ICard,
  "journalism": journalism_json as unknown as ICard,
  "journalist": journalist_json as unknown as ICard,
  "journey": journey_json as unknown as ICard,
  "joy": joy_json as unknown as ICard,
};
