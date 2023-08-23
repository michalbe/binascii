declare var hexlify: (str: any) => string;
declare var unhexlify: (str: any) => string;
declare const all: {
    hexlify: (str: any) => string;
    unhexlify: (str: any) => string;
    b2a_hex: (str: any) => string;
    a2b_hex: (str: any) => string;
};
export { hexlify, unhexlify, hexlify as b2a_hex, unhexlify as a2b_hex, all as default };
