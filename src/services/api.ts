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

export interface PaginationQuery {
  /** @default 1 */
  page?: string | number;
  /** @default 20 */
  limit?: string | number;
}

export interface SuccessResponse {
  success: boolean;
  message: string;
  code: number;
}

export interface Login {
  userName: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
}

export interface CreateUser {
  name: string;
  userName: string;
  password: string;
}

export interface UpdateUser {
  userId: string;
  name: string;
  userName: string;
}

export interface UpdateUserPassword {
  userId: string;
  password: string;
}

export interface UpdateUserAvatar {
  userId: string;
  imageBase64Path: string;
}

export interface DeleteUser {
  userId: string;
}

export interface UserResponse {
  id: string;
  name: string;
  userName: string;
  rank: "S" | "A" | "B" | "C" | "D";
  avatarUrl: string | null;
  createdAt: date | string | number;
  updatedAt: date | string | number;
}

export type UserListResponse = {
  id: string;
  name: string;
  userName: string;
  rank: "S" | "A" | "B" | "C" | "D";
  avatarUrl: string | null;
  createdAt: date | string | number;
  updatedAt: date | string | number;
}[];

export interface DashboardResponse {
  recentAnimes: ({
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
  } & {
    createdByUser: {
      name: string;
      userName: string;
      rank: "S" | "A" | "B" | "C" | "D";
      avatarUrl: string | null;
    } | null;
    updatedByUser: {
      name: string;
      userName: string;
      rank: "S" | "A" | "B" | "C" | "D";
      avatarUrl: string | null;
    } | null;
  })[];
  recentTopics: {
    id: string;
    title: string;
    description: string;
    animeId: string;
    comments: number;
    createdByUser: {
      name: string;
      userName: string;
      rank: "S" | "A" | "B" | "C" | "D";
      avatarUrl: string | null;
    } | null;
    updatedByUser: {
      name: string;
      userName: string;
      rank: "S" | "A" | "B" | "C" | "D";
      avatarUrl: string | null;
    } | null;
    createdAt: date | string | number;
    updatedAt: date | string | number;
  }[];
  releasingAnimes: ({
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
  } & {
    createdByUser: {
      name: string;
      userName: string;
      rank: "S" | "A" | "B" | "C" | "D";
      avatarUrl: string | null;
    } | null;
    updatedByUser: {
      name: string;
      userName: string;
      rank: "S" | "A" | "B" | "C" | "D";
      avatarUrl: string | null;
    } | null;
  })[];
}

export interface AnimeListResponse {
  data: {
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
  }[];
  total: number;
}

export type AnimeDetailResponse = {
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
} & {
  createdByUser: {
    name: string;
    userName: string;
    rank: "S" | "A" | "B" | "C" | "D";
    avatarUrl: string | null;
  } | null;
  updatedByUser: {
    name: string;
    userName: string;
    rank: "S" | "A" | "B" | "C" | "D";
    avatarUrl: string | null;
  } | null;
};

export interface CreateAnime {
  title: string;
  description: string;
  episodes: number;
  review?: string;
  stars?: number;
  imageUrl?: string;
  status?: "COMPLETED" | "RELEASING" | "PENDING";
}

export interface UpdateAnime {
  animeId: string;
  title: string;
  description?: string;
  episodes?: number;
  review?: string;
  stars?: number;
  imageUrl?: string;
  status?: "COMPLETED" | "RELEASING" | "PENDING";
}

export interface UpdateAnimeImage {
  animeId: string;
  imageUrl: string;
}

export interface CreateTopic {
  title: string;
  description: string;
  animeId: string;
}

export interface ListTopics {
  data: {
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
  }[];
  total: number;
}

export interface TopicResponse {
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
}

export interface UpdateTopic {
  topicId: string;
  title: string;
  description: string;
}

export type CommentList = {
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
}[];

export interface CreateComment {
  content: string;
  topicId: string;
}

