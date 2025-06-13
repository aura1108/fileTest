import { Module } from "@nestjs/common";
import { UserFileModuleBase } from "./base/userFile.module.base";
import { UserFileService } from "./userFile.service";
import { UserFileController } from "./userFile.controller";
import { UserFileResolver } from "./userFile.resolver";

@Module({
  imports: [UserFileModuleBase],
  controllers: [UserFileController],
  providers: [UserFileService, UserFileResolver],
  exports: [UserFileService],
})
export class UserFileModule {}
