import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export const UserId = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    if (!request.headers.authorization) {
      return null;
    }

    const token = request.headers.authorization.replace('Bearer ', '');

    const decoded: any = jwt.verify(token, process.env.JWT_KEY);

    return decoded.id;
  },
);
