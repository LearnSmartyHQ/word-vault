import { ICard } from "../../../types/i-card.js";

import skeptical_json from "./skeptical.json" with { type: "json" };
import sketch_json from "./sketch.json" with { type: "json" };
import ski_json from "./ski.json" with { type: "json" };
import skiing_json from "./skiing.json" with { type: "json" };
import skill_json from "./skill.json" with { type: "json" };
import skilled_json from "./skilled.json" with { type: "json" };
import skim_json from "./skim.json" with { type: "json" };
import skin_json from "./skin.json" with { type: "json" };
import skip_json from "./skip.json" with { type: "json" };
import skirt_json from "./skirt.json" with { type: "json" };
import skull_json from "./skull.json" with { type: "json" };
import sky_json from "./sky.json" with { type: "json" };

export const dir_sk: Record<string, ICard> = {
  "skeptical": skeptical_json as unknown as ICard,
  "sketch": sketch_json as unknown as ICard,
  "ski": ski_json as unknown as ICard,
  "skiing": skiing_json as unknown as ICard,
  "skill": skill_json as unknown as ICard,
  "skilled": skilled_json as unknown as ICard,
  "skim": skim_json as unknown as ICard,
  "skin": skin_json as unknown as ICard,
  "skip": skip_json as unknown as ICard,
  "skirt": skirt_json as unknown as ICard,
  "skull": skull_json as unknown as ICard,
  "sky": sky_json as unknown as ICard,
};
