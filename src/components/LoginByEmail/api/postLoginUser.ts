import { api } from "../../../lib/axiosInstance"
import { ACCESS_TOKEN_KEY } from "../../../lib/constants"

interface PostLoginUserOptions {
    data: {
        email: string
        password: string
    }
}

interface PostSuccessResponse {
    accessToken: string,
    user: {
        id: number
        email: string,
    }
}

const errorMessage = "Ошибка при авторизации"

export const postLoginUser = async (options: PostLoginUserOptions) => {
    const { data } = options

    try {
        const response = await api.post<PostSuccessResponse>("/login", data)

        if (!response) {
            throw new Error(errorMessage)
        }

        window.localStorage.setItem(ACCESS_TOKEN_KEY, response.data.accessToken)

        return response.data.user
    } catch (error) {
        console.log(error)
    }
}