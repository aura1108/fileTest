import { UserFileWhereInput } from "./UserFileWhereInput";
import { UserFileOrderByInput } from "./UserFileOrderByInput";

export type UserFileFindManyArgs = {
  where?: UserFileWhereInput;
  orderBy?: Array<UserFileOrderByInput>;
  skip?: number;
  take?: number;
};
