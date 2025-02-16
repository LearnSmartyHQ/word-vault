import { ICard } from "../../../types/i-card.js";

import at_json from "./at.json" with { type: "json" };
import athlete_json from "./athlete.json" with { type: "json" };
import athletic_json from "./athletic.json" with { type: "json" };
import atmosphere_json from "./atmosphere.json" with { type: "json" };
import atrocity_json from "./atrocity.json" with { type: "json" };
import attach_json from "./attach.json" with { type: "json" };
import attachment_json from "./attachment.json" with { type: "json" };
import attack_json from "./attack.json" with { type: "json" };
import attain_json from "./attain.json" with { type: "json" };
import attempt_json from "./attempt.json" with { type: "json" };
import attend_json from "./attend.json" with { type: "json" };
import attendance_json from "./attendance.json" with { type: "json" };
import attention_json from "./attention.json" with { type: "json" };
import attitude_json from "./attitude.json" with { type: "json" };
import attorney_json from "./attorney.json" with { type: "json" };
import attract_json from "./attract.json" with { type: "json" };
import attraction_json from "./attraction.json" with { type: "json" };
import attractive_json from "./attractive.json" with { type: "json" };
import attribute_json from "./attribute.json" with { type: "json" };

export const dir_at: Record<string, ICard> = {
  "at": at_json as unknown as ICard,
  "athlete": athlete_json as unknown as ICard,
  "athletic": athletic_json as unknown as ICard,
  "atmosphere": atmosphere_json as unknown as ICard,
  "atrocity": atrocity_json as unknown as ICard,
  "attach": attach_json as unknown as ICard,
  "attachment": attachment_json as unknown as ICard,
  "attack": attack_json as unknown as ICard,
  "attain": attain_json as unknown as ICard,
  "attempt": attempt_json as unknown as ICard,
  "attend": attend_json as unknown as ICard,
  "attendance": attendance_json as unknown as ICard,
  "attention": attention_json as unknown as ICard,
  "attitude": attitude_json as unknown as ICard,
  "attorney": attorney_json as unknown as ICard,
  "attract": attract_json as unknown as ICard,
  "attraction": attraction_json as unknown as ICard,
  "attractive": attractive_json as unknown as ICard,
  "attribute": attribute_json as unknown as ICard,
};
