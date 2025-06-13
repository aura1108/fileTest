import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserFileService } from "./userFile.service";
import { UserFileControllerBase } from "./base/userFile.controller.base";

@swagger.ApiTags("userFiles")
@common.Controller("userFiles")
export class UserFileController extends UserFileControllerBase {
  constructor(protected readonly service: UserFileService) {
    super(service);
  }
}
