import { FC, useEffect, useState } from "react";
import { ProductType } from "./productTypes";
import { api } from "../../lib/axiosInstance";
import { Typography } from "antd";
import { ProductCard } from "./ProductCard";



export const ProductList: FC = () => {
    const [products, setProducts] = useState<ProductType[] | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const errorMessage = "Ошибка при запросе товаров";
        (async () => {
            try {
                const response = await api.get("/products/")

                if (!response) {
                    throw new Error(errorMessage)
                }

                setProducts(response.data)
            } catch {
                setError(errorMessage)
            }
        })().finally(() => {
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return (
            <Typography.Text type="secondary">{error}</Typography.Text>
        )
    }

    if (!error && !isLoading) {
        <Typography.Text type="danger">{error}</Typography.Text>
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {products?.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}