import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserFileWhereInput = {
  adhaar?: JsonFilter;
  id?: StringFilter;
  panCard?: JsonFilter;
};
