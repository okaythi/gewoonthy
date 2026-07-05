import { onRequest as __api_analytics_js_onRequest } from "/home/thy/gewoonthy/functions/api/analytics.js"
import { onRequest as __api_quote_js_onRequest } from "/home/thy/gewoonthy/functions/api/quote.js"
import { onRequest as __api_secure_media_js_onRequest } from "/home/thy/gewoonthy/functions/api/secure_media.js"
import { onRequest as __api_token_js_onRequest } from "/home/thy/gewoonthy/functions/api/token.js"
import { onRequest as __api_videos_js_onRequest } from "/home/thy/gewoonthy/functions/api/videos.js"
import { onRequest as __media___path___js_onRequest } from "/home/thy/gewoonthy/functions/media/[[path]].js"
import { onRequest as ___middleware_js_onRequest } from "/home/thy/gewoonthy/functions/_middleware.js"

export const routes = [
    {
      routePath: "/api/analytics",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_analytics_js_onRequest],
    },
  {
      routePath: "/api/quote",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_quote_js_onRequest],
    },
  {
      routePath: "/api/secure_media",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_secure_media_js_onRequest],
    },
  {
      routePath: "/api/token",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_token_js_onRequest],
    },
  {
      routePath: "/api/videos",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_videos_js_onRequest],
    },
  {
      routePath: "/media/:path*",
      mountPath: "/media",
      method: "",
      middlewares: [],
      modules: [__media___path___js_onRequest],
    },
  {
      routePath: "/",
      mountPath: "/",
      method: "",
      middlewares: [___middleware_js_onRequest],
      modules: [],
    },
  ]