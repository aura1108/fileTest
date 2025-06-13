import { UserFile as TUserFile } from "../api/userFile/UserFile";

export const USERFILE_TITLE_FIELD = "id";

export const UserFileTitle = (record: TUserFile): string => {
  return record.id?.toString() || String(record.id);
};
