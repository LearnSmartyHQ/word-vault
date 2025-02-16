import { ICard } from "../../../types/i-card.js";

import piano_json from "./piano.json" with { type: "json" };
import pick_json from "./pick.json" with { type: "json" };
import picture_json from "./picture.json" with { type: "json" };
import pie_json from "./pie.json" with { type: "json" };
import piece_json from "./piece.json" with { type: "json" };
import pierce_json from "./pierce.json" with { type: "json" };
import pig_json from "./pig.json" with { type: "json" };
import pile_json from "./pile.json" with { type: "json" };
import pill_json from "./pill.json" with { type: "json" };
import pilot_json from "./pilot.json" with { type: "json" };
import pin_json from "./pin.json" with { type: "json" };
import pink_json from "./pink.json" with { type: "json" };
import pint_json from "./pint.json" with { type: "json" };
import pioneer_json from "./pioneer.json" with { type: "json" };
import pipe_json from "./pipe.json" with { type: "json" };
import pipeline_json from "./pipeline.json" with { type: "json" };
import pirate_json from "./pirate.json" with { type: "json" };
import pit_json from "./pit.json" with { type: "json" };
import pitch_json from "./pitch.json" with { type: "json" };
import pity_json from "./pity.json" with { type: "json" };
import pizza_json from "./pizza.json" with { type: "json" };

export const dir_pi: Record<string, ICard> = {
  "piano": piano_json as unknown as ICard,
  "pick": pick_json as unknown as ICard,
  "picture": picture_json as unknown as ICard,
  "pie": pie_json as unknown as ICard,
  "piece": piece_json as unknown as ICard,
  "pierce": pierce_json as unknown as ICard,
  "pig": pig_json as unknown as ICard,
  "pile": pile_json as unknown as ICard,
  "pill": pill_json as unknown as ICard,
  "pilot": pilot_json as unknown as ICard,
  "pin": pin_json as unknown as ICard,
  "pink": pink_json as unknown as ICard,
  "pint": pint_json as unknown as ICard,
  "pioneer": pioneer_json as unknown as ICard,
  "pipe": pipe_json as unknown as ICard,
  "pipeline": pipeline_json as unknown as ICard,
  "pirate": pirate_json as unknown as ICard,
  "pit": pit_json as unknown as ICard,
  "pitch": pitch_json as unknown as ICard,
  "pity": pity_json as unknown as ICard,
  "pizza": pizza_json as unknown as ICard,
};
