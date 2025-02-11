declare const hashValue: (value: string) => Promise<string>;
declare const compareHash: (value: string, hash: string) => Promise<boolean>;
export { hashValue, compareHash };
