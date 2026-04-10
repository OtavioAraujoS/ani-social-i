/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const responseToParse = responseFormat ? response.clone() : response;
      const data = !responseFormat
        ? r
        : await responseToParse[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Elysia Documentation
 * @version 0.0.0
 *
 * Development documentation
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name GetIndex
   * @request GET:/
   */
  getIndex = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "GET",
      ...params,
    });

  api = {
    /**
     * No description
     *
     * @name PostApiAuthLogin
     * @request POST:/api/auth/login
     */
    postApiAuthLogin: (
      data: {
        userName: string;
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name PostApiUsers
     * @request POST:/api/users/
     */
    postApiUsers: (
      data: {
        name: string;
        userName: string;
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          message: string;
          code: number;
        },
        any
      >({
        path: `/api/users/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchApiUsers
     * @request PATCH:/api/users/
     */
    patchApiUsers: (
      data: {
        userId: string;
        name: string;
        userName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          message: string;
          code: number;
        },
        any
      >({
        path: `/api/users/`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetApiUsersByUserId
     * @request GET:/api/users/{userId}
     */
    getApiUsersByUserId: (userId: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          name: string;
          userName: string;
          rank: "S" | "A" | "B" | "C" | "D";
          avatarUrl: string | null;
          createdAt: date | string | number;
          updatedAt: date | string | number;
        },
        any
      >({
        path: `/api/users/${userId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchApiUsersPassword
     * @request PATCH:/api/users/password
     */
    patchApiUsersPassword: (
      data: {
        userId: string;
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          message: string;
          code: number;
        },
        any
      >({
        path: `/api/users/password`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchApiUsersAvatar
     * @request PATCH:/api/users/avatar
     */
    patchApiUsersAvatar: (
      data: {
        userId: string;
        imageBase64Path: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          message: string;
          code: number;
        },
        any
      >({
        path: `/api/users/avatar`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetApiUsersAdmin
     * @request GET:/api/users/admin/
     */
    getApiUsersAdmin: (
      query?: {
        /** @default 1 */
        page?: string | number;
        /** @default 20 */
        limit?: string | number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          name: string;
          userName: string;
          rank: "S" | "A" | "B" | "C" | "D";
          avatarUrl: string | null;
          createdAt: date | string | number;
          updatedAt: date | string | number;
        }[],
        any
      >({
        path: `/api/users/admin/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteApiUsersAdmin
     * @request DELETE:/api/users/admin/
     */
    deleteApiUsersAdmin: (
      data: {
        userId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          message: string;
          code: number;
        },
        any
      >({
        path: `/api/users/admin/`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetApiAnimes
     * @request GET:/api/animes/
     */
    getApiAnimes: (
      query?: {
        /** @default 1 */
        page?: string | number;
        /** @default 20 */
        limit?: string | number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          title: string;
          description: string;
          episodes: number;
          review: string | null;
          stars: number | null;
          imageUrl: string | null;
          status: "COMPLETED" | "RELEASING" | "PENDING";
          createdAt: date | string | number;
          updatedAt: date | string | number;
        }[],
        any
      >({
        path: `/api/animes/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostApiAnimes
     * @request POST:/api/animes/
     */
    postApiAnimes: (
      data: {
        title: string;
        description: string;
        episodes: number;
        review?: string;
        stars?: number;
        imageUrl?: string;
        status?: "COMPLETED" | "RELEASING" | "PENDING";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          message: string;
          code: number;
        },
        any
      >({
        path: `/api/animes/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchApiAnimes
     * @request PATCH:/api/animes/
     */
    patchApiAnimes: (
      data: {
        animeId: string;
        title: string;
        description?: string;
        episodes?: number;
        review?: string;
        stars?: number;
        imageUrl?: string;
        status?: "COMPLETED" | "RELEASING" | "PENDING";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          message: string;
          code: number;
        },
        any
      >({
        path: `/api/animes/`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetApiAnimesByAnimeId
     * @request GET:/api/animes/{animeId}
     */
    getApiAnimesByAnimeId: (animeId: string, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/animes/${animeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteApiAnimesByAnimeId
     * @request DELETE:/api/animes/{animeId}
     */
    deleteApiAnimesByAnimeId: (animeId: string, params: RequestParams = {}) =>
      this.request<
        {
          success: boolean;
          message: string;
          code: number;
        },
        any
      >({
        path: `/api/animes/${animeId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchApiAnimesImage
     * @request PATCH:/api/animes/image
     */
    patchApiAnimesImage: (
      data: {
        animeId: string;
        imageUrl: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          message: string;
          code: number;
        },
        any
      >({
        path: `/api/animes/image`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetApiTopics
     * @request GET:/api/topics/
     */
    getApiTopics: (
      query?: {
        /** @default 1 */
        page?: string | number;
        /** @default 20 */
        limit?: string | number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          title: string;
          description: string;
          animeInfos: {
            id: string;
            title: string;
            imageUrl: string | null;
          };
          createdByUserId: {
            name: string;
            userName: string;
            rank: "S" | "A" | "B" | "C" | "D";
            avatarUrl: string | null;
          } | null;
          updatedByUserId: {
            name: string;
            userName: string;
            rank: "S" | "A" | "B" | "C" | "D";
            avatarUrl: string | null;
          } | null;
          createdAt: date | string | number;
          updatedAt: date | string | number;
          comments: number;
        }[],
        any
      >({
        path: `/api/topics/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostApiTopics
     * @request POST:/api/topics/
     */
    postApiTopics: (
      data: {
        title: string;
        description: string;
        animeId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          message: string;
          code: number;
        },
        any
      >({
        path: `/api/topics/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetApiTopicsByTopicId
     * @request GET:/api/topics/{topicId}
     */
    getApiTopicsByTopicId: (topicId: string, params: RequestParams = {}) =>
      this.request<
        {
          id: string;
          title: string;
          description: string;
          animeInfos: {
            id: string;
            title: string;
            imageUrl: string | null;
          };
          createdByUserId: {
            name: string;
            userName: string;
            rank: "S" | "A" | "B" | "C" | "D";
            avatarUrl: string | null;
          } | null;
          updatedByUserId: {
            name: string;
            userName: string;
            rank: "S" | "A" | "B" | "C" | "D";
            avatarUrl: string | null;
          } | null;
          createdAt: date | string | number;
          updatedAt: date | string | number;
          comments: number;
        },
        any
      >({
        path: `/api/topics/${topicId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchApiTopicsByTopicId
     * @request PATCH:/api/topics/{topicId}
     */
    patchApiTopicsByTopicId: (
      topicId: string,
      data: {
        topicId: string;
        title: string;
        description: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          message: string;
          code: number;
        },
        any
      >({
        path: `/api/topics/${topicId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteApiTopicsByTopicId
     * @request DELETE:/api/topics/{topicId}
     */
    deleteApiTopicsByTopicId: (topicId: string, params: RequestParams = {}) =>
      this.request<
        {
          success: boolean;
          message: string;
          code: number;
        },
        any
      >({
        path: `/api/topics/${topicId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetApiCommentsByTopicId
     * @request GET:/api/comments/{topicId}
     */
    getApiCommentsByTopicId: (
      topicId: string,
      query?: {
        /** @default 1 */
        page?: string | number;
        /** @default 20 */
        limit?: string | number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: string;
          content: string;
          topicId: string;
          createdByUserId: {
            name: string;
            userName: string;
            rank: "S" | "A" | "B" | "C" | "D";
            avatarUrl: string | null;
          } | null;
          createdAt: date | string | number;
          updatedAt: date | string | number;
        }[],
        any
      >({
        path: `/api/comments/${topicId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostApiComments
     * @request POST:/api/comments/
     */
    postApiComments: (
      data: {
        content: string;
        topicId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          message: string;
          code: number;
        },
        any
      >({
        path: `/api/comments/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchApiComments
     * @request PATCH:/api/comments/
     */
    patchApiComments: (
      data: {
        commentId: string;
        content: string;
        topicId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          message: string;
          code: number;
        },
        any
      >({
        path: `/api/comments/`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteApiComments
     * @request DELETE:/api/comments/
     */
    deleteApiComments: (
      data: {
        commentId: string;
        topicId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          message: string;
          code: number;
        },
        any
      >({
        path: `/api/comments/`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetApiDashboard
     * @request GET:/api/dashboard/
     */
    getApiDashboard: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/dashboard/`,
        method: "GET",
        ...params,
      }),
  };
}
