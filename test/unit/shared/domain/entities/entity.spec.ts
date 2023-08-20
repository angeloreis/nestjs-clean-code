import { Entity } from '@/shared/domain/entities/entity'
import { validate as uuidValidate } from 'uuid'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('Should be defined', () => {
    const props = {
      prop1: 'value-0',
      prop2: 700,
    }

    const entity = new StubEntity(props)

    expect(entity).toBeDefined()
  })

  it('Should set props and id', () => {
    const props = {
      prop1: 'value-1',
      prop2: 800,
    }

    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it('Should accept a valid uuid', () => {
    const props = {
      prop1: 'value-2',
      prop2: 900,
    }

    const id = '8f93397a-da66-4952-bb35-0a91facde02c'

    const entity = new StubEntity(props, id)

    expect(uuidValidate(id)).toBeTruthy()
    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toStrictEqual(id)
  })

  it('Should convert entity to a JSON', () => {
    const props = {
      prop1: 'value-3',
      prop2: 999,
    }

    const id = '9074234b-b660-4926-a1ad-122c94d92af5'

    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    })
  })
})
