import { api } from "../../../lib/axiosInstance"
import { ACCESS_TOKEN_KEY } from "../../../lib/constants"

export interface CreateUserDataType {
    email: string,
    password: string
    passwordAgain: string
}

interface PostRegisterUserOptions {
    data: CreateUserDataType
}

interface PostSuccessResponse {
    accessToken: string,
    user: {
        id: number
        email: string,
    }
}

const errorMessage = "Ошибка при создании пользователя"

export const postRegisterUser = async (options: PostRegisterUserOptions) => {
    const { data } = options

    try {
        const response = await api.post<PostSuccessResponse>("/register", data)

        if (!response) {
            throw new Error(errorMessage)
        }

        window.localStorage.setItem(ACCESS_TOKEN_KEY, response.data.accessToken)

        return response.data.user
    } catch(err) {
        console.log(err)
        throw new Error(errorMessage)
    }
}