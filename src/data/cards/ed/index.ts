import { ICard } from "../../../types/i-card.js";

import edge_json from "./edge.json" with { type: "json" };
import edit_json from "./edit.json" with { type: "json" };
import edition_json from "./edition.json" with { type: "json" };
import editor_json from "./editor.json" with { type: "json" };
import editorial_json from "./editorial.json" with { type: "json" };
import educate_json from "./educate.json" with { type: "json" };
import educated_json from "./educated.json" with { type: "json" };
import education_json from "./education.json" with { type: "json" };
import educational_json from "./educational.json" with { type: "json" };
import educator_json from "./educator.json" with { type: "json" };

export const dir_ed: Record<string, ICard> = {
  "edge": edge_json as unknown as ICard,
  "edit": edit_json as unknown as ICard,
  "edition": edition_json as unknown as ICard,
  "editor": editor_json as unknown as ICard,
  "editorial": editorial_json as unknown as ICard,
  "educate": educate_json as unknown as ICard,
  "educated": educated_json as unknown as ICard,
  "education": education_json as unknown as ICard,
  "educational": educational_json as unknown as ICard,
  "educator": educator_json as unknown as ICard,
};
