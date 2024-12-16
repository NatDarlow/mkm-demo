import { AddressType } from '../AddressType';
import { DeliveryMethodType } from './DeliveryMethodType';
import { OrderStatusType } from './OrderStatusType';

export type OrderDetailsType = {
    branchId: number,
    orderNo: number,
    orderType: string,
    orderCategory: DeliveryMethodType,
    orderPlacedAt: string,
    dateRequired: string,
    orderStatus: OrderStatusType,
    jobReference: string,
    orderComment: string,
    invoiceName: string,
    invoiceAddress: AddressType,
    deliveryName: string,
    deliveryAddress: AddressType,
    total: string,
    vat: string,
    totalIncVat: string,
};
