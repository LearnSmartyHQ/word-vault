import { ICard } from "../../../types/i-card.js";

import black_json from "./black.json" with { type: "json" };
import blade_json from "./blade.json" with { type: "json" };
import blame_json from "./blame.json" with { type: "json" };
import blank_json from "./blank.json" with { type: "json" };
import blanket_json from "./blanket.json" with { type: "json" };
import blast_json from "./blast.json" with { type: "json" };
import bleed_json from "./bleed.json" with { type: "json" };
import blend_json from "./blend.json" with { type: "json" };
import bless_json from "./bless.json" with { type: "json" };
import blessing_json from "./blessing.json" with { type: "json" };
import blind_json from "./blind.json" with { type: "json" };
import block_json from "./block.json" with { type: "json" };
import blog_json from "./blog.json" with { type: "json" };
import bloke_json from "./bloke.json" with { type: "json" };
import blond_json from "./blond.json" with { type: "json" };
import blonde_json from "./blonde.json" with { type: "json" };
import blood_json from "./blood.json" with { type: "json" };
import blow_json from "./blow.json" with { type: "json" };
import blue_json from "./blue.json" with { type: "json" };
import blunder_json from "./blunder.json" with { type: "json" };

export const dir_bl: Record<string, ICard> = {
  "black": black_json as unknown as ICard,
  "blade": blade_json as unknown as ICard,
  "blame": blame_json as unknown as ICard,
  "blank": blank_json as unknown as ICard,
  "blanket": blanket_json as unknown as ICard,
  "blast": blast_json as unknown as ICard,
  "bleed": bleed_json as unknown as ICard,
  "blend": blend_json as unknown as ICard,
  "bless": bless_json as unknown as ICard,
  "blessing": blessing_json as unknown as ICard,
  "blind": blind_json as unknown as ICard,
  "block": block_json as unknown as ICard,
  "blog": blog_json as unknown as ICard,
  "bloke": bloke_json as unknown as ICard,
  "blond": blond_json as unknown as ICard,
  "blonde": blonde_json as unknown as ICard,
  "blood": blood_json as unknown as ICard,
  "blow": blow_json as unknown as ICard,
  "blue": blue_json as unknown as ICard,
  "blunder": blunder_json as unknown as ICard,
};
