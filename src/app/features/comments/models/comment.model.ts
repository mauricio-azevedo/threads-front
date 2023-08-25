import {User} from '../../users/models/user.model'

export interface Comment
{
  _id: string
  text: string
  user: User
  parentId?: string
}
