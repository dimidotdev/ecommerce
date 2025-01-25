import { Product } from '../../data/products'
import * as S from './styles'
import { IoCartOutline } from "react-icons/io5"
import { HiStar, HiOutlineStar } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { addProduct, removeProduct } from '../../redux/CartReducer/cart-slice';

interface ProductCardProps {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    const { cart } = useSelector((state: RootReducer) => state.cartReducer);

    const dispatch = useDispatch();

    const isProductInCart = cart.find((cartProduct) => cartProduct.id === product.id) !== undefined;
    
    function handleAddProductToCart() {
        dispatch(addProduct(product));
    }

    function handleRemoveProductFromCart() {
        dispatch(removeProduct(product));
    }
    
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
            { isProductInCart ? (
                <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
                    Remove from Cart
                    <IoCartOutline />
                </S.RemoveFromCartButton>
            ) : (
                <S.AddToCartButton onClick={handleAddProductToCart}>
                    Add to Cart
                    <IoCartOutline />
                </S.AddToCartButton>
            )}
        </S.Card>
    )
}