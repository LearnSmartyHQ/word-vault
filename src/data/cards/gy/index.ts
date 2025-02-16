import { ICard } from "../../../types/i-card.js";

import gym_json from "./gym.json" with { type: "json" };

export const dir_gy: Record<string, ICard> = {
  "gym": gym_json as unknown as ICard,
};
