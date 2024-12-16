import { UserAccountType } from './UserAccountType';
import { UserProfileType } from './UserProfileType';

export type UserType = {
    id: number,
    email: string,
    webAdmin: boolean,
    account: UserAccountType,
    profile: UserProfileType,
};
