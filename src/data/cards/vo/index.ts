import { ICard } from "../../../types/i-card.js";

import vocal_json from "./vocal.json" with { type: "json" };
import vocation_json from "./vocation.json" with { type: "json" };
import voice_json from "./voice.json" with { type: "json" };
import volume_json from "./volume.json" with { type: "json" };
import voluntary_json from "./voluntary.json" with { type: "json" };
import volunteer_json from "./volunteer.json" with { type: "json" };
import vote_json from "./vote.json" with { type: "json" };
import voting_json from "./voting.json" with { type: "json" };
import vow_json from "./vow.json" with { type: "json" };

export const dir_vo: Record<string, ICard> = {
  "vocal": vocal_json as unknown as ICard,
  "vocation": vocation_json as unknown as ICard,
  "voice": voice_json as unknown as ICard,
  "volume": volume_json as unknown as ICard,
  "voluntary": voluntary_json as unknown as ICard,
  "volunteer": volunteer_json as unknown as ICard,
  "vote": vote_json as unknown as ICard,
  "voting": voting_json as unknown as ICard,
  "vow": vow_json as unknown as ICard,
};
