import * as S from './styles'
import { IoCartOutline } from "react-icons/io5"

export const ProductCard: React.FC = () => {
    return (
        <S.Card>
            <S.ProductImage src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Product" />
            <S.ProductTitle>Product Title</S.ProductTitle>
            <S.ReviewPriceWrapper>
                <S.Review>4.5</S.Review>
                <S.Price>$100</S.Price>
            </S.ReviewPriceWrapper>
            <S.AddToCartButton>
                Add to Cart
                <IoCartOutline />
            </S.AddToCartButton>
        </S.Card>
    )
}