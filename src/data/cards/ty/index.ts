import { ICard } from "../../../types/i-card.js";

import type_json from "./type.json" with { type: "json" };
import typical_json from "./typical.json" with { type: "json" };
import typically_json from "./typically.json" with { type: "json" };
import tyrant_json from "./tyrant.json" with { type: "json" };
import tyre_json from "./tyre.json" with { type: "json" };

export const dir_ty: Record<string, ICard> = {
  "type": type_json as unknown as ICard,
  "typical": typical_json as unknown as ICard,
  "typically": typically_json as unknown as ICard,
  "tyrant": tyrant_json as unknown as ICard,
  "tyre": tyre_json as unknown as ICard,
};
