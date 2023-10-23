import { HomePage } from "../../pages/HomePage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { PostsPage } from "../../pages/PostsPage";
import { AppRoutes, AppRoutesWithAuthProps, RoutesPath } from "./appRoutes";

export const routeConfig: Record<AppRoutes, AppRoutesWithAuthProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <HomePage />
  },
  [AppRoutes.POSTS]: {
    path: RoutesPath.posts,
    element: <PostsPage />,
    authOnly: true
  },
  // 404
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.not_found,
    element: <NotFoundPage />
  }
}