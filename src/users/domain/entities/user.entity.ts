import { Entity } from '@/shared/domain/entities/entity'

export type UserProps = {
  name: string
  email: string
  password: string
  createdAt?: Date
}

export class UserEntity extends Entity<UserProps> {
  constructor(public readonly props: UserProps, id?: string) {
    super(props, id)
    this.props.createdAt = this.props.createdAt ?? new Date()
  }

  updateName(value: string): void {
    this.setName(value)
  }

  updatePassword(value: string): void {
    this.setPassword(value)
  }

  getName() {
    return this.props.name
  }

  private setName(value: string) {
    this.props.name = value
  }

  getPassword() {
    return this.props.password
  }

  private setPassword(value: string) {
    this.props.password = value
  }

  getEmail() {
    return this.props.email
  }

  getCreatedAt() {
    return this.props.createdAt
  }
}
