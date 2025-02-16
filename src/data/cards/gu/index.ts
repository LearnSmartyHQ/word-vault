import { ICard } from "../../../types/i-card.js";

import guarantee_json from "./guarantee.json" with { type: "json" };
import guard_json from "./guard.json" with { type: "json" };
import guerrilla_json from "./guerrilla.json" with { type: "json" };
import guess_json from "./guess.json" with { type: "json" };
import guest_json from "./guest.json" with { type: "json" };
import guidance_json from "./guidance.json" with { type: "json" };
import guide_json from "./guide.json" with { type: "json" };
import guideline_json from "./guideline.json" with { type: "json" };
import guilt_json from "./guilt.json" with { type: "json" };
import guilty_json from "./guilty.json" with { type: "json" };
import guitar_json from "./guitar.json" with { type: "json" };
import gun_json from "./gun.json" with { type: "json" };
import gut_json from "./gut.json" with { type: "json" };
import guy_json from "./guy.json" with { type: "json" };

export const dir_gu: Record<string, ICard> = {
  "guarantee": guarantee_json as unknown as ICard,
  "guard": guard_json as unknown as ICard,
  "guerrilla": guerrilla_json as unknown as ICard,
  "guess": guess_json as unknown as ICard,
  "guest": guest_json as unknown as ICard,
  "guidance": guidance_json as unknown as ICard,
  "guide": guide_json as unknown as ICard,
  "guideline": guideline_json as unknown as ICard,
  "guilt": guilt_json as unknown as ICard,
  "guilty": guilty_json as unknown as ICard,
  "guitar": guitar_json as unknown as ICard,
  "gun": gun_json as unknown as ICard,
  "gut": gut_json as unknown as ICard,
  "guy": guy_json as unknown as ICard,
};
