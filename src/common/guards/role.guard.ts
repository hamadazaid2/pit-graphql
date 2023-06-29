import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SYSTEM } from '../constants';

export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const role = this.reflector.get<string[]>(
      SYSTEM.ROLE,
      context.getHandler(),
    );

    if (!role) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Should pass if there is a user && user role included in allowed role set/array
    return user && role.includes(user.role);
  }
}
