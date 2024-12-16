import { AddressType } from '../AddressType';

export type UserAccountType = {
    id: string,
    branchId: string,
    type: string,
    terms: string,
    businessType: string,
    name: string,
    address: AddressType,
};
