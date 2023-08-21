import { ClassValidatorFields } from '@/shared/domain/validator/class-validator-fields'
import { UserProps } from '../entities/user.entity'
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator'

export class UserRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string

  @MaxLength(255)
  @IsEmail()
  @IsNotEmpty()
  email: string

  @MaxLength(128)
  @IsString()
  @IsNotEmpty()
  password: string

  @IsDate()
  @IsOptional()
  createdAt?: Date

  constructor({ name, email, password, createdAt }: UserProps) {
    Object.assign(this, { name, email, password, createdAt })
  }
}

export class userValidator extends ClassValidatorFields<UserRules> {
  validate(data: UserProps): boolean {
    return super.validate(new UserRules(data ?? ({} as UserProps)))
  }
}

export class UserValidatorFactory {
  static create(): userValidator {
    return new userValidator()
  }
}
