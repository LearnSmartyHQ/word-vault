import { ICard } from "../../../types/i-card.js";

import or_json from "./or.json" with { type: "json" };
import oral_json from "./oral.json" with { type: "json" };
import orange_json from "./orange.json" with { type: "json" };
import orchestra_json from "./orchestra.json" with { type: "json" };
import order_json from "./order.json" with { type: "json" };
import ordinary_json from "./ordinary.json" with { type: "json" };
import organ_json from "./organ.json" with { type: "json" };
import organic_json from "./organic.json" with { type: "json" };
import organization_json from "./organization.json" with { type: "json" };
import organizational_json from "./organizational.json" with { type: "json" };
import organize_json from "./organize.json" with { type: "json" };
import organized_json from "./organized.json" with { type: "json" };
import organizer_json from "./organizer.json" with { type: "json" };
import orientation_json from "./orientation.json" with { type: "json" };
import origin_json from "./origin.json" with { type: "json" };
import original_json from "./original.json" with { type: "json" };
import originally_json from "./originally.json" with { type: "json" };
import originate_json from "./originate.json" with { type: "json" };

export const dir_or: Record<string, ICard> = {
  "or": or_json as unknown as ICard,
  "oral": oral_json as unknown as ICard,
  "orange": orange_json as unknown as ICard,
  "orchestra": orchestra_json as unknown as ICard,
  "order": order_json as unknown as ICard,
  "ordinary": ordinary_json as unknown as ICard,
  "organ": organ_json as unknown as ICard,
  "organic": organic_json as unknown as ICard,
  "organization": organization_json as unknown as ICard,
  "organizational": organizational_json as unknown as ICard,
  "organize": organize_json as unknown as ICard,
  "organized": organized_json as unknown as ICard,
  "organizer": organizer_json as unknown as ICard,
  "orientation": orientation_json as unknown as ICard,
  "origin": origin_json as unknown as ICard,
  "original": original_json as unknown as ICard,
  "originally": originally_json as unknown as ICard,
  "originate": originate_json as unknown as ICard,
};
