import { AddressType } from '../AddressType';

export type OrderBranchType = {
    id: number,
    name: string,
    collectionAddress: AddressType,
    supplyAddress: AddressType,
};
