import { ICard } from "../../../types/i-card.js";

import jacket_json from "./jacket.json" with { type: "json" };
import jagged_json from "./jagged.json" with { type: "json" };
import jail_json from "./jail.json" with { type: "json" };
import jam_json from "./jam.json" with { type: "json" };
import january_json from "./january.json" with { type: "json" };
import jazz_json from "./jazz.json" with { type: "json" };

export const dir_ja: Record<string, ICard> = {
  "jacket": jacket_json as unknown as ICard,
  "jagged": jagged_json as unknown as ICard,
  "jail": jail_json as unknown as ICard,
  "jam": jam_json as unknown as ICard,
  "january": january_json as unknown as ICard,
  "jazz": jazz_json as unknown as ICard,
};
