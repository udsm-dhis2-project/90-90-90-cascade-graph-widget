import { BaseState, initialBaseState } from './base.state';
import { User } from 'src/app/core/models/user.model';

export interface UserState extends BaseState {
  currentUser: User;
}

export const initialUserState: UserState = {
  ...initialBaseState,
  currentUser: null
};
