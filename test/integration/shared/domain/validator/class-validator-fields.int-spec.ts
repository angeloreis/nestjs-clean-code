import { ClassValidatorFields } from '@/shared/domain/validator/class-validator-fields'
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'

class StubRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string

  @IsNumber()
  @IsNotEmpty()
  price: number

  constructor(data: any) {
    Object.assign(this, data)
  }
}

class StubCassValidatorFields extends ClassValidatorFields<StubRules> {
  validate(data: any): boolean {
    return super.validate(new StubRules(data))
  }
}

describe('ClassValidatorFields integration tests', () => {
  it('Should validate wuth errors', () => {
    const validator = new StubCassValidatorFields()
    expect(validator.validate(null)).toBeFalsy()
    expect(validator.errors).toStrictEqual({
      name: [
        'name should not be empty',
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ],
      price: [
        'price should not be empty',
        'price must be a number conforming to the specified constraints',
      ],
    })
  })

  it('Should validate wuth errors', () => {
    const validator = new StubCassValidatorFields()
    expect(validator.validate({ name: 'Angelo Reis', price: 10 })).toBeTruthy()
    expect(validator.validatedData).toStrictEqual(
      new StubRules({
        name: 'Angelo Reis',
        price: 10,
      }),
    )
    expect(validator.errors).toBeNull()
  })
})
