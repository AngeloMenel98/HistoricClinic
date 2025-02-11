"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserId = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
exports.UserId = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    if (!request.headers.authorization) {
        return null;
    }
    const token = request.headers.authorization.replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    return decoded.id;
});
//# sourceMappingURL=user-id.decorator.js.map