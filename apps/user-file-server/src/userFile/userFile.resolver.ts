import * as graphql from "@nestjs/graphql";
import { UserFileResolverBase } from "./base/userFile.resolver.base";
import { UserFile } from "./base/UserFile";
import { UserFileService } from "./userFile.service";

@graphql.Resolver(() => UserFile)
export class UserFileResolver extends UserFileResolverBase {
  constructor(protected readonly service: UserFileService) {
    super(service);
  }
}
