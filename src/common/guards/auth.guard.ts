// import { CanActivate, ExecutionContext } from '@nestjs/common';
// import { Request } from 'express';
// import { Reflector } from '@nestjs/core';
// import { UsersService } from '../../modules/users/users.service';
// import { SYSTEM } from '../constants';
// import { JwtService } from '@nestjs/jwt';

// export class AuthGuard implements CanActivate {
//   constructor(
//     private usersService: UsersService,
//     private jwtService: JwtService,
//     private readonly reflector: Reflector,
//   ) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const isPublic = this.reflector.get<String[]>(
//       SYSTEM.PUBLIC,
//       context.getHandler(),
//     );

//     if (isPublic) return true;

//     const request = context.switchToHttp().getRequest();
//     const token = this.extractTokenFromHeader(request);
//     if (!token) return false;

//     const decoded = await this.verifyToken(token);
//     if (!decoded) return false;

//     const user = await this.usersService.getUserByUsernameOrEmail({
//       username: decoded.username,
//       email: decoded.email,
//     });
//     if (!user) return false;

//     const { password, ...resData } = user.get({ plain: true });

//     request.user = resData;
//     return true;
//   }

//   private extractTokenFromHeader(request: Request): string | undefined {
//     const [type, token] = request.headers.authorization?.split(' ') ?? [];
//     return type === 'Bearer' ? token : undefined;
//   }

//   async verifyToken(token) {
//     return await this.jwtService.verifyAsync(token);
//   }
// }