export interface UpdateComment {
  commentId: string;
  content: string;
  topicId: string;
}

export interface DeleteComment {
  commentId: string;
  topicId: string;
}

export interface UserProfileResponse {
  anime: {
    id: string;
    title: string;
    episodes: number;
    status: string;
    createdAt: date | string | number;
    updatedAt: date | string | number;
    cover: string | null;
  }[];
  topics: {
    id: string;
    title: string;
    content: string;
    createdAt: date | string | number;
    updatedAt: date | string | number;
    comments: number;
  }[];
  comments: {
    id: string;
    content: string;
    createdAt: date | string | number;
    updatedAt: date | string | number;
  }[];
  userInfos: {
    id: string;
    username: string;
    name: string;
    avatarUrl: string | null;
  };
}

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

export interface HttpResponse<
  D extends unknown,
  E extends unknown = unknown,
> extends Response {
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

  auth = {
    /**
     * No description
     *
     * @name PostAuthLogin
     * @request POST:/auth/login
     */
    postAuthLogin: (data: Login, params: RequestParams = {}) =>
      this.request<
        LoginResponse,
        {
          message: string;
        }
      >({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @name PostUsers
     * @request POST:/users/
     */
    postUsers: (data: CreateUser, params: RequestParams = {}) =>
      this.request<SuccessResponse, any>({
        path: `/users/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchUsers
     * @request PATCH:/users/
     */
    patchUsers: (data: UpdateUser, params: RequestParams = {}) =>
      this.request<SuccessResponse, any>({
        path: `/users/`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetUsersByUserId
     * @request GET:/users/{userId}
     */
    getUsersByUserId: (userId: string, params: RequestParams = {}) =>
      this.request<UserResponse, any>({
        path: `/users/${userId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchUsersPassword
     * @request PATCH:/users/password
     */
    patchUsersPassword: (
      data: UpdateUserPassword,
      params: RequestParams = {},
    ) =>
      this.request<SuccessResponse, any>({
        path: `/users/password`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchUsersAvatar
     * @request PATCH:/users/avatar
     */
    patchUsersAvatar: (data: UpdateUserAvatar, params: RequestParams = {}) =>
      this.request<SuccessResponse, any>({
        path: `/users/avatar`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetUsersAdmin
     * @request GET:/users/admin/
     */
    getUsersAdmin: (
      query?: {
        /** @default 1 */
        page?: string | number;
        /** @default 20 */
        limit?: string | number;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserListResponse, any>({
        path: `/users/admin/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteUsersAdmin
     * @request DELETE:/users/admin/
     */
    deleteUsersAdmin: (data: DeleteUser, params: RequestParams = {}) =>
      this.request<SuccessResponse, any>({
        path: `/users/admin/`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  dashboard = {
    /**
     * No description
     *
     * @name GetDashboard
     * @request GET:/dashboard/
     */
    getDashboard: (params: RequestParams = {}) =>
      this.request<DashboardResponse, any>({
        path: `/dashboard/`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  animes = {
    /**
     * No description
     *
     * @name GetAnimesAnimes
     * @request GET:/animes/animes/
     */
    getAnimesAnimes: (
      query?: {
        page?: number;
        limit?: number;
        /** @format uuid */
        userId?: string;
        title?: string;
        status?: "COMPLETED" | "RELEASING" | "PENDING";
      },
      params: RequestParams = {},
    ) =>
      this.request<AnimeListResponse, any>({
        path: `/animes/animes/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostAnimesAnimes
     * @request POST:/animes/animes/
     */
    postAnimesAnimes: (data: CreateAnime, params: RequestParams = {}) =>
      this.request<SuccessResponse, any>({
        path: `/animes/animes/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchAnimesAnimes
     * @request PATCH:/animes/animes/
     */
    patchAnimesAnimes: (data: UpdateAnime, params: RequestParams = {}) =>
      this.request<SuccessResponse, any>({
        path: `/animes/animes/`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetAnimesAnimesByAnimeId
     * @request GET:/animes/animes/{animeId}
     */
    getAnimesAnimesByAnimeId: (animeId: string, params: RequestParams = {}) =>
      this.request<AnimeDetailResponse, any>({
        path: `/animes/animes/${animeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteAnimesAnimesByAnimeId
     * @request DELETE:/animes/animes/{animeId}
     */
    deleteAnimesAnimesByAnimeId: (
      animeId: string,
      params: RequestParams = {},
    ) =>
      this.request<SuccessResponse, any>({
        path: `/animes/animes/${animeId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchAnimesAnimesImage
     * @request PATCH:/animes/animes/image
     */
    patchAnimesAnimesImage: (
      data: UpdateAnimeImage,
      params: RequestParams = {},
    ) =>
      this.request<SuccessResponse, any>({
        path: `/animes/animes/image`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  topics = {
    /**
     * No description
     *
     * @name GetTopicsTopics
     * @request GET:/topics/topics/
     */
    getTopicsTopics: (
      query?: {
        /** @default 1 */
        page?: string | number;
        /** @default 20 */
        limit?: string | number;
        title?: string;
        status?: "LATEST" | "POPULAR" | "NO_COMMENTS";
        /** @format uuid */
        animeId?: string;
        /** @format uuid */
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ListTopics, any>({
        path: `/topics/topics/`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostTopicsTopics
     * @request POST:/topics/topics/
     */
    postTopicsTopics: (data: CreateTopic, params: RequestParams = {}) =>
      this.request<SuccessResponse, any>({
        path: `/topics/topics/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetTopicsTopicsByTopicId
     * @request GET:/topics/topics/{topicId}
     */
    getTopicsTopicsByTopicId: (topicId: string, params: RequestParams = {}) =>
      this.request<TopicResponse, any>({
        path: `/topics/topics/${topicId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchTopicsTopicsByTopicId
     * @request PATCH:/topics/topics/{topicId}
     */
    patchTopicsTopicsByTopicId: (
      topicId: string,
      data: UpdateTopic,
      params: RequestParams = {},
    ) =>
      this.request<SuccessResponse, any>({
        path: `/topics/topics/${topicId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteTopicsTopicsByTopicId
     * @request DELETE:/topics/topics/{topicId}
     */
    deleteTopicsTopicsByTopicId: (
      topicId: string,
      params: RequestParams = {},
    ) =>
      this.request<SuccessResponse, any>({
        path: `/topics/topics/${topicId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  comments = {
    /**
     * No description
     *
     * @name GetCommentsCommentsByTopicId
     * @request GET:/comments/comments/{topicId}
     */
    getCommentsCommentsByTopicId: (
      topicId: string,
      query?: {
        /** @default 1 */
        page?: string | number;
        /** @default 20 */
        limit?: string | number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CommentList, any>({
        path: `/comments/comments/${topicId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PostCommentsComments
     * @request POST:/comments/comments/
     */
    postCommentsComments: (data: CreateComment, params: RequestParams = {}) =>
      this.request<SuccessResponse, any>({
        path: `/comments/comments/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PatchCommentsComments
     * @request PATCH:/comments/comments/
     */
    patchCommentsComments: (data: UpdateComment, params: RequestParams = {}) =>
      this.request<SuccessResponse, any>({
        path: `/comments/comments/`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteCommentsComments
     * @request DELETE:/comments/comments/
     */
    deleteCommentsComments: (data: DeleteComment, params: RequestParams = {}) =>
      this.request<SuccessResponse, any>({
        path: `/comments/comments/`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  profile = {
    /**
     * No description
     *
     * @name GetProfileByUserId
     * @request GET:/profile/{userId}
     */
    getProfileByUserId: (userId: string, params: RequestParams = {}) =>
      this.request<UserProfileResponse, any>({
        path: `/profile/${userId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
