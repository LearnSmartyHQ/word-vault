import { ICard } from "../../../types/i-card.js";

import island_json from "./island.json" with { type: "json" };
import isolate_json from "./isolate.json" with { type: "json" };
import isolated_json from "./isolated.json" with { type: "json" };
import isolation_json from "./isolation.json" with { type: "json" };
import issue_json from "./issue.json" with { type: "json" };

export const dir_is: Record<string, ICard> = {
  "island": island_json as unknown as ICard,
  "isolate": isolate_json as unknown as ICard,
  "isolated": isolated_json as unknown as ICard,
  "isolation": isolation_json as unknown as ICard,
  "issue": issue_json as unknown as ICard,
};
