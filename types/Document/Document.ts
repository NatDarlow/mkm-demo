import { DocumentType } from './DocumentType';
import { DocumentStatusType } from './DocumentStatusType';

export type Document = {
    year: number,
    period: number,
    glitem: number,
    documentType: DocumentType,
    customerReference: string,
    documentNumber: number,
    documentDate: string,
    documentDue: string,
    reference: string,
    value: number,
    outstanding: number,
    branchNumber: number,
    branchShortCode: string,
    branchName: string,
    status: DocumentStatusType,
    inQuery: boolean,
    query: Array<string>|null,
    miscellaneousReference: string,
    runningBalance: number,
    orders: Array<string>|null,
    settlementDiscounts: Array<number>,
};
