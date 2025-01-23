import { Product } from '../../data/products'
import * as S from './styles'
import { IoCartOutline } from "react-icons/io5"
import { HiStar, HiOutlineStar } from "react-icons/hi";

interface ProductCardProps {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <S.Card>
            <S.ProductImage src={product.image} alt={product.description} />
            <S.ProductTitle>{product.title}</S.ProductTitle>
            <S.ReviewPriceWrapper>
                <S.ReviewContainer>
                    {Array.from({ length: 5 }).map((_, index) => {
                        if (index < product.rating.rate) {
                            return <HiStar key={index} />
                        }
                        return <HiOutlineStar key={index} />
                    })}
                    <S.Review>{product.rating.rate}</S.Review>
                </S.ReviewContainer>
                <S.Price>${product.price}</S.Price>
            </S.ReviewPriceWrapper>
            <S.AddToCartButton>
                Add to Cart
                <IoCartOutline />
            </S.AddToCartButton>
        </S.Card>
    )
}