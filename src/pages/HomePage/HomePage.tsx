import { useState } from "react";
import Title from "antd/es/typography/Title"
import { Col, Row, Tabs, TabsProps } from "antd";

import { LoginByEmail } from "../../components/LoginByEmail/LoginByEmail"
import { RegisterByEmail } from "../../components/RegisterByEmail/RegisterByEmail";
import { Wrapper } from "../../components/Layout";
import { useAuth } from "../../hooks/useAuth";

const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Регистрация',
      children: <RegisterByEmail />,
    },
    {
      key: '2',
      label: 'Авторизация',
      children: <LoginByEmail />,
    }
];

const DEFAULT_TAB = "1"

const HomePage = () => {
    const isAuth = useAuth()
    const [currentTab, setCurrentTab] = useState<string>(DEFAULT_TAB)

    const handleChangeKey = (activeKey: string) => {
        setCurrentTab(activeKey)
    }

    return (
        <Wrapper>
            {!isAuth ? (
                <>
                    <Row>
                        <Col span={24}>
                            <Title>Home Page</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Tabs
                                defaultActiveKey={currentTab}
                                items={items}
                                onChange={handleChangeKey}
                            />
                        </Col>
                    </Row>
                </>
            ) : (
                <Row>
                    <Col span={24}>
                        <Title>Вы авторизованы и это прекрасно</Title>
                    </Col>
                </Row>
            )}
        </Wrapper>
    )
}

export default HomePage