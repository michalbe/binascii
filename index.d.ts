type Binascii = typeof binascii;

declare namespace binascii{
    export type hexlify = (data: string) => string;
    export type unhexlify = (data: string) => string;
    export type b2a_hex = (data: string) => string;
    export type a2b_hex = (data: string) => string;

    // named export
    // import { plugin } from 'plugin'
    // const { plugin } = require('plugin')
    export const binascii: Binascii
    // default export
    // import plugin from 'plugin'
    export {binascii as default}
}

export = binascii;