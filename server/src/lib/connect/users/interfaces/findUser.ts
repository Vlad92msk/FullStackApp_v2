import { StatusEnum } from './status'
import { RoleEnum } from '@lib/connect/roles/interfaces/role'

export type FindUser = {
  id?: string
  name?: string
  email?: string
  status?: StatusEnum
  role?: RoleEnum
}
