import { ACCESS_TOKEN_KEY } from "../lib/constants"

export const useAuth = () => {
  const userData = window.localStorage.getItem(ACCESS_TOKEN_KEY)

  if (userData) {
    return true
  }
  return false
}