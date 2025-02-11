"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHash = exports.hashValue = void 0;
const bcryptjs_1 = require("bcryptjs");
const SALT_ROUNDS = 10;
const hashValue = (value) => (0, bcryptjs_1.hash)(value, SALT_ROUNDS);
exports.hashValue = hashValue;
const compareHash = (value, hash) => (0, bcryptjs_1.compare)(value, hash);
exports.compareHash = compareHash;
//# sourceMappingURL=bCrypt.helper.js.map