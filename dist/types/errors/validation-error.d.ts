export declare class QRBillValidationError extends Error {
    private _errors;
    constructor(errors: string[]);
    getValidationErrors(): string[];
}
