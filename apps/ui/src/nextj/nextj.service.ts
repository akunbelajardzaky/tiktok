import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NextjServiceBase } from "./base/nextj.service.base";

@Injectable()
export class NextjService extends NextjServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
