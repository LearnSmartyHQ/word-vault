import { ICard } from "../../../types/i-card.js";

import auction_json from "./auction.json" with { type: "json" };
import audible_json from "./audible.json" with { type: "json" };
import audience_json from "./audience.json" with { type: "json" };
import audio_json from "./audio.json" with { type: "json" };
import audit_json from "./audit.json" with { type: "json" };
import august_json from "./august.json" with { type: "json" };
import aunt_json from "./aunt.json" with { type: "json" };
import authentic_json from "./authentic.json" with { type: "json" };
import author_json from "./author.json" with { type: "json" };
import authority_json from "./authority.json" with { type: "json" };
import authorize_json from "./authorize.json" with { type: "json" };
import auto_json from "./auto.json" with { type: "json" };
import automatic_json from "./automatic.json" with { type: "json" };
import automatically_json from "./automatically.json" with { type: "json" };
import autonomy_json from "./autonomy.json" with { type: "json" };
import autumn_json from "./autumn.json" with { type: "json" };

export const dir_au: Record<string, ICard> = {
  "auction": auction_json as unknown as ICard,
  "audible": audible_json as unknown as ICard,
  "audience": audience_json as unknown as ICard,
  "audio": audio_json as unknown as ICard,
  "audit": audit_json as unknown as ICard,
  "august": august_json as unknown as ICard,
  "aunt": aunt_json as unknown as ICard,
  "authentic": authentic_json as unknown as ICard,
  "author": author_json as unknown as ICard,
  "authority": authority_json as unknown as ICard,
  "authorize": authorize_json as unknown as ICard,
  "auto": auto_json as unknown as ICard,
  "automatic": automatic_json as unknown as ICard,
  "automatically": automatically_json as unknown as ICard,
  "autonomy": autonomy_json as unknown as ICard,
  "autumn": autumn_json as unknown as ICard,
};
