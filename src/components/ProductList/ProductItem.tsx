import { FC } from "react"
import { ProductType } from "./productTypes"
import { Card, Col, Row, Typography } from "antd"

interface ProductItemProps {
    product: ProductType
}

export const ProductItem: FC<ProductItemProps> = (props) => {
    const { product } = props
    const { title } = product

    return (
        <Card>
            <Row>
                <Col span={24}>
                    <Typography.Text>{title}</Typography.Text>
                </Col>
            </Row>
        </Card>
    )
}