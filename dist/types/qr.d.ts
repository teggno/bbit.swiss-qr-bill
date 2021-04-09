/// <reference types="node" />
import { IBbitQRBill } from '@bbitgmbh/bbit.banking-utils';
export declare class BbitQRCodeGenerator {
    private _iban;
    private _reference;
    generate(params: IBbitQRBill): Promise<ArrayBuffer | Buffer>;
    generateQRCodeContent(params: IBbitQRBill): string;
    private _verifyParams;
    private _verifyAddress;
    private _setDefaultVersionIfMissing;
    private _parseAmount;
    private _createCanvas;
    private _createImage;
}
