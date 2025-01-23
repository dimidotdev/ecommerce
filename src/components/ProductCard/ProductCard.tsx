import { Product } from '../../data/products'
import * as S from './styles'
import { IoCartOutline } from "react-icons/io5"

interface ProductCardProps {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <S.Card>
            <S.ProductImage src={product.image} alt={product.description} />
            <S.ProductTitle>{product.title}</S.ProductTitle>
            <S.ReviewPriceWrapper>
                <S.Review>{product.rating.rate}</S.Review>
                <S.Price>${product.price}</S.Price>
            </S.ReviewPriceWrapper>
            <S.AddToCartButton>
                Add to Cart
                <IoCartOutline />
            </S.AddToCartButton>
        </S.Card>
    )
}