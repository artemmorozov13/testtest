import { Button, Card, Image, Typography } from "antd";
import { FC, useState } from "react";
import { ProductType } from "./productTypes";
import { basketActions } from "../../providers/StoreProvider/slices/basketSlice";
import { useDispatch } from "react-redux";

interface ProductCardProps {
    product: ProductType
}

export const ProductCard: FC<ProductCardProps> = (props) => {
    const { product } = props
    const {title, price, image } = product

    const [isInBasket, setIsInBasket] = useState<boolean>(false)

    const dispatch = useDispatch()

    const handleAddToBasket = () => {
        if (isInBasket) {
            dispatch(basketActions.removeFromBasket(product.id))
        } else (
            dispatch(basketActions.addProductToBasket(product))
        )
        setIsInBasket(prev => !prev)
    }

    return (
        <Card>
            <div>
                <Typography.Title>{title}</Typography.Title>
                <Typography.Text
                    style={{marginBottom: "1rem", display: "block"}}
                >{`Цена: ${price} руб.`}</Typography.Text>
            </div>
            <Image style={{ maxWidth: "100%", maxHeight: "300px" }} src={image} />
            <div style={{ marginTop: "1rem" }}>
                <Button
                    type={isInBasket ? "default" : "primary"}
                    onClick={handleAddToBasket}
                >{isInBasket ? "Убрать из корзины" : "Добавить в корзину"}</Button>
            </div>
        </Card>
    )
}