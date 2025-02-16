import { ICard } from "../../../types/i-card.js";

import glad_json from "./glad.json" with { type: "json" };
import glance_json from "./glance.json" with { type: "json" };
import glass_json from "./glass.json" with { type: "json" };
import gleam_json from "./gleam.json" with { type: "json" };
import glimpse_json from "./glimpse.json" with { type: "json" };
import global_json from "./global.json" with { type: "json" };
import globalization_json from "./globalization.json" with { type: "json" };
import globe_json from "./globe.json" with { type: "json" };
import gloomy_json from "./gloomy.json" with { type: "json" };
import glorious_json from "./glorious.json" with { type: "json" };
import glory_json from "./glory.json" with { type: "json" };
import glove_json from "./glove.json" with { type: "json" };

export const dir_gl: Record<string, ICard> = {
  "glad": glad_json as unknown as ICard,
  "glance": glance_json as unknown as ICard,
  "glass": glass_json as unknown as ICard,
  "gleam": gleam_json as unknown as ICard,
  "glimpse": glimpse_json as unknown as ICard,
  "global": global_json as unknown as ICard,
  "globalization": globalization_json as unknown as ICard,
  "globe": globe_json as unknown as ICard,
  "gloomy": gloomy_json as unknown as ICard,
  "glorious": glorious_json as unknown as ICard,
  "glory": glory_json as unknown as ICard,
  "glove": glove_json as unknown as ICard,
};
