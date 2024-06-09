import { Module } from "@nestjs/common";
import { NextjModuleBase } from "./base/nextj.module.base";
import { NextjService } from "./nextj.service";
import { NextjResolver } from "./nextj.resolver";

@Module({
  imports: [NextjModuleBase],
  providers: [NextjService, NextjResolver],
  exports: [NextjService],
})
export class NextjModule {}
