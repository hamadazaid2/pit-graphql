import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { Transaction } from 'sequelize';
import { Sequelize } from 'sequelize';
import { SYSTEM } from '../constants';

@Injectable()
export class TransactionInterceptor implements NestInterceptor {
  constructor(
    @Inject(SYSTEM.SEQUELIZE)
    private readonly sequelizeInstance: Sequelize,
  ) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const httpContext = context.switchToHttp();
    const req = httpContext.getRequest();

    const transaction: Transaction = await this.sequelizeInstance.transaction();
    req.transaction = transaction;
    return next.handle().pipe(
      tap(() => {
        transaction.commit();
      }),
      catchError((err) => {
        transaction.rollback();
        return throwError(err);
      }),
    );
  }
}
