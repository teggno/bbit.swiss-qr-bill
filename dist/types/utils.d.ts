/// <reference types="node" />
import { IBbitQRBillTranslations } from '@teggno/bbit.banking-utils';
import * as stream from 'stream';
export declare const isNodeJs: boolean;
export declare const swissCrossImage = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOS44IDE5LjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE5LjggMTkuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEuNDM1NztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+Cjxwb2x5Z29uIHBvaW50cz0iMTguMywwLjcgMS42LDAuNyAwLjcsMC43IDAuNywxLjYgMC43LDE4LjMgMC43LDE5LjEgMS42LDE5LjEgMTguMywxOS4xIDE5LjEsMTkuMSAxOS4xLDE4LjMgMTkuMSwxLjYgMTkuMSwwLjcgIi8+CjxyZWN0IHg9IjguMyIgeT0iNCIgY2xhc3M9InN0MCIgd2lkdGg9IjMuMyIgaGVpZ2h0PSIxMSIvPgo8cmVjdCB4PSI0LjQiIHk9IjcuOSIgY2xhc3M9InN0MCIgd2lkdGg9IjExIiBoZWlnaHQ9IjMuMyIvPgo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjAuNywxLjYgMC43LDE4LjMgMC43LDE5LjEgMS42LDE5LjEgMTguMywxOS4xIDE5LjEsMTkuMSAxOS4xLDE4LjMgMTkuMSwxLjYgMTkuMSwwLjcgMTguMywwLjcgCgkxLjYsMC43IDAuNywwLjcgIi8+Cjwvc3ZnPgo=";
export declare const scissorsHImageBuffer: Buffer;
export declare const scissorsVImageBuffer: Buffer;
export declare class QRData {
    private _data;
    add(data?: string): void;
    toString(): string;
}
export declare class CustomWritableStream extends stream.Writable {
    private _chunks;
    constructor(options?: unknown);
    _write(chunk: any, _enc: unknown, callback: (...params: any[]) => void): void;
    _destroy(_err: unknown, callback: (...params: any[]) => void): void;
    toBuffer(): Buffer;
    toBlob(): Blob;
}
export declare const isJest: boolean;
declare const translations: {
    [key: string]: IBbitQRBillTranslations;
};
export { translations };
