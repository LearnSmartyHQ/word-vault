import { ICard } from "../../../types/i-card.js";

import aid_json from "./aid.json" with { type: "json" };
import aide_json from "./aide.json" with { type: "json" };
import aids_json from "./aids.json" with { type: "json" };
import aim_json from "./aim.json" with { type: "json" };
import air_json from "./air.json" with { type: "json" };
import aircraft_json from "./aircraft.json" with { type: "json" };
import airline_json from "./airline.json" with { type: "json" };
import airport_json from "./airport.json" with { type: "json" };

export const dir_ai: Record<string, ICard> = {
  "aid": aid_json as unknown as ICard,
  "aide": aide_json as unknown as ICard,
  "aids": aids_json as unknown as ICard,
  "aim": aim_json as unknown as ICard,
  "air": air_json as unknown as ICard,
  "aircraft": aircraft_json as unknown as ICard,
  "airline": airline_json as unknown as ICard,
  "airport": airport_json as unknown as ICard,
};
