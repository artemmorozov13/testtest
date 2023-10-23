import { RouteProps } from 'react-router'

export type AppRoutesWithAuthProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  POSTS = 'posts',

  // 404
  NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.POSTS]: '/posts',
  [AppRoutes.NOT_FOUND]: '*'
}