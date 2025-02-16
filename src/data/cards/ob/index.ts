import { ICard } from "../../../types/i-card.js";

import obedient_json from "./obedient.json" with { type: "json" };
import obesity_json from "./obesity.json" with { type: "json" };
import obey_json from "./obey.json" with { type: "json" };
import object_json from "./object.json" with { type: "json" };
import objection_json from "./objection.json" with { type: "json" };
import objective_json from "./objective.json" with { type: "json" };
import obligation_json from "./obligation.json" with { type: "json" };
import oblige_json from "./oblige.json" with { type: "json" };
import observant_json from "./observant.json" with { type: "json" };
import observation_json from "./observation.json" with { type: "json" };
import observe_json from "./observe.json" with { type: "json" };
import observer_json from "./observer.json" with { type: "json" };
import obsess_json from "./obsess.json" with { type: "json" };
import obsession_json from "./obsession.json" with { type: "json" };
import obstacle_json from "./obstacle.json" with { type: "json" };
import obtain_json from "./obtain.json" with { type: "json" };
import obvious_json from "./obvious.json" with { type: "json" };
import obviously_json from "./obviously.json" with { type: "json" };

export const dir_ob: Record<string, ICard> = {
  "obedient": obedient_json as unknown as ICard,
  "obesity": obesity_json as unknown as ICard,
  "obey": obey_json as unknown as ICard,
  "object": object_json as unknown as ICard,
  "objection": objection_json as unknown as ICard,
  "objective": objective_json as unknown as ICard,
  "obligation": obligation_json as unknown as ICard,
  "oblige": oblige_json as unknown as ICard,
  "observant": observant_json as unknown as ICard,
  "observation": observation_json as unknown as ICard,
  "observe": observe_json as unknown as ICard,
  "observer": observer_json as unknown as ICard,
  "obsess": obsess_json as unknown as ICard,
  "obsession": obsession_json as unknown as ICard,
  "obstacle": obstacle_json as unknown as ICard,
  "obtain": obtain_json as unknown as ICard,
  "obvious": obvious_json as unknown as ICard,
  "obviously": obviously_json as unknown as ICard,
};
