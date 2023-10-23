import { FC, ReactNode } from "react";
import { Button, Layout, Typography } from 'antd';
import { Container } from "../../UI/Container";
import { useAuth } from "../../hooks/useAuth";
import { ACCESS_TOKEN_KEY } from "../../lib/constants";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../providers/RouteProvider/appRoutes";

interface WrapperProps {
    children: ReactNode
}

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

export const Wrapper: FC<WrapperProps> = (props) => {
    const { children } = props

    const navigate = useNavigate()
    const isAuth = useAuth()

    const handleLogout = () => {
        window.localStorage.removeItem(ACCESS_TOKEN_KEY)
        return navigate(RoutesPath.main)
    }

    return (
        <Layout style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <Layout.Header style={headerStyle}>
                <Typography.Text>LogoType</Typography.Text>
                {isAuth && (
                    <Button onClick={handleLogout}>Выйти</Button>
                )}
            </Layout.Header>
            <Container>{children}</Container>
        </Layout>
    )
}