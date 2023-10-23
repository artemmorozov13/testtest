import { FC, useState } from "react"
import { Wrapper } from "../../components/Layout"
import { ProductList } from "../../components/ProductList/ProductList"
import { DeleteFilled } from "@ant-design/icons"
import { Modal, Typography } from "antd"
import { useSelector } from "react-redux"
import { getBasketProducts } from "../../providers/StoreProvider/selectors/basketSelectors"
import { ProductItem } from "../../components/ProductList/ProductItem"

const PostsPage: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const productsInBasket = useSelector(getBasketProducts.selectAll)

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    return (
        <Wrapper>
            <ProductList />
            <DeleteFilled
                style={{ position: "fixed", bottom: "3rem", right: "3rem", fontSize: "40px", cursor: "pointer" }}
                onClick={() => setIsOpen(true)}
            />
            <Modal
                open={isOpen}
                onOk={handleCloseModal}
                onCancel={handleCloseModal}
            >
                {productsInBasket.length > 0 ? productsInBasket.map(product => (
                    <ProductItem product={product} />
                )) : (
                    <Typography.Text type="danger">Корзмна пуста</Typography.Text>
                )}
            </Modal>
        </Wrapper>
    )
}

export default PostsPage