import { ICard } from "../../../types/i-card.js";

import pharmacy_json from "./pharmacy.json" with { type: "json" };
import phase_json from "./phase.json" with { type: "json" };
import phenomenon_json from "./phenomenon.json" with { type: "json" };
import philosopher_json from "./philosopher.json" with { type: "json" };
import philosophical_json from "./philosophical.json" with { type: "json" };
import philosophy_json from "./philosophy.json" with { type: "json" };
import phone_json from "./phone.json" with { type: "json" };
import photo_json from "./photo.json" with { type: "json" };
import photocopy_json from "./photocopy.json" with { type: "json" };
import photograph_json from "./photograph.json" with { type: "json" };
import photographer_json from "./photographer.json" with { type: "json" };
import photography_json from "./photography.json" with { type: "json" };
import phrase_json from "./phrase.json" with { type: "json" };
import physical_json from "./physical.json" with { type: "json" };
import physically_json from "./physically.json" with { type: "json" };
import physician_json from "./physician.json" with { type: "json" };
import physics_json from "./physics.json" with { type: "json" };

export const dir_ph: Record<string, ICard> = {
  "pharmacy": pharmacy_json as unknown as ICard,
  "phase": phase_json as unknown as ICard,
  "phenomenon": phenomenon_json as unknown as ICard,
  "philosopher": philosopher_json as unknown as ICard,
  "philosophical": philosophical_json as unknown as ICard,
  "philosophy": philosophy_json as unknown as ICard,
  "phone": phone_json as unknown as ICard,
  "photo": photo_json as unknown as ICard,
  "photocopy": photocopy_json as unknown as ICard,
  "photograph": photograph_json as unknown as ICard,
  "photographer": photographer_json as unknown as ICard,
  "photography": photography_json as unknown as ICard,
  "phrase": phrase_json as unknown as ICard,
  "physical": physical_json as unknown as ICard,
  "physically": physically_json as unknown as ICard,
  "physician": physician_json as unknown as ICard,
  "physics": physics_json as unknown as ICard,
};
