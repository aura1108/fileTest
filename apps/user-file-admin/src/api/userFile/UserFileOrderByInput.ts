import { SortOrder } from "../../util/SortOrder";

export type UserFileOrderByInput = {
  adhaar?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  panCard?: SortOrder;
  updatedAt?: SortOrder;
};
