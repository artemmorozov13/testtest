import { Navigate, useLocation } from 'react-router'
import { RoutesPath } from './appRoutes'
import { useAuth } from '../../hooks/useAuth'

interface IRequireAuthProps {
  children: JSX.Element
}

export const RequireAuth = (props: IRequireAuthProps) => {
  const { children } = props
  const isAuth = useAuth()
  const location = useLocation()

  if (!isAuth) {
    return <Navigate to={RoutesPath.main} state={{ form: location }} replace />
  }

  return children
}