import { ICard } from "../../../types/i-card.js";

import again_json from "./again.json" with { type: "json" };
import against_json from "./against.json" with { type: "json" };
import age_json from "./age.json" with { type: "json" };
import aged_json from "./aged.json" with { type: "json" };
import agency_json from "./agency.json" with { type: "json" };
import agenda_json from "./agenda.json" with { type: "json" };
import agent_json from "./agent.json" with { type: "json" };
import aggression_json from "./aggression.json" with { type: "json" };
import aggressive_json from "./aggressive.json" with { type: "json" };
import ago_json from "./ago.json" with { type: "json" };
import agree_json from "./agree.json" with { type: "json" };
import agreement_json from "./agreement.json" with { type: "json" };
import agricultural_json from "./agricultural.json" with { type: "json" };
import agriculture_json from "./agriculture.json" with { type: "json" };

export const dir_ag: Record<string, ICard> = {
  "again": again_json as unknown as ICard,
  "against": against_json as unknown as ICard,
  "age": age_json as unknown as ICard,
  "aged": aged_json as unknown as ICard,
  "agency": agency_json as unknown as ICard,
  "agenda": agenda_json as unknown as ICard,
  "agent": agent_json as unknown as ICard,
  "aggression": aggression_json as unknown as ICard,
  "aggressive": aggressive_json as unknown as ICard,
  "ago": ago_json as unknown as ICard,
  "agree": agree_json as unknown as ICard,
  "agreement": agreement_json as unknown as ICard,
  "agricultural": agricultural_json as unknown as ICard,
  "agriculture": agriculture_json as unknown as ICard,
};
