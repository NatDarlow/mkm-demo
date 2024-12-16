import { OrderStatusType } from './OrderStatusType';

export type ProductType = {
    sku: string,
    name: string,
    quantity: number,
    unit: string,
    price: number,
    subtotal: number,
    subtotalIncVat: number,
    vat: number,
    outputStatus: OrderStatusType,
    originReturn: string,
};
