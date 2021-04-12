/// <reference types="node" />
import { IBbitQRBill } from '@teggno/bbit.banking-utils';
export declare class BbitQRBillGenerator {
    private _qr;
    private _iban;
    private _reference;
    private _t;
    constructor();
    generate(params: IBbitQRBill): Promise<Buffer | Blob>;
    private _renderLines;
    private _renderReceipt;
    private _renderPayment;
    private _renderPayableTo;
    private _renderReference;
    private _renderPayableBy;
    private _renderAmount;
    private _parseAmount;
}
