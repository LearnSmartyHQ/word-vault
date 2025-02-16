import { ICard } from "../../../types/i-card.js";

import vegetable_json from "./vegetable.json" with { type: "json" };
import vehicle_json from "./vehicle.json" with { type: "json" };
import vein_json from "./vein.json" with { type: "json" };
import ventilate_json from "./ventilate.json" with { type: "json" };
import venture_json from "./venture.json" with { type: "json" };
import venue_json from "./venue.json" with { type: "json" };
import verb_json from "./verb.json" with { type: "json" };
import verbal_json from "./verbal.json" with { type: "json" };
import verdict_json from "./verdict.json" with { type: "json" };
import verify_json from "./verify.json" with { type: "json" };
import vermin_json from "./vermin.json" with { type: "json" };
import verse_json from "./verse.json" with { type: "json" };
import version_json from "./version.json" with { type: "json" };
import versus_json from "./versus.json" with { type: "json" };
import vertical_json from "./vertical.json" with { type: "json" };
import very_json from "./very.json" with { type: "json" };
import vessel_json from "./vessel.json" with { type: "json" };
import vet_json from "./vet.json" with { type: "json" };
import veteran_json from "./veteran.json" with { type: "json" };

export const dir_ve: Record<string, ICard> = {
  "vegetable": vegetable_json as unknown as ICard,
  "vehicle": vehicle_json as unknown as ICard,
  "vein": vein_json as unknown as ICard,
  "ventilate": ventilate_json as unknown as ICard,
  "venture": venture_json as unknown as ICard,
  "venue": venue_json as unknown as ICard,
  "verb": verb_json as unknown as ICard,
  "verbal": verbal_json as unknown as ICard,
  "verdict": verdict_json as unknown as ICard,
  "verify": verify_json as unknown as ICard,
  "vermin": vermin_json as unknown as ICard,
  "verse": verse_json as unknown as ICard,
  "version": version_json as unknown as ICard,
  "versus": versus_json as unknown as ICard,
  "vertical": vertical_json as unknown as ICard,
  "very": very_json as unknown as ICard,
  "vessel": vessel_json as unknown as ICard,
  "vet": vet_json as unknown as ICard,
  "veteran": veteran_json as unknown as ICard,
};
