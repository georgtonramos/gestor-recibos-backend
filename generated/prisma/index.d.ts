
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model empresas
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type empresas = $Result.DefaultSelection<Prisma.$empresasPayload>
/**
 * Model funcionarios
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type funcionarios = $Result.DefaultSelection<Prisma.$funcionariosPayload>
/**
 * Model recibos
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type recibos = $Result.DefaultSelection<Prisma.$recibosPayload>
/**
 * Model usuarios
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Empresas
 * const empresas = await prisma.empresas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Empresas
   * const empresas = await prisma.empresas.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.empresas`: Exposes CRUD operations for the **empresas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresas.findMany()
    * ```
    */
  get empresas(): Prisma.empresasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionarios`: Exposes CRUD operations for the **funcionarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionarios.findMany()
    * ```
    */
  get funcionarios(): Prisma.funcionariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recibos`: Exposes CRUD operations for the **recibos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recibos
    * const recibos = await prisma.recibos.findMany()
    * ```
    */
  get recibos(): Prisma.recibosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    empresas: 'empresas',
    funcionarios: 'funcionarios',
    recibos: 'recibos',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "empresas" | "funcionarios" | "recibos" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      empresas: {
        payload: Prisma.$empresasPayload<ExtArgs>
        fields: Prisma.empresasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.empresasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.empresasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>
          }
          findFirst: {
            args: Prisma.empresasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.empresasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>
          }
          findMany: {
            args: Prisma.empresasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>[]
          }
          create: {
            args: Prisma.empresasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>
          }
          createMany: {
            args: Prisma.empresasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.empresasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>[]
          }
          delete: {
            args: Prisma.empresasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>
          }
          update: {
            args: Prisma.empresasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>
          }
          deleteMany: {
            args: Prisma.empresasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.empresasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.empresasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>[]
          }
          upsert: {
            args: Prisma.empresasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresasPayload>
          }
          aggregate: {
            args: Prisma.EmpresasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresas>
          }
          groupBy: {
            args: Prisma.empresasGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresasGroupByOutputType>[]
          }
          count: {
            args: Prisma.empresasCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresasCountAggregateOutputType> | number
          }
        }
      }
      funcionarios: {
        payload: Prisma.$funcionariosPayload<ExtArgs>
        fields: Prisma.funcionariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.funcionariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.funcionariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>
          }
          findFirst: {
            args: Prisma.funcionariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.funcionariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>
          }
          findMany: {
            args: Prisma.funcionariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>[]
          }
          create: {
            args: Prisma.funcionariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>
          }
          createMany: {
            args: Prisma.funcionariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.funcionariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>[]
          }
          delete: {
            args: Prisma.funcionariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>
          }
          update: {
            args: Prisma.funcionariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>
          }
          deleteMany: {
            args: Prisma.funcionariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.funcionariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.funcionariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>[]
          }
          upsert: {
            args: Prisma.funcionariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionariosPayload>
          }
          aggregate: {
            args: Prisma.FuncionariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionarios>
          }
          groupBy: {
            args: Prisma.funcionariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.funcionariosCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionariosCountAggregateOutputType> | number
          }
        }
      }
      recibos: {
        payload: Prisma.$recibosPayload<ExtArgs>
        fields: Prisma.recibosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recibosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recibosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>
          }
          findFirst: {
            args: Prisma.recibosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recibosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>
          }
          findMany: {
            args: Prisma.recibosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>[]
          }
          create: {
            args: Prisma.recibosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>
          }
          createMany: {
            args: Prisma.recibosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recibosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>[]
          }
          delete: {
            args: Prisma.recibosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>
          }
          update: {
            args: Prisma.recibosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>
          }
          deleteMany: {
            args: Prisma.recibosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recibosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recibosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>[]
          }
          upsert: {
            args: Prisma.recibosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>
          }
          aggregate: {
            args: Prisma.RecibosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecibos>
          }
          groupBy: {
            args: Prisma.recibosGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecibosGroupByOutputType>[]
          }
          count: {
            args: Prisma.recibosCountArgs<ExtArgs>
            result: $Utils.Optional<RecibosCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    empresas?: empresasOmit
    funcionarios?: funcionariosOmit
    recibos?: recibosOmit
    usuarios?: usuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmpresasCountOutputType
   */

  export type EmpresasCountOutputType = {
    funcionarios: number
  }

  export type EmpresasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionarios?: boolean | EmpresasCountOutputTypeCountFuncionariosArgs
  }

  // Custom InputTypes
  /**
   * EmpresasCountOutputType without action
   */
  export type EmpresasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresasCountOutputType
     */
    select?: EmpresasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpresasCountOutputType without action
   */
  export type EmpresasCountOutputTypeCountFuncionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: funcionariosWhereInput
  }


  /**
   * Count Type FuncionariosCountOutputType
   */

  export type FuncionariosCountOutputType = {
    recibos: number
  }

  export type FuncionariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recibos?: boolean | FuncionariosCountOutputTypeCountRecibosArgs
  }

  // Custom InputTypes
  /**
   * FuncionariosCountOutputType without action
   */
  export type FuncionariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuncionariosCountOutputType
     */
    select?: FuncionariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuncionariosCountOutputType without action
   */
  export type FuncionariosCountOutputTypeCountRecibosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recibosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model empresas
   */

  export type AggregateEmpresas = {
    _count: EmpresasCountAggregateOutputType | null
    _avg: EmpresasAvgAggregateOutputType | null
    _sum: EmpresasSumAggregateOutputType | null
    _min: EmpresasMinAggregateOutputType | null
    _max: EmpresasMaxAggregateOutputType | null
  }

  export type EmpresasAvgAggregateOutputType = {
    id: number | null
  }

  export type EmpresasSumAggregateOutputType = {
    id: bigint | null
  }

  export type EmpresasMinAggregateOutputType = {
    id: bigint | null
    nome: string | null
    cnpj: string | null
    endereco: string | null
    created_at: Date | null
  }

  export type EmpresasMaxAggregateOutputType = {
    id: bigint | null
    nome: string | null
    cnpj: string | null
    endereco: string | null
    created_at: Date | null
  }

  export type EmpresasCountAggregateOutputType = {
    id: number
    nome: number
    cnpj: number
    endereco: number
    created_at: number
    _all: number
  }


  export type EmpresasAvgAggregateInputType = {
    id?: true
  }

  export type EmpresasSumAggregateInputType = {
    id?: true
  }

  export type EmpresasMinAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    endereco?: true
    created_at?: true
  }

  export type EmpresasMaxAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    endereco?: true
    created_at?: true
  }

  export type EmpresasCountAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    endereco?: true
    created_at?: true
    _all?: true
  }

  export type EmpresasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which empresas to aggregate.
     */
    where?: empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empresas to fetch.
     */
    orderBy?: empresasOrderByWithRelationInput | empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned empresas
    **/
    _count?: true | EmpresasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpresasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpresasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresasMaxAggregateInputType
  }

  export type GetEmpresasAggregateType<T extends EmpresasAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresas[P]>
      : GetScalarType<T[P], AggregateEmpresas[P]>
  }




  export type empresasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: empresasWhereInput
    orderBy?: empresasOrderByWithAggregationInput | empresasOrderByWithAggregationInput[]
    by: EmpresasScalarFieldEnum[] | EmpresasScalarFieldEnum
    having?: empresasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresasCountAggregateInputType | true
    _avg?: EmpresasAvgAggregateInputType
    _sum?: EmpresasSumAggregateInputType
    _min?: EmpresasMinAggregateInputType
    _max?: EmpresasMaxAggregateInputType
  }

  export type EmpresasGroupByOutputType = {
    id: bigint
    nome: string | null
    cnpj: string | null
    endereco: string | null
    created_at: Date
    _count: EmpresasCountAggregateOutputType | null
    _avg: EmpresasAvgAggregateOutputType | null
    _sum: EmpresasSumAggregateOutputType | null
    _min: EmpresasMinAggregateOutputType | null
    _max: EmpresasMaxAggregateOutputType | null
  }

  type GetEmpresasGroupByPayload<T extends empresasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresasGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresasGroupByOutputType[P]>
        }
      >
    >


  export type empresasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    created_at?: boolean
    funcionarios?: boolean | empresas$funcionariosArgs<ExtArgs>
    _count?: boolean | EmpresasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresas"]>

  export type empresasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["empresas"]>

  export type empresasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["empresas"]>

  export type empresasSelectScalar = {
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    created_at?: boolean
  }

  export type empresasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cnpj" | "endereco" | "created_at", ExtArgs["result"]["empresas"]>
  export type empresasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionarios?: boolean | empresas$funcionariosArgs<ExtArgs>
    _count?: boolean | EmpresasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type empresasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type empresasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $empresasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "empresas"
    objects: {
      funcionarios: Prisma.$funcionariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nome: string | null
      cnpj: string | null
      endereco: string | null
      created_at: Date
    }, ExtArgs["result"]["empresas"]>
    composites: {}
  }

  type empresasGetPayload<S extends boolean | null | undefined | empresasDefaultArgs> = $Result.GetResult<Prisma.$empresasPayload, S>

  type empresasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<empresasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresasCountAggregateInputType | true
    }

  export interface empresasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['empresas'], meta: { name: 'empresas' } }
    /**
     * Find zero or one Empresas that matches the filter.
     * @param {empresasFindUniqueArgs} args - Arguments to find a Empresas
     * @example
     * // Get one Empresas
     * const empresas = await prisma.empresas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends empresasFindUniqueArgs>(args: SelectSubset<T, empresasFindUniqueArgs<ExtArgs>>): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {empresasFindUniqueOrThrowArgs} args - Arguments to find a Empresas
     * @example
     * // Get one Empresas
     * const empresas = await prisma.empresas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends empresasFindUniqueOrThrowArgs>(args: SelectSubset<T, empresasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresasFindFirstArgs} args - Arguments to find a Empresas
     * @example
     * // Get one Empresas
     * const empresas = await prisma.empresas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends empresasFindFirstArgs>(args?: SelectSubset<T, empresasFindFirstArgs<ExtArgs>>): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresasFindFirstOrThrowArgs} args - Arguments to find a Empresas
     * @example
     * // Get one Empresas
     * const empresas = await prisma.empresas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends empresasFindFirstOrThrowArgs>(args?: SelectSubset<T, empresasFindFirstOrThrowArgs<ExtArgs>>): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresas.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresasWithIdOnly = await prisma.empresas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends empresasFindManyArgs>(args?: SelectSubset<T, empresasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresas.
     * @param {empresasCreateArgs} args - Arguments to create a Empresas.
     * @example
     * // Create one Empresas
     * const Empresas = await prisma.empresas.create({
     *   data: {
     *     // ... data to create a Empresas
     *   }
     * })
     * 
     */
    create<T extends empresasCreateArgs>(args: SelectSubset<T, empresasCreateArgs<ExtArgs>>): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {empresasCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresas = await prisma.empresas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends empresasCreateManyArgs>(args?: SelectSubset<T, empresasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empresas and returns the data saved in the database.
     * @param {empresasCreateManyAndReturnArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresas = await prisma.empresas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empresas and only return the `id`
     * const empresasWithIdOnly = await prisma.empresas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends empresasCreateManyAndReturnArgs>(args?: SelectSubset<T, empresasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empresas.
     * @param {empresasDeleteArgs} args - Arguments to delete one Empresas.
     * @example
     * // Delete one Empresas
     * const Empresas = await prisma.empresas.delete({
     *   where: {
     *     // ... filter to delete one Empresas
     *   }
     * })
     * 
     */
    delete<T extends empresasDeleteArgs>(args: SelectSubset<T, empresasDeleteArgs<ExtArgs>>): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresas.
     * @param {empresasUpdateArgs} args - Arguments to update one Empresas.
     * @example
     * // Update one Empresas
     * const empresas = await prisma.empresas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends empresasUpdateArgs>(args: SelectSubset<T, empresasUpdateArgs<ExtArgs>>): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {empresasDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends empresasDeleteManyArgs>(args?: SelectSubset<T, empresasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresas = await prisma.empresas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends empresasUpdateManyArgs>(args: SelectSubset<T, empresasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas and returns the data updated in the database.
     * @param {empresasUpdateManyAndReturnArgs} args - Arguments to update many Empresas.
     * @example
     * // Update many Empresas
     * const empresas = await prisma.empresas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empresas and only return the `id`
     * const empresasWithIdOnly = await prisma.empresas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends empresasUpdateManyAndReturnArgs>(args: SelectSubset<T, empresasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empresas.
     * @param {empresasUpsertArgs} args - Arguments to update or create a Empresas.
     * @example
     * // Update or create a Empresas
     * const empresas = await prisma.empresas.upsert({
     *   create: {
     *     // ... data to create a Empresas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresas we want to update
     *   }
     * })
     */
    upsert<T extends empresasUpsertArgs>(args: SelectSubset<T, empresasUpsertArgs<ExtArgs>>): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresasCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresas.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends empresasCountArgs>(
      args?: Subset<T, empresasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmpresasAggregateArgs>(args: Subset<T, EmpresasAggregateArgs>): Prisma.PrismaPromise<GetEmpresasAggregateType<T>>

    /**
     * Group by Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends empresasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: empresasGroupByArgs['orderBy'] }
        : { orderBy?: empresasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, empresasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the empresas model
   */
  readonly fields: empresasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for empresas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__empresasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funcionarios<T extends empresas$funcionariosArgs<ExtArgs> = {}>(args?: Subset<T, empresas$funcionariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the empresas model
   */
  interface empresasFieldRefs {
    readonly id: FieldRef<"empresas", 'BigInt'>
    readonly nome: FieldRef<"empresas", 'String'>
    readonly cnpj: FieldRef<"empresas", 'String'>
    readonly endereco: FieldRef<"empresas", 'String'>
    readonly created_at: FieldRef<"empresas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * empresas findUnique
   */
  export type empresasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresas
     */
    omit?: empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * Filter, which empresas to fetch.
     */
    where: empresasWhereUniqueInput
  }

  /**
   * empresas findUniqueOrThrow
   */
  export type empresasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresas
     */
    omit?: empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * Filter, which empresas to fetch.
     */
    where: empresasWhereUniqueInput
  }

  /**
   * empresas findFirst
   */
  export type empresasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresas
     */
    omit?: empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * Filter, which empresas to fetch.
     */
    where?: empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empresas to fetch.
     */
    orderBy?: empresasOrderByWithRelationInput | empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empresas.
     */
    cursor?: empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empresas.
     */
    distinct?: EmpresasScalarFieldEnum | EmpresasScalarFieldEnum[]
  }

  /**
   * empresas findFirstOrThrow
   */
  export type empresasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresas
     */
    omit?: empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * Filter, which empresas to fetch.
     */
    where?: empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empresas to fetch.
     */
    orderBy?: empresasOrderByWithRelationInput | empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empresas.
     */
    cursor?: empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empresas.
     */
    distinct?: EmpresasScalarFieldEnum | EmpresasScalarFieldEnum[]
  }

  /**
   * empresas findMany
   */
  export type empresasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresas
     */
    omit?: empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * Filter, which empresas to fetch.
     */
    where?: empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empresas to fetch.
     */
    orderBy?: empresasOrderByWithRelationInput | empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing empresas.
     */
    cursor?: empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empresas.
     */
    skip?: number
    distinct?: EmpresasScalarFieldEnum | EmpresasScalarFieldEnum[]
  }

  /**
   * empresas create
   */
  export type empresasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresas
     */
    omit?: empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * The data needed to create a empresas.
     */
    data?: XOR<empresasCreateInput, empresasUncheckedCreateInput>
  }

  /**
   * empresas createMany
   */
  export type empresasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many empresas.
     */
    data: empresasCreateManyInput | empresasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * empresas createManyAndReturn
   */
  export type empresasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the empresas
     */
    omit?: empresasOmit<ExtArgs> | null
    /**
     * The data used to create many empresas.
     */
    data: empresasCreateManyInput | empresasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * empresas update
   */
  export type empresasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresas
     */
    omit?: empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * The data needed to update a empresas.
     */
    data: XOR<empresasUpdateInput, empresasUncheckedUpdateInput>
    /**
     * Choose, which empresas to update.
     */
    where: empresasWhereUniqueInput
  }

  /**
   * empresas updateMany
   */
  export type empresasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update empresas.
     */
    data: XOR<empresasUpdateManyMutationInput, empresasUncheckedUpdateManyInput>
    /**
     * Filter which empresas to update
     */
    where?: empresasWhereInput
    /**
     * Limit how many empresas to update.
     */
    limit?: number
  }

  /**
   * empresas updateManyAndReturn
   */
  export type empresasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the empresas
     */
    omit?: empresasOmit<ExtArgs> | null
    /**
     * The data used to update empresas.
     */
    data: XOR<empresasUpdateManyMutationInput, empresasUncheckedUpdateManyInput>
    /**
     * Filter which empresas to update
     */
    where?: empresasWhereInput
    /**
     * Limit how many empresas to update.
     */
    limit?: number
  }

  /**
   * empresas upsert
   */
  export type empresasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresas
     */
    omit?: empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * The filter to search for the empresas to update in case it exists.
     */
    where: empresasWhereUniqueInput
    /**
     * In case the empresas found by the `where` argument doesn't exist, create a new empresas with this data.
     */
    create: XOR<empresasCreateInput, empresasUncheckedCreateInput>
    /**
     * In case the empresas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<empresasUpdateInput, empresasUncheckedUpdateInput>
  }

  /**
   * empresas delete
   */
  export type empresasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresas
     */
    omit?: empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresasInclude<ExtArgs> | null
    /**
     * Filter which empresas to delete.
     */
    where: empresasWhereUniqueInput
  }

  /**
   * empresas deleteMany
   */
  export type empresasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which empresas to delete
     */
    where?: empresasWhereInput
    /**
     * Limit how many empresas to delete.
     */
    limit?: number
  }

  /**
   * empresas.funcionarios
   */
  export type empresas$funcionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    where?: funcionariosWhereInput
    orderBy?: funcionariosOrderByWithRelationInput | funcionariosOrderByWithRelationInput[]
    cursor?: funcionariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * empresas without action
   */
  export type empresasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresas
     */
    omit?: empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresasInclude<ExtArgs> | null
  }


  /**
   * Model funcionarios
   */

  export type AggregateFuncionarios = {
    _count: FuncionariosCountAggregateOutputType | null
    _avg: FuncionariosAvgAggregateOutputType | null
    _sum: FuncionariosSumAggregateOutputType | null
    _min: FuncionariosMinAggregateOutputType | null
    _max: FuncionariosMaxAggregateOutputType | null
  }

  export type FuncionariosAvgAggregateOutputType = {
    id: number | null
    empresa_id: number | null
  }

  export type FuncionariosSumAggregateOutputType = {
    id: bigint | null
    empresa_id: bigint | null
  }

  export type FuncionariosMinAggregateOutputType = {
    id: bigint | null
    empresa_id: bigint | null
    created_at: Date | null
    nome: string | null
    cpf: string | null
    cargo: string | null
  }

  export type FuncionariosMaxAggregateOutputType = {
    id: bigint | null
    empresa_id: bigint | null
    created_at: Date | null
    nome: string | null
    cpf: string | null
    cargo: string | null
  }

  export type FuncionariosCountAggregateOutputType = {
    id: number
    empresa_id: number
    created_at: number
    nome: number
    cpf: number
    cargo: number
    _all: number
  }


  export type FuncionariosAvgAggregateInputType = {
    id?: true
    empresa_id?: true
  }

  export type FuncionariosSumAggregateInputType = {
    id?: true
    empresa_id?: true
  }

  export type FuncionariosMinAggregateInputType = {
    id?: true
    empresa_id?: true
    created_at?: true
    nome?: true
    cpf?: true
    cargo?: true
  }

  export type FuncionariosMaxAggregateInputType = {
    id?: true
    empresa_id?: true
    created_at?: true
    nome?: true
    cpf?: true
    cargo?: true
  }

  export type FuncionariosCountAggregateInputType = {
    id?: true
    empresa_id?: true
    created_at?: true
    nome?: true
    cpf?: true
    cargo?: true
    _all?: true
  }

  export type FuncionariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funcionarios to aggregate.
     */
    where?: funcionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionariosOrderByWithRelationInput | funcionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: funcionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned funcionarios
    **/
    _count?: true | FuncionariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionariosMaxAggregateInputType
  }

  export type GetFuncionariosAggregateType<T extends FuncionariosAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionarios[P]>
      : GetScalarType<T[P], AggregateFuncionarios[P]>
  }




  export type funcionariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: funcionariosWhereInput
    orderBy?: funcionariosOrderByWithAggregationInput | funcionariosOrderByWithAggregationInput[]
    by: FuncionariosScalarFieldEnum[] | FuncionariosScalarFieldEnum
    having?: funcionariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionariosCountAggregateInputType | true
    _avg?: FuncionariosAvgAggregateInputType
    _sum?: FuncionariosSumAggregateInputType
    _min?: FuncionariosMinAggregateInputType
    _max?: FuncionariosMaxAggregateInputType
  }

  export type FuncionariosGroupByOutputType = {
    id: bigint
    empresa_id: bigint | null
    created_at: Date
    nome: string | null
    cpf: string | null
    cargo: string | null
    _count: FuncionariosCountAggregateOutputType | null
    _avg: FuncionariosAvgAggregateOutputType | null
    _sum: FuncionariosSumAggregateOutputType | null
    _min: FuncionariosMinAggregateOutputType | null
    _max: FuncionariosMaxAggregateOutputType | null
  }

  type GetFuncionariosGroupByPayload<T extends funcionariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionariosGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionariosGroupByOutputType[P]>
        }
      >
    >


  export type funcionariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresa_id?: boolean
    created_at?: boolean
    nome?: boolean
    cpf?: boolean
    cargo?: boolean
    empresas?: boolean | funcionarios$empresasArgs<ExtArgs>
    recibos?: boolean | funcionarios$recibosArgs<ExtArgs>
    _count?: boolean | FuncionariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionarios"]>

  export type funcionariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresa_id?: boolean
    created_at?: boolean
    nome?: boolean
    cpf?: boolean
    cargo?: boolean
    empresas?: boolean | funcionarios$empresasArgs<ExtArgs>
  }, ExtArgs["result"]["funcionarios"]>

  export type funcionariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresa_id?: boolean
    created_at?: boolean
    nome?: boolean
    cpf?: boolean
    cargo?: boolean
    empresas?: boolean | funcionarios$empresasArgs<ExtArgs>
  }, ExtArgs["result"]["funcionarios"]>

  export type funcionariosSelectScalar = {
    id?: boolean
    empresa_id?: boolean
    created_at?: boolean
    nome?: boolean
    cpf?: boolean
    cargo?: boolean
  }

  export type funcionariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empresa_id" | "created_at" | "nome" | "cpf" | "cargo", ExtArgs["result"]["funcionarios"]>
  export type funcionariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresas?: boolean | funcionarios$empresasArgs<ExtArgs>
    recibos?: boolean | funcionarios$recibosArgs<ExtArgs>
    _count?: boolean | FuncionariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type funcionariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresas?: boolean | funcionarios$empresasArgs<ExtArgs>
  }
  export type funcionariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresas?: boolean | funcionarios$empresasArgs<ExtArgs>
  }

  export type $funcionariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "funcionarios"
    objects: {
      empresas: Prisma.$empresasPayload<ExtArgs> | null
      recibos: Prisma.$recibosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      empresa_id: bigint | null
      created_at: Date
      nome: string | null
      cpf: string | null
      cargo: string | null
    }, ExtArgs["result"]["funcionarios"]>
    composites: {}
  }

  type funcionariosGetPayload<S extends boolean | null | undefined | funcionariosDefaultArgs> = $Result.GetResult<Prisma.$funcionariosPayload, S>

  type funcionariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<funcionariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionariosCountAggregateInputType | true
    }

  export interface funcionariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['funcionarios'], meta: { name: 'funcionarios' } }
    /**
     * Find zero or one Funcionarios that matches the filter.
     * @param {funcionariosFindUniqueArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends funcionariosFindUniqueArgs>(args: SelectSubset<T, funcionariosFindUniqueArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {funcionariosFindUniqueOrThrowArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends funcionariosFindUniqueOrThrowArgs>(args: SelectSubset<T, funcionariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionariosFindFirstArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends funcionariosFindFirstArgs>(args?: SelectSubset<T, funcionariosFindFirstArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionariosFindFirstOrThrowArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends funcionariosFindFirstOrThrowArgs>(args?: SelectSubset<T, funcionariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionarios.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionariosWithIdOnly = await prisma.funcionarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends funcionariosFindManyArgs>(args?: SelectSubset<T, funcionariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionarios.
     * @param {funcionariosCreateArgs} args - Arguments to create a Funcionarios.
     * @example
     * // Create one Funcionarios
     * const Funcionarios = await prisma.funcionarios.create({
     *   data: {
     *     // ... data to create a Funcionarios
     *   }
     * })
     * 
     */
    create<T extends funcionariosCreateArgs>(args: SelectSubset<T, funcionariosCreateArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {funcionariosCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionarios = await prisma.funcionarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends funcionariosCreateManyArgs>(args?: SelectSubset<T, funcionariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {funcionariosCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionarios = await prisma.funcionarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `id`
     * const funcionariosWithIdOnly = await prisma.funcionarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends funcionariosCreateManyAndReturnArgs>(args?: SelectSubset<T, funcionariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionarios.
     * @param {funcionariosDeleteArgs} args - Arguments to delete one Funcionarios.
     * @example
     * // Delete one Funcionarios
     * const Funcionarios = await prisma.funcionarios.delete({
     *   where: {
     *     // ... filter to delete one Funcionarios
     *   }
     * })
     * 
     */
    delete<T extends funcionariosDeleteArgs>(args: SelectSubset<T, funcionariosDeleteArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionarios.
     * @param {funcionariosUpdateArgs} args - Arguments to update one Funcionarios.
     * @example
     * // Update one Funcionarios
     * const funcionarios = await prisma.funcionarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends funcionariosUpdateArgs>(args: SelectSubset<T, funcionariosUpdateArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {funcionariosDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends funcionariosDeleteManyArgs>(args?: SelectSubset<T, funcionariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionarios = await prisma.funcionarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends funcionariosUpdateManyArgs>(args: SelectSubset<T, funcionariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {funcionariosUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionarios = await prisma.funcionarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `id`
     * const funcionariosWithIdOnly = await prisma.funcionarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends funcionariosUpdateManyAndReturnArgs>(args: SelectSubset<T, funcionariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionarios.
     * @param {funcionariosUpsertArgs} args - Arguments to update or create a Funcionarios.
     * @example
     * // Update or create a Funcionarios
     * const funcionarios = await prisma.funcionarios.upsert({
     *   create: {
     *     // ... data to create a Funcionarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionarios we want to update
     *   }
     * })
     */
    upsert<T extends funcionariosUpsertArgs>(args: SelectSubset<T, funcionariosUpsertArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionariosCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionarios.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends funcionariosCountArgs>(
      args?: Subset<T, funcionariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FuncionariosAggregateArgs>(args: Subset<T, FuncionariosAggregateArgs>): Prisma.PrismaPromise<GetFuncionariosAggregateType<T>>

    /**
     * Group by Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends funcionariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: funcionariosGroupByArgs['orderBy'] }
        : { orderBy?: funcionariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, funcionariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the funcionarios model
   */
  readonly fields: funcionariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for funcionarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__funcionariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresas<T extends funcionarios$empresasArgs<ExtArgs> = {}>(args?: Subset<T, funcionarios$empresasArgs<ExtArgs>>): Prisma__empresasClient<$Result.GetResult<Prisma.$empresasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recibos<T extends funcionarios$recibosArgs<ExtArgs> = {}>(args?: Subset<T, funcionarios$recibosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the funcionarios model
   */
  interface funcionariosFieldRefs {
    readonly id: FieldRef<"funcionarios", 'BigInt'>
    readonly empresa_id: FieldRef<"funcionarios", 'BigInt'>
    readonly created_at: FieldRef<"funcionarios", 'DateTime'>
    readonly nome: FieldRef<"funcionarios", 'String'>
    readonly cpf: FieldRef<"funcionarios", 'String'>
    readonly cargo: FieldRef<"funcionarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * funcionarios findUnique
   */
  export type funcionariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * Filter, which funcionarios to fetch.
     */
    where: funcionariosWhereUniqueInput
  }

  /**
   * funcionarios findUniqueOrThrow
   */
  export type funcionariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * Filter, which funcionarios to fetch.
     */
    where: funcionariosWhereUniqueInput
  }

  /**
   * funcionarios findFirst
   */
  export type funcionariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * Filter, which funcionarios to fetch.
     */
    where?: funcionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionariosOrderByWithRelationInput | funcionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funcionarios.
     */
    cursor?: funcionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funcionarios.
     */
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * funcionarios findFirstOrThrow
   */
  export type funcionariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * Filter, which funcionarios to fetch.
     */
    where?: funcionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionariosOrderByWithRelationInput | funcionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funcionarios.
     */
    cursor?: funcionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funcionarios.
     */
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * funcionarios findMany
   */
  export type funcionariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * Filter, which funcionarios to fetch.
     */
    where?: funcionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionariosOrderByWithRelationInput | funcionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing funcionarios.
     */
    cursor?: funcionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * funcionarios create
   */
  export type funcionariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * The data needed to create a funcionarios.
     */
    data?: XOR<funcionariosCreateInput, funcionariosUncheckedCreateInput>
  }

  /**
   * funcionarios createMany
   */
  export type funcionariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many funcionarios.
     */
    data: funcionariosCreateManyInput | funcionariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * funcionarios createManyAndReturn
   */
  export type funcionariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * The data used to create many funcionarios.
     */
    data: funcionariosCreateManyInput | funcionariosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * funcionarios update
   */
  export type funcionariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * The data needed to update a funcionarios.
     */
    data: XOR<funcionariosUpdateInput, funcionariosUncheckedUpdateInput>
    /**
     * Choose, which funcionarios to update.
     */
    where: funcionariosWhereUniqueInput
  }

  /**
   * funcionarios updateMany
   */
  export type funcionariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update funcionarios.
     */
    data: XOR<funcionariosUpdateManyMutationInput, funcionariosUncheckedUpdateManyInput>
    /**
     * Filter which funcionarios to update
     */
    where?: funcionariosWhereInput
    /**
     * Limit how many funcionarios to update.
     */
    limit?: number
  }

  /**
   * funcionarios updateManyAndReturn
   */
  export type funcionariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * The data used to update funcionarios.
     */
    data: XOR<funcionariosUpdateManyMutationInput, funcionariosUncheckedUpdateManyInput>
    /**
     * Filter which funcionarios to update
     */
    where?: funcionariosWhereInput
    /**
     * Limit how many funcionarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * funcionarios upsert
   */
  export type funcionariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * The filter to search for the funcionarios to update in case it exists.
     */
    where: funcionariosWhereUniqueInput
    /**
     * In case the funcionarios found by the `where` argument doesn't exist, create a new funcionarios with this data.
     */
    create: XOR<funcionariosCreateInput, funcionariosUncheckedCreateInput>
    /**
     * In case the funcionarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<funcionariosUpdateInput, funcionariosUncheckedUpdateInput>
  }

  /**
   * funcionarios delete
   */
  export type funcionariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    /**
     * Filter which funcionarios to delete.
     */
    where: funcionariosWhereUniqueInput
  }

  /**
   * funcionarios deleteMany
   */
  export type funcionariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funcionarios to delete
     */
    where?: funcionariosWhereInput
    /**
     * Limit how many funcionarios to delete.
     */
    limit?: number
  }

  /**
   * funcionarios.empresas
   */
  export type funcionarios$empresasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresas
     */
    select?: empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresas
     */
    omit?: empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresasInclude<ExtArgs> | null
    where?: empresasWhereInput
  }

  /**
   * funcionarios.recibos
   */
  export type funcionarios$recibosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recibos
     */
    omit?: recibosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    where?: recibosWhereInput
    orderBy?: recibosOrderByWithRelationInput | recibosOrderByWithRelationInput[]
    cursor?: recibosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecibosScalarFieldEnum | RecibosScalarFieldEnum[]
  }

  /**
   * funcionarios without action
   */
  export type funcionariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
  }


  /**
   * Model recibos
   */

  export type AggregateRecibos = {
    _count: RecibosCountAggregateOutputType | null
    _avg: RecibosAvgAggregateOutputType | null
    _sum: RecibosSumAggregateOutputType | null
    _min: RecibosMinAggregateOutputType | null
    _max: RecibosMaxAggregateOutputType | null
  }

  export type RecibosAvgAggregateOutputType = {
    id: number | null
    funcionario_id: number | null
    valor: Decimal | null
  }

  export type RecibosSumAggregateOutputType = {
    id: bigint | null
    funcionario_id: bigint | null
    valor: Decimal | null
  }

  export type RecibosMinAggregateOutputType = {
    id: bigint | null
    funcionario_id: bigint | null
    tipo_recibo: string | null
    valor: Decimal | null
    referencia: string | null
    data_pagamento: Date | null
    observacao: string | null
    created_at: Date | null
  }

  export type RecibosMaxAggregateOutputType = {
    id: bigint | null
    funcionario_id: bigint | null
    tipo_recibo: string | null
    valor: Decimal | null
    referencia: string | null
    data_pagamento: Date | null
    observacao: string | null
    created_at: Date | null
  }

  export type RecibosCountAggregateOutputType = {
    id: number
    funcionario_id: number
    tipo_recibo: number
    valor: number
    referencia: number
    data_pagamento: number
    observacao: number
    created_at: number
    _all: number
  }


  export type RecibosAvgAggregateInputType = {
    id?: true
    funcionario_id?: true
    valor?: true
  }

  export type RecibosSumAggregateInputType = {
    id?: true
    funcionario_id?: true
    valor?: true
  }

  export type RecibosMinAggregateInputType = {
    id?: true
    funcionario_id?: true
    tipo_recibo?: true
    valor?: true
    referencia?: true
    data_pagamento?: true
    observacao?: true
    created_at?: true
  }

  export type RecibosMaxAggregateInputType = {
    id?: true
    funcionario_id?: true
    tipo_recibo?: true
    valor?: true
    referencia?: true
    data_pagamento?: true
    observacao?: true
    created_at?: true
  }

  export type RecibosCountAggregateInputType = {
    id?: true
    funcionario_id?: true
    tipo_recibo?: true
    valor?: true
    referencia?: true
    data_pagamento?: true
    observacao?: true
    created_at?: true
    _all?: true
  }

  export type RecibosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recibos to aggregate.
     */
    where?: recibosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recibos to fetch.
     */
    orderBy?: recibosOrderByWithRelationInput | recibosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recibosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recibos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recibos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recibos
    **/
    _count?: true | RecibosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecibosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecibosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecibosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecibosMaxAggregateInputType
  }

  export type GetRecibosAggregateType<T extends RecibosAggregateArgs> = {
        [P in keyof T & keyof AggregateRecibos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecibos[P]>
      : GetScalarType<T[P], AggregateRecibos[P]>
  }




  export type recibosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recibosWhereInput
    orderBy?: recibosOrderByWithAggregationInput | recibosOrderByWithAggregationInput[]
    by: RecibosScalarFieldEnum[] | RecibosScalarFieldEnum
    having?: recibosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecibosCountAggregateInputType | true
    _avg?: RecibosAvgAggregateInputType
    _sum?: RecibosSumAggregateInputType
    _min?: RecibosMinAggregateInputType
    _max?: RecibosMaxAggregateInputType
  }

  export type RecibosGroupByOutputType = {
    id: bigint
    funcionario_id: bigint | null
    tipo_recibo: string | null
    valor: Decimal | null
    referencia: string | null
    data_pagamento: Date | null
    observacao: string | null
    created_at: Date
    _count: RecibosCountAggregateOutputType | null
    _avg: RecibosAvgAggregateOutputType | null
    _sum: RecibosSumAggregateOutputType | null
    _min: RecibosMinAggregateOutputType | null
    _max: RecibosMaxAggregateOutputType | null
  }

  type GetRecibosGroupByPayload<T extends recibosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecibosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecibosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecibosGroupByOutputType[P]>
            : GetScalarType<T[P], RecibosGroupByOutputType[P]>
        }
      >
    >


  export type recibosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    funcionario_id?: boolean
    tipo_recibo?: boolean
    valor?: boolean
    referencia?: boolean
    data_pagamento?: boolean
    observacao?: boolean
    created_at?: boolean
    funcionarios?: boolean | recibos$funcionariosArgs<ExtArgs>
  }, ExtArgs["result"]["recibos"]>

  export type recibosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    funcionario_id?: boolean
    tipo_recibo?: boolean
    valor?: boolean
    referencia?: boolean
    data_pagamento?: boolean
    observacao?: boolean
    created_at?: boolean
    funcionarios?: boolean | recibos$funcionariosArgs<ExtArgs>
  }, ExtArgs["result"]["recibos"]>

  export type recibosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    funcionario_id?: boolean
    tipo_recibo?: boolean
    valor?: boolean
    referencia?: boolean
    data_pagamento?: boolean
    observacao?: boolean
    created_at?: boolean
    funcionarios?: boolean | recibos$funcionariosArgs<ExtArgs>
  }, ExtArgs["result"]["recibos"]>

  export type recibosSelectScalar = {
    id?: boolean
    funcionario_id?: boolean
    tipo_recibo?: boolean
    valor?: boolean
    referencia?: boolean
    data_pagamento?: boolean
    observacao?: boolean
    created_at?: boolean
  }

  export type recibosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "funcionario_id" | "tipo_recibo" | "valor" | "referencia" | "data_pagamento" | "observacao" | "created_at", ExtArgs["result"]["recibos"]>
  export type recibosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionarios?: boolean | recibos$funcionariosArgs<ExtArgs>
  }
  export type recibosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionarios?: boolean | recibos$funcionariosArgs<ExtArgs>
  }
  export type recibosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionarios?: boolean | recibos$funcionariosArgs<ExtArgs>
  }

  export type $recibosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recibos"
    objects: {
      funcionarios: Prisma.$funcionariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      funcionario_id: bigint | null
      tipo_recibo: string | null
      valor: Prisma.Decimal | null
      referencia: string | null
      data_pagamento: Date | null
      observacao: string | null
      created_at: Date
    }, ExtArgs["result"]["recibos"]>
    composites: {}
  }

  type recibosGetPayload<S extends boolean | null | undefined | recibosDefaultArgs> = $Result.GetResult<Prisma.$recibosPayload, S>

  type recibosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recibosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecibosCountAggregateInputType | true
    }

  export interface recibosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recibos'], meta: { name: 'recibos' } }
    /**
     * Find zero or one Recibos that matches the filter.
     * @param {recibosFindUniqueArgs} args - Arguments to find a Recibos
     * @example
     * // Get one Recibos
     * const recibos = await prisma.recibos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recibosFindUniqueArgs>(args: SelectSubset<T, recibosFindUniqueArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recibos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recibosFindUniqueOrThrowArgs} args - Arguments to find a Recibos
     * @example
     * // Get one Recibos
     * const recibos = await prisma.recibos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recibosFindUniqueOrThrowArgs>(args: SelectSubset<T, recibosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recibos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recibosFindFirstArgs} args - Arguments to find a Recibos
     * @example
     * // Get one Recibos
     * const recibos = await prisma.recibos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recibosFindFirstArgs>(args?: SelectSubset<T, recibosFindFirstArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recibos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recibosFindFirstOrThrowArgs} args - Arguments to find a Recibos
     * @example
     * // Get one Recibos
     * const recibos = await prisma.recibos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recibosFindFirstOrThrowArgs>(args?: SelectSubset<T, recibosFindFirstOrThrowArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recibos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recibosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recibos
     * const recibos = await prisma.recibos.findMany()
     * 
     * // Get first 10 Recibos
     * const recibos = await prisma.recibos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recibosWithIdOnly = await prisma.recibos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recibosFindManyArgs>(args?: SelectSubset<T, recibosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recibos.
     * @param {recibosCreateArgs} args - Arguments to create a Recibos.
     * @example
     * // Create one Recibos
     * const Recibos = await prisma.recibos.create({
     *   data: {
     *     // ... data to create a Recibos
     *   }
     * })
     * 
     */
    create<T extends recibosCreateArgs>(args: SelectSubset<T, recibosCreateArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recibos.
     * @param {recibosCreateManyArgs} args - Arguments to create many Recibos.
     * @example
     * // Create many Recibos
     * const recibos = await prisma.recibos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recibosCreateManyArgs>(args?: SelectSubset<T, recibosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recibos and returns the data saved in the database.
     * @param {recibosCreateManyAndReturnArgs} args - Arguments to create many Recibos.
     * @example
     * // Create many Recibos
     * const recibos = await prisma.recibos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recibos and only return the `id`
     * const recibosWithIdOnly = await prisma.recibos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recibosCreateManyAndReturnArgs>(args?: SelectSubset<T, recibosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recibos.
     * @param {recibosDeleteArgs} args - Arguments to delete one Recibos.
     * @example
     * // Delete one Recibos
     * const Recibos = await prisma.recibos.delete({
     *   where: {
     *     // ... filter to delete one Recibos
     *   }
     * })
     * 
     */
    delete<T extends recibosDeleteArgs>(args: SelectSubset<T, recibosDeleteArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recibos.
     * @param {recibosUpdateArgs} args - Arguments to update one Recibos.
     * @example
     * // Update one Recibos
     * const recibos = await prisma.recibos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recibosUpdateArgs>(args: SelectSubset<T, recibosUpdateArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recibos.
     * @param {recibosDeleteManyArgs} args - Arguments to filter Recibos to delete.
     * @example
     * // Delete a few Recibos
     * const { count } = await prisma.recibos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recibosDeleteManyArgs>(args?: SelectSubset<T, recibosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recibos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recibosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recibos
     * const recibos = await prisma.recibos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recibosUpdateManyArgs>(args: SelectSubset<T, recibosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recibos and returns the data updated in the database.
     * @param {recibosUpdateManyAndReturnArgs} args - Arguments to update many Recibos.
     * @example
     * // Update many Recibos
     * const recibos = await prisma.recibos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recibos and only return the `id`
     * const recibosWithIdOnly = await prisma.recibos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends recibosUpdateManyAndReturnArgs>(args: SelectSubset<T, recibosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recibos.
     * @param {recibosUpsertArgs} args - Arguments to update or create a Recibos.
     * @example
     * // Update or create a Recibos
     * const recibos = await prisma.recibos.upsert({
     *   create: {
     *     // ... data to create a Recibos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recibos we want to update
     *   }
     * })
     */
    upsert<T extends recibosUpsertArgs>(args: SelectSubset<T, recibosUpsertArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recibos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recibosCountArgs} args - Arguments to filter Recibos to count.
     * @example
     * // Count the number of Recibos
     * const count = await prisma.recibos.count({
     *   where: {
     *     // ... the filter for the Recibos we want to count
     *   }
     * })
    **/
    count<T extends recibosCountArgs>(
      args?: Subset<T, recibosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecibosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recibos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecibosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecibosAggregateArgs>(args: Subset<T, RecibosAggregateArgs>): Prisma.PrismaPromise<GetRecibosAggregateType<T>>

    /**
     * Group by Recibos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recibosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recibosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recibosGroupByArgs['orderBy'] }
        : { orderBy?: recibosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recibosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecibosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recibos model
   */
  readonly fields: recibosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recibos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recibosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funcionarios<T extends recibos$funcionariosArgs<ExtArgs> = {}>(args?: Subset<T, recibos$funcionariosArgs<ExtArgs>>): Prisma__funcionariosClient<$Result.GetResult<Prisma.$funcionariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recibos model
   */
  interface recibosFieldRefs {
    readonly id: FieldRef<"recibos", 'BigInt'>
    readonly funcionario_id: FieldRef<"recibos", 'BigInt'>
    readonly tipo_recibo: FieldRef<"recibos", 'String'>
    readonly valor: FieldRef<"recibos", 'Decimal'>
    readonly referencia: FieldRef<"recibos", 'String'>
    readonly data_pagamento: FieldRef<"recibos", 'DateTime'>
    readonly observacao: FieldRef<"recibos", 'String'>
    readonly created_at: FieldRef<"recibos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * recibos findUnique
   */
  export type recibosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recibos
     */
    omit?: recibosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * Filter, which recibos to fetch.
     */
    where: recibosWhereUniqueInput
  }

  /**
   * recibos findUniqueOrThrow
   */
  export type recibosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recibos
     */
    omit?: recibosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * Filter, which recibos to fetch.
     */
    where: recibosWhereUniqueInput
  }

  /**
   * recibos findFirst
   */
  export type recibosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recibos
     */
    omit?: recibosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * Filter, which recibos to fetch.
     */
    where?: recibosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recibos to fetch.
     */
    orderBy?: recibosOrderByWithRelationInput | recibosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recibos.
     */
    cursor?: recibosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recibos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recibos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recibos.
     */
    distinct?: RecibosScalarFieldEnum | RecibosScalarFieldEnum[]
  }

  /**
   * recibos findFirstOrThrow
   */
  export type recibosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recibos
     */
    omit?: recibosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * Filter, which recibos to fetch.
     */
    where?: recibosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recibos to fetch.
     */
    orderBy?: recibosOrderByWithRelationInput | recibosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recibos.
     */
    cursor?: recibosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recibos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recibos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recibos.
     */
    distinct?: RecibosScalarFieldEnum | RecibosScalarFieldEnum[]
  }

  /**
   * recibos findMany
   */
  export type recibosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recibos
     */
    omit?: recibosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * Filter, which recibos to fetch.
     */
    where?: recibosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recibos to fetch.
     */
    orderBy?: recibosOrderByWithRelationInput | recibosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recibos.
     */
    cursor?: recibosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recibos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recibos.
     */
    skip?: number
    distinct?: RecibosScalarFieldEnum | RecibosScalarFieldEnum[]
  }

  /**
   * recibos create
   */
  export type recibosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recibos
     */
    omit?: recibosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * The data needed to create a recibos.
     */
    data?: XOR<recibosCreateInput, recibosUncheckedCreateInput>
  }

  /**
   * recibos createMany
   */
  export type recibosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recibos.
     */
    data: recibosCreateManyInput | recibosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recibos createManyAndReturn
   */
  export type recibosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recibos
     */
    omit?: recibosOmit<ExtArgs> | null
    /**
     * The data used to create many recibos.
     */
    data: recibosCreateManyInput | recibosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * recibos update
   */
  export type recibosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recibos
     */
    omit?: recibosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * The data needed to update a recibos.
     */
    data: XOR<recibosUpdateInput, recibosUncheckedUpdateInput>
    /**
     * Choose, which recibos to update.
     */
    where: recibosWhereUniqueInput
  }

  /**
   * recibos updateMany
   */
  export type recibosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recibos.
     */
    data: XOR<recibosUpdateManyMutationInput, recibosUncheckedUpdateManyInput>
    /**
     * Filter which recibos to update
     */
    where?: recibosWhereInput
    /**
     * Limit how many recibos to update.
     */
    limit?: number
  }

  /**
   * recibos updateManyAndReturn
   */
  export type recibosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recibos
     */
    omit?: recibosOmit<ExtArgs> | null
    /**
     * The data used to update recibos.
     */
    data: XOR<recibosUpdateManyMutationInput, recibosUncheckedUpdateManyInput>
    /**
     * Filter which recibos to update
     */
    where?: recibosWhereInput
    /**
     * Limit how many recibos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * recibos upsert
   */
  export type recibosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recibos
     */
    omit?: recibosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * The filter to search for the recibos to update in case it exists.
     */
    where: recibosWhereUniqueInput
    /**
     * In case the recibos found by the `where` argument doesn't exist, create a new recibos with this data.
     */
    create: XOR<recibosCreateInput, recibosUncheckedCreateInput>
    /**
     * In case the recibos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recibosUpdateInput, recibosUncheckedUpdateInput>
  }

  /**
   * recibos delete
   */
  export type recibosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recibos
     */
    omit?: recibosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * Filter which recibos to delete.
     */
    where: recibosWhereUniqueInput
  }

  /**
   * recibos deleteMany
   */
  export type recibosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recibos to delete
     */
    where?: recibosWhereInput
    /**
     * Limit how many recibos to delete.
     */
    limit?: number
  }

  /**
   * recibos.funcionarios
   */
  export type recibos$funcionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionarios
     */
    select?: funcionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionarios
     */
    omit?: funcionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionariosInclude<ExtArgs> | null
    where?: funcionariosWhereInput
  }

  /**
   * recibos without action
   */
  export type recibosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recibos
     */
    omit?: recibosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: bigint | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: bigint | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    created_at: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: bigint | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    created_at: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha_hash: number
    created_at: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    created_at?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    created_at?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    created_at?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: bigint
    nome: string | null
    email: string | null
    senha_hash: string | null
    created_at: Date
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    created_at?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha_hash" | "created_at", ExtArgs["result"]["usuarios"]>

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nome: string | null
      email: string | null
      senha_hash: string | null
      created_at: Date
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'BigInt'>
    readonly nome: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly senha_hash: FieldRef<"usuarios", 'String'>
    readonly created_at: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data?: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmpresasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cnpj: 'cnpj',
    endereco: 'endereco',
    created_at: 'created_at'
  };

  export type EmpresasScalarFieldEnum = (typeof EmpresasScalarFieldEnum)[keyof typeof EmpresasScalarFieldEnum]


  export const FuncionariosScalarFieldEnum: {
    id: 'id',
    empresa_id: 'empresa_id',
    created_at: 'created_at',
    nome: 'nome',
    cpf: 'cpf',
    cargo: 'cargo'
  };

  export type FuncionariosScalarFieldEnum = (typeof FuncionariosScalarFieldEnum)[keyof typeof FuncionariosScalarFieldEnum]


  export const RecibosScalarFieldEnum: {
    id: 'id',
    funcionario_id: 'funcionario_id',
    tipo_recibo: 'tipo_recibo',
    valor: 'valor',
    referencia: 'referencia',
    data_pagamento: 'data_pagamento',
    observacao: 'observacao',
    created_at: 'created_at'
  };

  export type RecibosScalarFieldEnum = (typeof RecibosScalarFieldEnum)[keyof typeof RecibosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash',
    created_at: 'created_at'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type empresasWhereInput = {
    AND?: empresasWhereInput | empresasWhereInput[]
    OR?: empresasWhereInput[]
    NOT?: empresasWhereInput | empresasWhereInput[]
    id?: BigIntFilter<"empresas"> | bigint | number
    nome?: StringNullableFilter<"empresas"> | string | null
    cnpj?: StringNullableFilter<"empresas"> | string | null
    endereco?: StringNullableFilter<"empresas"> | string | null
    created_at?: DateTimeFilter<"empresas"> | Date | string
    funcionarios?: FuncionariosListRelationFilter
  }

  export type empresasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    created_at?: SortOrder
    funcionarios?: funcionariosOrderByRelationAggregateInput
  }

  export type empresasWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: empresasWhereInput | empresasWhereInput[]
    OR?: empresasWhereInput[]
    NOT?: empresasWhereInput | empresasWhereInput[]
    nome?: StringNullableFilter<"empresas"> | string | null
    cnpj?: StringNullableFilter<"empresas"> | string | null
    endereco?: StringNullableFilter<"empresas"> | string | null
    created_at?: DateTimeFilter<"empresas"> | Date | string
    funcionarios?: FuncionariosListRelationFilter
  }, "id">

  export type empresasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: empresasCountOrderByAggregateInput
    _avg?: empresasAvgOrderByAggregateInput
    _max?: empresasMaxOrderByAggregateInput
    _min?: empresasMinOrderByAggregateInput
    _sum?: empresasSumOrderByAggregateInput
  }

  export type empresasScalarWhereWithAggregatesInput = {
    AND?: empresasScalarWhereWithAggregatesInput | empresasScalarWhereWithAggregatesInput[]
    OR?: empresasScalarWhereWithAggregatesInput[]
    NOT?: empresasScalarWhereWithAggregatesInput | empresasScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"empresas"> | bigint | number
    nome?: StringNullableWithAggregatesFilter<"empresas"> | string | null
    cnpj?: StringNullableWithAggregatesFilter<"empresas"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"empresas"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"empresas"> | Date | string
  }

  export type funcionariosWhereInput = {
    AND?: funcionariosWhereInput | funcionariosWhereInput[]
    OR?: funcionariosWhereInput[]
    NOT?: funcionariosWhereInput | funcionariosWhereInput[]
    id?: BigIntFilter<"funcionarios"> | bigint | number
    empresa_id?: BigIntNullableFilter<"funcionarios"> | bigint | number | null
    created_at?: DateTimeFilter<"funcionarios"> | Date | string
    nome?: StringNullableFilter<"funcionarios"> | string | null
    cpf?: StringNullableFilter<"funcionarios"> | string | null
    cargo?: StringNullableFilter<"funcionarios"> | string | null
    empresas?: XOR<EmpresasNullableScalarRelationFilter, empresasWhereInput> | null
    recibos?: RecibosListRelationFilter
  }

  export type funcionariosOrderByWithRelationInput = {
    id?: SortOrder
    empresa_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    nome?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    cargo?: SortOrderInput | SortOrder
    empresas?: empresasOrderByWithRelationInput
    recibos?: recibosOrderByRelationAggregateInput
  }

  export type funcionariosWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: funcionariosWhereInput | funcionariosWhereInput[]
    OR?: funcionariosWhereInput[]
    NOT?: funcionariosWhereInput | funcionariosWhereInput[]
    empresa_id?: BigIntNullableFilter<"funcionarios"> | bigint | number | null
    created_at?: DateTimeFilter<"funcionarios"> | Date | string
    nome?: StringNullableFilter<"funcionarios"> | string | null
    cpf?: StringNullableFilter<"funcionarios"> | string | null
    cargo?: StringNullableFilter<"funcionarios"> | string | null
    empresas?: XOR<EmpresasNullableScalarRelationFilter, empresasWhereInput> | null
    recibos?: RecibosListRelationFilter
  }, "id">

  export type funcionariosOrderByWithAggregationInput = {
    id?: SortOrder
    empresa_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    nome?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    cargo?: SortOrderInput | SortOrder
    _count?: funcionariosCountOrderByAggregateInput
    _avg?: funcionariosAvgOrderByAggregateInput
    _max?: funcionariosMaxOrderByAggregateInput
    _min?: funcionariosMinOrderByAggregateInput
    _sum?: funcionariosSumOrderByAggregateInput
  }

  export type funcionariosScalarWhereWithAggregatesInput = {
    AND?: funcionariosScalarWhereWithAggregatesInput | funcionariosScalarWhereWithAggregatesInput[]
    OR?: funcionariosScalarWhereWithAggregatesInput[]
    NOT?: funcionariosScalarWhereWithAggregatesInput | funcionariosScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"funcionarios"> | bigint | number
    empresa_id?: BigIntNullableWithAggregatesFilter<"funcionarios"> | bigint | number | null
    created_at?: DateTimeWithAggregatesFilter<"funcionarios"> | Date | string
    nome?: StringNullableWithAggregatesFilter<"funcionarios"> | string | null
    cpf?: StringNullableWithAggregatesFilter<"funcionarios"> | string | null
    cargo?: StringNullableWithAggregatesFilter<"funcionarios"> | string | null
  }

  export type recibosWhereInput = {
    AND?: recibosWhereInput | recibosWhereInput[]
    OR?: recibosWhereInput[]
    NOT?: recibosWhereInput | recibosWhereInput[]
    id?: BigIntFilter<"recibos"> | bigint | number
    funcionario_id?: BigIntNullableFilter<"recibos"> | bigint | number | null
    tipo_recibo?: StringNullableFilter<"recibos"> | string | null
    valor?: DecimalNullableFilter<"recibos"> | Decimal | DecimalJsLike | number | string | null
    referencia?: StringNullableFilter<"recibos"> | string | null
    data_pagamento?: DateTimeNullableFilter<"recibos"> | Date | string | null
    observacao?: StringNullableFilter<"recibos"> | string | null
    created_at?: DateTimeFilter<"recibos"> | Date | string
    funcionarios?: XOR<FuncionariosNullableScalarRelationFilter, funcionariosWhereInput> | null
  }

  export type recibosOrderByWithRelationInput = {
    id?: SortOrder
    funcionario_id?: SortOrderInput | SortOrder
    tipo_recibo?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    referencia?: SortOrderInput | SortOrder
    data_pagamento?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    created_at?: SortOrder
    funcionarios?: funcionariosOrderByWithRelationInput
  }

  export type recibosWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: recibosWhereInput | recibosWhereInput[]
    OR?: recibosWhereInput[]
    NOT?: recibosWhereInput | recibosWhereInput[]
    funcionario_id?: BigIntNullableFilter<"recibos"> | bigint | number | null
    tipo_recibo?: StringNullableFilter<"recibos"> | string | null
    valor?: DecimalNullableFilter<"recibos"> | Decimal | DecimalJsLike | number | string | null
    referencia?: StringNullableFilter<"recibos"> | string | null
    data_pagamento?: DateTimeNullableFilter<"recibos"> | Date | string | null
    observacao?: StringNullableFilter<"recibos"> | string | null
    created_at?: DateTimeFilter<"recibos"> | Date | string
    funcionarios?: XOR<FuncionariosNullableScalarRelationFilter, funcionariosWhereInput> | null
  }, "id">

  export type recibosOrderByWithAggregationInput = {
    id?: SortOrder
    funcionario_id?: SortOrderInput | SortOrder
    tipo_recibo?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    referencia?: SortOrderInput | SortOrder
    data_pagamento?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: recibosCountOrderByAggregateInput
    _avg?: recibosAvgOrderByAggregateInput
    _max?: recibosMaxOrderByAggregateInput
    _min?: recibosMinOrderByAggregateInput
    _sum?: recibosSumOrderByAggregateInput
  }

  export type recibosScalarWhereWithAggregatesInput = {
    AND?: recibosScalarWhereWithAggregatesInput | recibosScalarWhereWithAggregatesInput[]
    OR?: recibosScalarWhereWithAggregatesInput[]
    NOT?: recibosScalarWhereWithAggregatesInput | recibosScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"recibos"> | bigint | number
    funcionario_id?: BigIntNullableWithAggregatesFilter<"recibos"> | bigint | number | null
    tipo_recibo?: StringNullableWithAggregatesFilter<"recibos"> | string | null
    valor?: DecimalNullableWithAggregatesFilter<"recibos"> | Decimal | DecimalJsLike | number | string | null
    referencia?: StringNullableWithAggregatesFilter<"recibos"> | string | null
    data_pagamento?: DateTimeNullableWithAggregatesFilter<"recibos"> | Date | string | null
    observacao?: StringNullableWithAggregatesFilter<"recibos"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"recibos"> | Date | string
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: BigIntFilter<"usuarios"> | bigint | number
    nome?: StringNullableFilter<"usuarios"> | string | null
    email?: StringNullableFilter<"usuarios"> | string | null
    senha_hash?: StringNullableFilter<"usuarios"> | string | null
    created_at?: DateTimeFilter<"usuarios"> | Date | string
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    senha_hash?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nome?: StringNullableFilter<"usuarios"> | string | null
    email?: StringNullableFilter<"usuarios"> | string | null
    senha_hash?: StringNullableFilter<"usuarios"> | string | null
    created_at?: DateTimeFilter<"usuarios"> | Date | string
  }, "id">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    senha_hash?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"usuarios"> | bigint | number
    nome?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    email?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    senha_hash?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
  }

  export type empresasCreateInput = {
    id?: bigint | number
    nome?: string | null
    cnpj?: string | null
    endereco?: string | null
    created_at?: Date | string
    funcionarios?: funcionariosCreateNestedManyWithoutEmpresasInput
  }

  export type empresasUncheckedCreateInput = {
    id?: bigint | number
    nome?: string | null
    cnpj?: string | null
    endereco?: string | null
    created_at?: Date | string
    funcionarios?: funcionariosUncheckedCreateNestedManyWithoutEmpresasInput
  }

  export type empresasUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionarios?: funcionariosUpdateManyWithoutEmpresasNestedInput
  }

  export type empresasUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionarios?: funcionariosUncheckedUpdateManyWithoutEmpresasNestedInput
  }

  export type empresasCreateManyInput = {
    id?: bigint | number
    nome?: string | null
    cnpj?: string | null
    endereco?: string | null
    created_at?: Date | string
  }

  export type empresasUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type empresasUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type funcionariosCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    nome?: string | null
    cpf?: string | null
    cargo?: string | null
    empresas?: empresasCreateNestedOneWithoutFuncionariosInput
    recibos?: recibosCreateNestedManyWithoutFuncionariosInput
  }

  export type funcionariosUncheckedCreateInput = {
    id?: bigint | number
    empresa_id?: bigint | number | null
    created_at?: Date | string
    nome?: string | null
    cpf?: string | null
    cargo?: string | null
    recibos?: recibosUncheckedCreateNestedManyWithoutFuncionariosInput
  }

  export type funcionariosUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    empresas?: empresasUpdateOneWithoutFuncionariosNestedInput
    recibos?: recibosUpdateManyWithoutFuncionariosNestedInput
  }

  export type funcionariosUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    empresa_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    recibos?: recibosUncheckedUpdateManyWithoutFuncionariosNestedInput
  }

  export type funcionariosCreateManyInput = {
    id?: bigint | number
    empresa_id?: bigint | number | null
    created_at?: Date | string
    nome?: string | null
    cpf?: string | null
    cargo?: string | null
  }

  export type funcionariosUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type funcionariosUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    empresa_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type recibosCreateInput = {
    id?: bigint | number
    tipo_recibo?: string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    referencia?: string | null
    data_pagamento?: Date | string | null
    observacao?: string | null
    created_at?: Date | string
    funcionarios?: funcionariosCreateNestedOneWithoutRecibosInput
  }

  export type recibosUncheckedCreateInput = {
    id?: bigint | number
    funcionario_id?: bigint | number | null
    tipo_recibo?: string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    referencia?: string | null
    data_pagamento?: Date | string | null
    observacao?: string | null
    created_at?: Date | string
  }

  export type recibosUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tipo_recibo?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionarios?: funcionariosUpdateOneWithoutRecibosNestedInput
  }

  export type recibosUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    funcionario_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tipo_recibo?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recibosCreateManyInput = {
    id?: bigint | number
    funcionario_id?: bigint | number | null
    tipo_recibo?: string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    referencia?: string | null
    data_pagamento?: Date | string | null
    observacao?: string | null
    created_at?: Date | string
  }

  export type recibosUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tipo_recibo?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recibosUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    funcionario_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    tipo_recibo?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosCreateInput = {
    id?: bigint | number
    nome?: string | null
    email?: string | null
    senha_hash?: string | null
    created_at?: Date | string
  }

  export type usuariosUncheckedCreateInput = {
    id?: bigint | number
    nome?: string | null
    email?: string | null
    senha_hash?: string | null
    created_at?: Date | string
  }

  export type usuariosUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosCreateManyInput = {
    id?: bigint | number
    nome?: string | null
    email?: string | null
    senha_hash?: string | null
    created_at?: Date | string
  }

  export type usuariosUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    senha_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FuncionariosListRelationFilter = {
    every?: funcionariosWhereInput
    some?: funcionariosWhereInput
    none?: funcionariosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type funcionariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type empresasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    created_at?: SortOrder
  }

  export type empresasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type empresasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    created_at?: SortOrder
  }

  export type empresasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    created_at?: SortOrder
  }

  export type empresasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type EmpresasNullableScalarRelationFilter = {
    is?: empresasWhereInput | null
    isNot?: empresasWhereInput | null
  }

  export type RecibosListRelationFilter = {
    every?: recibosWhereInput
    some?: recibosWhereInput
    none?: recibosWhereInput
  }

  export type recibosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type funcionariosCountOrderByAggregateInput = {
    id?: SortOrder
    empresa_id?: SortOrder
    created_at?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    cargo?: SortOrder
  }

  export type funcionariosAvgOrderByAggregateInput = {
    id?: SortOrder
    empresa_id?: SortOrder
  }

  export type funcionariosMaxOrderByAggregateInput = {
    id?: SortOrder
    empresa_id?: SortOrder
    created_at?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    cargo?: SortOrder
  }

  export type funcionariosMinOrderByAggregateInput = {
    id?: SortOrder
    empresa_id?: SortOrder
    created_at?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    cargo?: SortOrder
  }

  export type funcionariosSumOrderByAggregateInput = {
    id?: SortOrder
    empresa_id?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FuncionariosNullableScalarRelationFilter = {
    is?: funcionariosWhereInput | null
    isNot?: funcionariosWhereInput | null
  }

  export type recibosCountOrderByAggregateInput = {
    id?: SortOrder
    funcionario_id?: SortOrder
    tipo_recibo?: SortOrder
    valor?: SortOrder
    referencia?: SortOrder
    data_pagamento?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
  }

  export type recibosAvgOrderByAggregateInput = {
    id?: SortOrder
    funcionario_id?: SortOrder
    valor?: SortOrder
  }

  export type recibosMaxOrderByAggregateInput = {
    id?: SortOrder
    funcionario_id?: SortOrder
    tipo_recibo?: SortOrder
    valor?: SortOrder
    referencia?: SortOrder
    data_pagamento?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
  }

  export type recibosMinOrderByAggregateInput = {
    id?: SortOrder
    funcionario_id?: SortOrder
    tipo_recibo?: SortOrder
    valor?: SortOrder
    referencia?: SortOrder
    data_pagamento?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
  }

  export type recibosSumOrderByAggregateInput = {
    id?: SortOrder
    funcionario_id?: SortOrder
    valor?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    created_at?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    created_at?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    created_at?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type funcionariosCreateNestedManyWithoutEmpresasInput = {
    create?: XOR<funcionariosCreateWithoutEmpresasInput, funcionariosUncheckedCreateWithoutEmpresasInput> | funcionariosCreateWithoutEmpresasInput[] | funcionariosUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: funcionariosCreateOrConnectWithoutEmpresasInput | funcionariosCreateOrConnectWithoutEmpresasInput[]
    createMany?: funcionariosCreateManyEmpresasInputEnvelope
    connect?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
  }

  export type funcionariosUncheckedCreateNestedManyWithoutEmpresasInput = {
    create?: XOR<funcionariosCreateWithoutEmpresasInput, funcionariosUncheckedCreateWithoutEmpresasInput> | funcionariosCreateWithoutEmpresasInput[] | funcionariosUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: funcionariosCreateOrConnectWithoutEmpresasInput | funcionariosCreateOrConnectWithoutEmpresasInput[]
    createMany?: funcionariosCreateManyEmpresasInputEnvelope
    connect?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type funcionariosUpdateManyWithoutEmpresasNestedInput = {
    create?: XOR<funcionariosCreateWithoutEmpresasInput, funcionariosUncheckedCreateWithoutEmpresasInput> | funcionariosCreateWithoutEmpresasInput[] | funcionariosUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: funcionariosCreateOrConnectWithoutEmpresasInput | funcionariosCreateOrConnectWithoutEmpresasInput[]
    upsert?: funcionariosUpsertWithWhereUniqueWithoutEmpresasInput | funcionariosUpsertWithWhereUniqueWithoutEmpresasInput[]
    createMany?: funcionariosCreateManyEmpresasInputEnvelope
    set?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    disconnect?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    delete?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    connect?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    update?: funcionariosUpdateWithWhereUniqueWithoutEmpresasInput | funcionariosUpdateWithWhereUniqueWithoutEmpresasInput[]
    updateMany?: funcionariosUpdateManyWithWhereWithoutEmpresasInput | funcionariosUpdateManyWithWhereWithoutEmpresasInput[]
    deleteMany?: funcionariosScalarWhereInput | funcionariosScalarWhereInput[]
  }

  export type funcionariosUncheckedUpdateManyWithoutEmpresasNestedInput = {
    create?: XOR<funcionariosCreateWithoutEmpresasInput, funcionariosUncheckedCreateWithoutEmpresasInput> | funcionariosCreateWithoutEmpresasInput[] | funcionariosUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: funcionariosCreateOrConnectWithoutEmpresasInput | funcionariosCreateOrConnectWithoutEmpresasInput[]
    upsert?: funcionariosUpsertWithWhereUniqueWithoutEmpresasInput | funcionariosUpsertWithWhereUniqueWithoutEmpresasInput[]
    createMany?: funcionariosCreateManyEmpresasInputEnvelope
    set?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    disconnect?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    delete?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    connect?: funcionariosWhereUniqueInput | funcionariosWhereUniqueInput[]
    update?: funcionariosUpdateWithWhereUniqueWithoutEmpresasInput | funcionariosUpdateWithWhereUniqueWithoutEmpresasInput[]
    updateMany?: funcionariosUpdateManyWithWhereWithoutEmpresasInput | funcionariosUpdateManyWithWhereWithoutEmpresasInput[]
    deleteMany?: funcionariosScalarWhereInput | funcionariosScalarWhereInput[]
  }

  export type empresasCreateNestedOneWithoutFuncionariosInput = {
    create?: XOR<empresasCreateWithoutFuncionariosInput, empresasUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: empresasCreateOrConnectWithoutFuncionariosInput
    connect?: empresasWhereUniqueInput
  }

  export type recibosCreateNestedManyWithoutFuncionariosInput = {
    create?: XOR<recibosCreateWithoutFuncionariosInput, recibosUncheckedCreateWithoutFuncionariosInput> | recibosCreateWithoutFuncionariosInput[] | recibosUncheckedCreateWithoutFuncionariosInput[]
    connectOrCreate?: recibosCreateOrConnectWithoutFuncionariosInput | recibosCreateOrConnectWithoutFuncionariosInput[]
    createMany?: recibosCreateManyFuncionariosInputEnvelope
    connect?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
  }

  export type recibosUncheckedCreateNestedManyWithoutFuncionariosInput = {
    create?: XOR<recibosCreateWithoutFuncionariosInput, recibosUncheckedCreateWithoutFuncionariosInput> | recibosCreateWithoutFuncionariosInput[] | recibosUncheckedCreateWithoutFuncionariosInput[]
    connectOrCreate?: recibosCreateOrConnectWithoutFuncionariosInput | recibosCreateOrConnectWithoutFuncionariosInput[]
    createMany?: recibosCreateManyFuncionariosInputEnvelope
    connect?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
  }

  export type empresasUpdateOneWithoutFuncionariosNestedInput = {
    create?: XOR<empresasCreateWithoutFuncionariosInput, empresasUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: empresasCreateOrConnectWithoutFuncionariosInput
    upsert?: empresasUpsertWithoutFuncionariosInput
    disconnect?: empresasWhereInput | boolean
    delete?: empresasWhereInput | boolean
    connect?: empresasWhereUniqueInput
    update?: XOR<XOR<empresasUpdateToOneWithWhereWithoutFuncionariosInput, empresasUpdateWithoutFuncionariosInput>, empresasUncheckedUpdateWithoutFuncionariosInput>
  }

  export type recibosUpdateManyWithoutFuncionariosNestedInput = {
    create?: XOR<recibosCreateWithoutFuncionariosInput, recibosUncheckedCreateWithoutFuncionariosInput> | recibosCreateWithoutFuncionariosInput[] | recibosUncheckedCreateWithoutFuncionariosInput[]
    connectOrCreate?: recibosCreateOrConnectWithoutFuncionariosInput | recibosCreateOrConnectWithoutFuncionariosInput[]
    upsert?: recibosUpsertWithWhereUniqueWithoutFuncionariosInput | recibosUpsertWithWhereUniqueWithoutFuncionariosInput[]
    createMany?: recibosCreateManyFuncionariosInputEnvelope
    set?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    disconnect?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    delete?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    connect?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    update?: recibosUpdateWithWhereUniqueWithoutFuncionariosInput | recibosUpdateWithWhereUniqueWithoutFuncionariosInput[]
    updateMany?: recibosUpdateManyWithWhereWithoutFuncionariosInput | recibosUpdateManyWithWhereWithoutFuncionariosInput[]
    deleteMany?: recibosScalarWhereInput | recibosScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type recibosUncheckedUpdateManyWithoutFuncionariosNestedInput = {
    create?: XOR<recibosCreateWithoutFuncionariosInput, recibosUncheckedCreateWithoutFuncionariosInput> | recibosCreateWithoutFuncionariosInput[] | recibosUncheckedCreateWithoutFuncionariosInput[]
    connectOrCreate?: recibosCreateOrConnectWithoutFuncionariosInput | recibosCreateOrConnectWithoutFuncionariosInput[]
    upsert?: recibosUpsertWithWhereUniqueWithoutFuncionariosInput | recibosUpsertWithWhereUniqueWithoutFuncionariosInput[]
    createMany?: recibosCreateManyFuncionariosInputEnvelope
    set?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    disconnect?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    delete?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    connect?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    update?: recibosUpdateWithWhereUniqueWithoutFuncionariosInput | recibosUpdateWithWhereUniqueWithoutFuncionariosInput[]
    updateMany?: recibosUpdateManyWithWhereWithoutFuncionariosInput | recibosUpdateManyWithWhereWithoutFuncionariosInput[]
    deleteMany?: recibosScalarWhereInput | recibosScalarWhereInput[]
  }

  export type funcionariosCreateNestedOneWithoutRecibosInput = {
    create?: XOR<funcionariosCreateWithoutRecibosInput, funcionariosUncheckedCreateWithoutRecibosInput>
    connectOrCreate?: funcionariosCreateOrConnectWithoutRecibosInput
    connect?: funcionariosWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type funcionariosUpdateOneWithoutRecibosNestedInput = {
    create?: XOR<funcionariosCreateWithoutRecibosInput, funcionariosUncheckedCreateWithoutRecibosInput>
    connectOrCreate?: funcionariosCreateOrConnectWithoutRecibosInput
    upsert?: funcionariosUpsertWithoutRecibosInput
    disconnect?: funcionariosWhereInput | boolean
    delete?: funcionariosWhereInput | boolean
    connect?: funcionariosWhereUniqueInput
    update?: XOR<XOR<funcionariosUpdateToOneWithWhereWithoutRecibosInput, funcionariosUpdateWithoutRecibosInput>, funcionariosUncheckedUpdateWithoutRecibosInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type funcionariosCreateWithoutEmpresasInput = {
    id?: bigint | number
    created_at?: Date | string
    nome?: string | null
    cpf?: string | null
    cargo?: string | null
    recibos?: recibosCreateNestedManyWithoutFuncionariosInput
  }

  export type funcionariosUncheckedCreateWithoutEmpresasInput = {
    id?: bigint | number
    created_at?: Date | string
    nome?: string | null
    cpf?: string | null
    cargo?: string | null
    recibos?: recibosUncheckedCreateNestedManyWithoutFuncionariosInput
  }

  export type funcionariosCreateOrConnectWithoutEmpresasInput = {
    where: funcionariosWhereUniqueInput
    create: XOR<funcionariosCreateWithoutEmpresasInput, funcionariosUncheckedCreateWithoutEmpresasInput>
  }

  export type funcionariosCreateManyEmpresasInputEnvelope = {
    data: funcionariosCreateManyEmpresasInput | funcionariosCreateManyEmpresasInput[]
    skipDuplicates?: boolean
  }

  export type funcionariosUpsertWithWhereUniqueWithoutEmpresasInput = {
    where: funcionariosWhereUniqueInput
    update: XOR<funcionariosUpdateWithoutEmpresasInput, funcionariosUncheckedUpdateWithoutEmpresasInput>
    create: XOR<funcionariosCreateWithoutEmpresasInput, funcionariosUncheckedCreateWithoutEmpresasInput>
  }

  export type funcionariosUpdateWithWhereUniqueWithoutEmpresasInput = {
    where: funcionariosWhereUniqueInput
    data: XOR<funcionariosUpdateWithoutEmpresasInput, funcionariosUncheckedUpdateWithoutEmpresasInput>
  }

  export type funcionariosUpdateManyWithWhereWithoutEmpresasInput = {
    where: funcionariosScalarWhereInput
    data: XOR<funcionariosUpdateManyMutationInput, funcionariosUncheckedUpdateManyWithoutEmpresasInput>
  }

  export type funcionariosScalarWhereInput = {
    AND?: funcionariosScalarWhereInput | funcionariosScalarWhereInput[]
    OR?: funcionariosScalarWhereInput[]
    NOT?: funcionariosScalarWhereInput | funcionariosScalarWhereInput[]
    id?: BigIntFilter<"funcionarios"> | bigint | number
    empresa_id?: BigIntNullableFilter<"funcionarios"> | bigint | number | null
    created_at?: DateTimeFilter<"funcionarios"> | Date | string
    nome?: StringNullableFilter<"funcionarios"> | string | null
    cpf?: StringNullableFilter<"funcionarios"> | string | null
    cargo?: StringNullableFilter<"funcionarios"> | string | null
  }

  export type empresasCreateWithoutFuncionariosInput = {
    id?: bigint | number
    nome?: string | null
    cnpj?: string | null
    endereco?: string | null
    created_at?: Date | string
  }

  export type empresasUncheckedCreateWithoutFuncionariosInput = {
    id?: bigint | number
    nome?: string | null
    cnpj?: string | null
    endereco?: string | null
    created_at?: Date | string
  }

  export type empresasCreateOrConnectWithoutFuncionariosInput = {
    where: empresasWhereUniqueInput
    create: XOR<empresasCreateWithoutFuncionariosInput, empresasUncheckedCreateWithoutFuncionariosInput>
  }

  export type recibosCreateWithoutFuncionariosInput = {
    id?: bigint | number
    tipo_recibo?: string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    referencia?: string | null
    data_pagamento?: Date | string | null
    observacao?: string | null
    created_at?: Date | string
  }

  export type recibosUncheckedCreateWithoutFuncionariosInput = {
    id?: bigint | number
    tipo_recibo?: string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    referencia?: string | null
    data_pagamento?: Date | string | null
    observacao?: string | null
    created_at?: Date | string
  }

  export type recibosCreateOrConnectWithoutFuncionariosInput = {
    where: recibosWhereUniqueInput
    create: XOR<recibosCreateWithoutFuncionariosInput, recibosUncheckedCreateWithoutFuncionariosInput>
  }

  export type recibosCreateManyFuncionariosInputEnvelope = {
    data: recibosCreateManyFuncionariosInput | recibosCreateManyFuncionariosInput[]
    skipDuplicates?: boolean
  }

  export type empresasUpsertWithoutFuncionariosInput = {
    update: XOR<empresasUpdateWithoutFuncionariosInput, empresasUncheckedUpdateWithoutFuncionariosInput>
    create: XOR<empresasCreateWithoutFuncionariosInput, empresasUncheckedCreateWithoutFuncionariosInput>
    where?: empresasWhereInput
  }

  export type empresasUpdateToOneWithWhereWithoutFuncionariosInput = {
    where?: empresasWhereInput
    data: XOR<empresasUpdateWithoutFuncionariosInput, empresasUncheckedUpdateWithoutFuncionariosInput>
  }

  export type empresasUpdateWithoutFuncionariosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type empresasUncheckedUpdateWithoutFuncionariosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recibosUpsertWithWhereUniqueWithoutFuncionariosInput = {
    where: recibosWhereUniqueInput
    update: XOR<recibosUpdateWithoutFuncionariosInput, recibosUncheckedUpdateWithoutFuncionariosInput>
    create: XOR<recibosCreateWithoutFuncionariosInput, recibosUncheckedCreateWithoutFuncionariosInput>
  }

  export type recibosUpdateWithWhereUniqueWithoutFuncionariosInput = {
    where: recibosWhereUniqueInput
    data: XOR<recibosUpdateWithoutFuncionariosInput, recibosUncheckedUpdateWithoutFuncionariosInput>
  }

  export type recibosUpdateManyWithWhereWithoutFuncionariosInput = {
    where: recibosScalarWhereInput
    data: XOR<recibosUpdateManyMutationInput, recibosUncheckedUpdateManyWithoutFuncionariosInput>
  }

  export type recibosScalarWhereInput = {
    AND?: recibosScalarWhereInput | recibosScalarWhereInput[]
    OR?: recibosScalarWhereInput[]
    NOT?: recibosScalarWhereInput | recibosScalarWhereInput[]
    id?: BigIntFilter<"recibos"> | bigint | number
    funcionario_id?: BigIntNullableFilter<"recibos"> | bigint | number | null
    tipo_recibo?: StringNullableFilter<"recibos"> | string | null
    valor?: DecimalNullableFilter<"recibos"> | Decimal | DecimalJsLike | number | string | null
    referencia?: StringNullableFilter<"recibos"> | string | null
    data_pagamento?: DateTimeNullableFilter<"recibos"> | Date | string | null
    observacao?: StringNullableFilter<"recibos"> | string | null
    created_at?: DateTimeFilter<"recibos"> | Date | string
  }

  export type funcionariosCreateWithoutRecibosInput = {
    id?: bigint | number
    created_at?: Date | string
    nome?: string | null
    cpf?: string | null
    cargo?: string | null
    empresas?: empresasCreateNestedOneWithoutFuncionariosInput
  }

  export type funcionariosUncheckedCreateWithoutRecibosInput = {
    id?: bigint | number
    empresa_id?: bigint | number | null
    created_at?: Date | string
    nome?: string | null
    cpf?: string | null
    cargo?: string | null
  }

  export type funcionariosCreateOrConnectWithoutRecibosInput = {
    where: funcionariosWhereUniqueInput
    create: XOR<funcionariosCreateWithoutRecibosInput, funcionariosUncheckedCreateWithoutRecibosInput>
  }

  export type funcionariosUpsertWithoutRecibosInput = {
    update: XOR<funcionariosUpdateWithoutRecibosInput, funcionariosUncheckedUpdateWithoutRecibosInput>
    create: XOR<funcionariosCreateWithoutRecibosInput, funcionariosUncheckedCreateWithoutRecibosInput>
    where?: funcionariosWhereInput
  }

  export type funcionariosUpdateToOneWithWhereWithoutRecibosInput = {
    where?: funcionariosWhereInput
    data: XOR<funcionariosUpdateWithoutRecibosInput, funcionariosUncheckedUpdateWithoutRecibosInput>
  }

  export type funcionariosUpdateWithoutRecibosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    empresas?: empresasUpdateOneWithoutFuncionariosNestedInput
  }

  export type funcionariosUncheckedUpdateWithoutRecibosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    empresa_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type funcionariosCreateManyEmpresasInput = {
    id?: bigint | number
    created_at?: Date | string
    nome?: string | null
    cpf?: string | null
    cargo?: string | null
  }

  export type funcionariosUpdateWithoutEmpresasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    recibos?: recibosUpdateManyWithoutFuncionariosNestedInput
  }

  export type funcionariosUncheckedUpdateWithoutEmpresasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    recibos?: recibosUncheckedUpdateManyWithoutFuncionariosNestedInput
  }

  export type funcionariosUncheckedUpdateManyWithoutEmpresasInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type recibosCreateManyFuncionariosInput = {
    id?: bigint | number
    tipo_recibo?: string | null
    valor?: Decimal | DecimalJsLike | number | string | null
    referencia?: string | null
    data_pagamento?: Date | string | null
    observacao?: string | null
    created_at?: Date | string
  }

  export type recibosUpdateWithoutFuncionariosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tipo_recibo?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recibosUncheckedUpdateWithoutFuncionariosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tipo_recibo?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recibosUncheckedUpdateManyWithoutFuncionariosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tipo_recibo?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}