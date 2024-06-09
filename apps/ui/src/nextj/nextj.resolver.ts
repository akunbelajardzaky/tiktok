import * as graphql from "@nestjs/graphql";
import { NextjResolverBase } from "./base/nextj.resolver.base";
import { Nextj } from "./base/Nextj";
import { NextjService } from "./nextj.service";

@graphql.Resolver(() => Nextj)
export class NextjResolver extends NextjResolverBase {
  constructor(protected readonly service: NextjService) {
    super(service);
  }
}
