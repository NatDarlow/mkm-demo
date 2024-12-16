import { DeliveryMethodType } from './DeliveryMethodType';
import { OrderStatusType } from './OrderStatusType';

export type OrderType = {
    branchId: number,
    branchName: string,
    orderNo: number,
    jobReference: string,
    orderType: string,
    orderCategory: DeliveryMethodType,
    deliveryMethod: string,
    orderPlacedAt: string,
    dateRequired: string,
    totalNet: string,
    vat: string,
    totalIncVat: string,
    orderStatus: OrderStatusType,
    orderOriginReturn: string,
};
