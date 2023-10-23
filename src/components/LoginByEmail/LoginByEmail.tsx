import { FC, useState } from "react";
import { Button, Form, Input, Typography } from 'antd';
import { Controller, useForm } from "react-hook-form";
import { postLoginUser } from "./api/postLoginUser";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../providers/RouteProvider/appRoutes";

import "./LoginByEmail.css"

type FieldType = {
    email?: string;
    password?: string;
};

export const LoginByEmail: FC = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const navigate = useNavigate()
    const { control, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data: any) => {
        postLoginUser({ data })
            .then(() => {
                return navigate(RoutesPath.posts)
            })
            .catch(error => {
                setErrorMessage(error)
            })
    }

    return (
        <div className="form">
            <div className="form__logo">
                <img src="https://cdspartner.ru/static/media/logo.84818c22.svg" className="form__image" />
            </div>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={handleSubmit(onSubmit)}
                labelCol={{ span: 24 }}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="E-mail"
                    name="email"
                    className="form__label"
                >
                    <Controller
                        name="email"
                        control={control}
                        defaultValue={""}
                        rules={{ required: { value: true, message: "Поле обязательно для заполнения" } }}
                        render={({ field: { value, onChange } }) => (
                            <Input value={value} onChange={onChange} className="form__input" />
                        )}
                    />
                    {errors?.email?.message && (
                        <Typography.Text type="danger">{errors?.email?.message as string}</Typography.Text>
                    )}
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    className="form__label"
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
                                className="form__input"
                            />
                        )}
                    />
                    {errors?.password?.message && (
                        <Typography.Text type="danger">{errors?.password?.message as string}</Typography.Text>
                    )}
                </Form.Item>

                {errorMessage && <Typography.Text type="danger">{errorMessage}</Typography.Text>}

                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button type="primary" htmlType="submit" className="form__button">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}