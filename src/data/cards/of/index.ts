import { ICard } from "../../../types/i-card.js";

import of_json from "./of.json" with { type: "json" };
import off_json from "./off.json" with { type: "json" };
import offence_json from "./offence.json" with { type: "json" };
import offend_json from "./offend.json" with { type: "json" };
import offender_json from "./offender.json" with { type: "json" };
import offense_json from "./offense.json" with { type: "json" };
import offensive_json from "./offensive.json" with { type: "json" };
import offer_json from "./offer.json" with { type: "json" };
import offering_json from "./offering.json" with { type: "json" };
import office_json from "./office.json" with { type: "json" };
import officer_json from "./officer.json" with { type: "json" };
import official_json from "./official.json" with { type: "json" };
import offspring_json from "./offspring.json" with { type: "json" };
import often_json from "./often.json" with { type: "json" };

export const dir_of: Record<string, ICard> = {
  "of": of_json as unknown as ICard,
  "off": off_json as unknown as ICard,
  "offence": offence_json as unknown as ICard,
  "offend": offend_json as unknown as ICard,
  "offender": offender_json as unknown as ICard,
  "offense": offense_json as unknown as ICard,
  "offensive": offensive_json as unknown as ICard,
  "offer": offer_json as unknown as ICard,
  "offering": offering_json as unknown as ICard,
  "office": office_json as unknown as ICard,
  "officer": officer_json as unknown as ICard,
  "official": official_json as unknown as ICard,
  "offspring": offspring_json as unknown as ICard,
  "often": often_json as unknown as ICard,
};
