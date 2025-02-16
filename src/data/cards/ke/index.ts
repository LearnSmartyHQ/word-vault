import { ICard } from "../../../types/i-card.js";

import keen_json from "./keen.json" with { type: "json" };
import keep_json from "./keep.json" with { type: "json" };
import keg_json from "./keg.json" with { type: "json" };
import kettle_json from "./kettle.json" with { type: "json" };
import key_json from "./key.json" with { type: "json" };
import keyboard_json from "./keyboard.json" with { type: "json" };

export const dir_ke: Record<string, ICard> = {
  "keen": keen_json as unknown as ICard,
  "keep": keep_json as unknown as ICard,
  "keg": keg_json as unknown as ICard,
  "kettle": kettle_json as unknown as ICard,
  "key": key_json as unknown as ICard,
  "keyboard": keyboard_json as unknown as ICard,
};
