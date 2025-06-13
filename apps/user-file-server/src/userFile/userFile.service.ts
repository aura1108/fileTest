import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserFileServiceBase } from "./base/userFile.service.base";

@Injectable()
export class UserFileService extends UserFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
