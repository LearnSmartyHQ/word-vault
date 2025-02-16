import { ICard } from "../../../types/i-card.js";

import much_json from "./much.json" with { type: "json" };
import mud_json from "./mud.json" with { type: "json" };
import multiple_json from "./multiple.json" with { type: "json" };
import multiply_json from "./multiply.json" with { type: "json" };
import multitude_json from "./multitude.json" with { type: "json" };
import mum_json from "./mum.json" with { type: "json" };
import mumble_json from "./mumble.json" with { type: "json" };
import mummy_json from "./mummy.json" with { type: "json" };
import municipal_json from "./municipal.json" with { type: "json" };
import murder_json from "./murder.json" with { type: "json" };
import muscle_json from "./muscle.json" with { type: "json" };
import museum_json from "./museum.json" with { type: "json" };
import mushroom_json from "./mushroom.json" with { type: "json" };
import music_json from "./music.json" with { type: "json" };
import musical_json from "./musical.json" with { type: "json" };
import musician_json from "./musician.json" with { type: "json" };
import must_json from "./must.json" with { type: "json" };
import mute_json from "./mute.json" with { type: "json" };
import mutual_json from "./mutual.json" with { type: "json" };

export const dir_mu: Record<string, ICard> = {
  "much": much_json as unknown as ICard,
  "mud": mud_json as unknown as ICard,
  "multiple": multiple_json as unknown as ICard,
  "multiply": multiply_json as unknown as ICard,
  "multitude": multitude_json as unknown as ICard,
  "mum": mum_json as unknown as ICard,
  "mumble": mumble_json as unknown as ICard,
  "mummy": mummy_json as unknown as ICard,
  "municipal": municipal_json as unknown as ICard,
  "murder": murder_json as unknown as ICard,
  "muscle": muscle_json as unknown as ICard,
  "museum": museum_json as unknown as ICard,
  "mushroom": mushroom_json as unknown as ICard,
  "music": music_json as unknown as ICard,
  "musical": musical_json as unknown as ICard,
  "musician": musician_json as unknown as ICard,
  "must": must_json as unknown as ICard,
  "mute": mute_json as unknown as ICard,
  "mutual": mutual_json as unknown as ICard,
};
