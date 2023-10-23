import { FC, useState } from "react";
import { Button, Form, Input, Typography } from 'antd';
import { Controller, useForm } from "react-hook-form";
import { postRegisterUser } from "./api/postRegisterUser";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../providers/RouteProvider/appRoutes";

type FieldType = {
    email: string;
    password: string;
    passwordAgain: string
};

export const RegisterByEmail: FC = () => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const { control, handleSubmit, setError, formState: { errors } } = useForm()

    const onSubmit = async (data: any) => {
        if (data.password !== data.passwordAgain) {
            return setError("passwordAgain", { message: "Пароли не совпадают" })
        }
        postRegisterUser({ data })
            .then(() => {
                return navigate(RoutesPath.posts)
            })
            .catch(error => {
                setErrorMessage(error)
            })
        
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 24 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={handleSubmit(onSubmit)}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="E-mail"
                name="email"
            >
                <Controller
                    name="email"
                    control={control}
                    defaultValue={""}
                    rules={{ required: { value: true, message: "Поле обязательно для заполнения" } }}
                    render={({ field: { value, onChange } }) => (
                        <Input value={value} onChange={onChange} />
                    )}
                />
                {errors?.email?.message && (
                    <Typography.Text type="danger">{errors?.email?.message as string}</Typography.Text>
                )}
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
            >
                <Controller
                    name="password"
                    control={control}
                    defaultValue={""}
                    rules={{ required: { value: true, message: "Поле обязательно для заполнения" } }}
                    render={({ field: { value, onChange } }) => (
                        <Input.Password
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                {errors?.password?.message && (
                    <Typography.Text type="danger">{errors?.password?.message as string}</Typography.Text>
                )}
            </Form.Item>

            <Form.Item<FieldType>
                label="Password Again"
                name="passwordAgain"
            >
                <Controller
                    name="passwordAgain"
                    control={control}
                    defaultValue={""}
                    rules={{ required: { value: true, message: "Поле обязательно для заполнения" } }}
                    render={({ field: { value, onChange } }) => (
                        <Input.Password
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                {errors?.passwordAgain?.message && (
                    <Typography.Text type="danger">{errors?.passwordAgain?.message as string}</Typography.Text>
                )}
            </Form.Item>

            {errorMessage && <Typography.Text type="danger">{errorMessage}</Typography.Text>}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Зарегестрироваться
                </Button>
            </Form.Item>
        </Form>
    )
}