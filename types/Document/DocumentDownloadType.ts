import { DocumentContentType } from './DocumentContentType';

export type DocumentDownloadType = {
    account: string,
    documentNumber: number,
    documentDate: string,
    reference: string,
    content: DocumentContentType,
}
