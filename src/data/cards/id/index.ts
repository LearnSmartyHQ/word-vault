import { ICard } from "../../../types/i-card.js";

import id_json from "./id.json" with { type: "json" };
import idea_json from "./idea.json" with { type: "json" };
import ideal_json from "./ideal.json" with { type: "json" };
import ideally_json from "./ideally.json" with { type: "json" };
import identical_json from "./identical.json" with { type: "json" };
import identification_json from "./identification.json" with { type: "json" };
import identify_json from "./identify.json" with { type: "json" };
import identity_json from "./identity.json" with { type: "json" };
import ideological_json from "./ideological.json" with { type: "json" };
import ideology_json from "./ideology.json" with { type: "json" };
import idiot_json from "./idiot.json" with { type: "json" };
import idle_json from "./idle.json" with { type: "json" };
import idol_json from "./idol.json" with { type: "json" };

export const dir_id: Record<string, ICard> = {
  "id": id_json as unknown as ICard,
  "idea": idea_json as unknown as ICard,
  "ideal": ideal_json as unknown as ICard,
  "ideally": ideally_json as unknown as ICard,
  "identical": identical_json as unknown as ICard,
  "identification": identification_json as unknown as ICard,
  "identify": identify_json as unknown as ICard,
  "identity": identity_json as unknown as ICard,
  "ideological": ideological_json as unknown as ICard,
  "ideology": ideology_json as unknown as ICard,
  "idiot": idiot_json as unknown as ICard,
  "idle": idle_json as unknown as ICard,
  "idol": idol_json as unknown as ICard,
};
