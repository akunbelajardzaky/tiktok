/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NextjWhereInput } from "./NextjWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { NextjOrderByInput } from "./NextjOrderByInput";

@ArgsType()
class NextjFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NextjWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => NextjWhereInput, { nullable: true })
  @Type(() => NextjWhereInput)
  where?: NextjWhereInput;

  @ApiProperty({
    required: false,
    type: [NextjOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [NextjOrderByInput], { nullable: true })
  @Type(() => NextjOrderByInput)
  orderBy?: Array<NextjOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { NextjFindManyArgs as NextjFindManyArgs };
