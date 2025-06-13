import { JsonValue } from "type-fest";

export type UserFile = {
  adhaar: JsonValue;
  createdAt: Date;
  id: string;
  panCard: JsonValue;
  updatedAt: Date;
};
