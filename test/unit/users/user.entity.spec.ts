import { UserEntity, UserProps } from '@/users/domain/entities/user.entity'
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'

describe('UserEntity unit test', () => {
  let props: UserProps
  let sut: UserEntity

  beforeAll(() => {
    props = UserDataBuilder({})

    sut = new UserEntity(props)
  })

  it('Test constructor method', () => {
    expect(sut).toBeDefined()
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('Should be return a name of user', () => {
    expect(sut.props.name).toBeDefined()
    expect(sut.props.name).toEqual(props.name)
    expect(typeof sut.props.name).toBe('string')
    expect(sut.getName()).toBe(props.name)
  })

  it('Should be return a email of user', () => {
    expect(sut.props.email).toBeDefined()
    expect(sut.props.email).toEqual(props.email)
    expect(typeof sut.props.email).toBe('string')
    expect(sut.getEmail()).toBe(props.email)
  })

  it('Should be return a When user has created', () => {
    expect(sut.props.createdAt).toBeDefined()
    expect(sut.props.createdAt).toEqual(props.createdAt)
    expect(typeof sut.props.createdAt).toBe('object')
    expect(sut.getCreatedAt()).toBe(props.createdAt)
  })
})
