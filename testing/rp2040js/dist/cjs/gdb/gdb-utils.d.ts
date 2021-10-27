export declare function encodeHexByte(value: number): string;
export declare function encodeHexBuf(buf: Uint8Array): string;
export declare function encodeHexUint32BE(value: number): string;
export declare function encodeHexUint32(value: number): string;
export declare function decodeHexBuf(encoded: string): Uint8Array;
export declare function decodeHexUint32Array(encoded: string): Uint32Array;
export declare function decodeHexUint32(encoded: string): number;
export declare function gdbChecksum(text: string): string;
export declare function gdbMessage(value: string): string;
