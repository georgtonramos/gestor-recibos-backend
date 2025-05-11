import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { BigIntInterceptor } from './bigint.interceptor';
  
  @Injectable()
  export class BigIntConditionalInterceptor implements NestInterceptor {
    private readonly jsonInterceptor = new BigIntInterceptor();
  
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const res = context.switchToHttp().getResponse();
  
      const contentType = res.getHeader('content-type');
  
      // Só aplica o BigIntInterceptor se for JSON
      if (typeof contentType === 'string' && contentType.includes('application/json')) {
        return this.jsonInterceptor.intercept(context, next);
      }
  
      // Se não for JSON, ignora
      return next.handle();
    }
  }
  