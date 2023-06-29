import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

export class PaginationInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        // limit,totalCount, offset, posts
        const { totalCount, offset, posts, limit } = data;
        const hasMore = posts.length > limit;

        const response = {
          pageInfo: {
            hasNext: hasMore,
            hasPrevious: offset > 0,
            totalCount,
            offset,
            endOffset: Math.min(offset + limit - 1, totalCount),
          },
          itemCount: posts.slice(0, limit).length,
          data: posts.slice(0, limit),
        };
        return response;
      }),
    );
  }
}
