import * as S from './styles';
import { ProductCard } from '../ProductCard/ProductCard';
import { products } from '../../data/products';

export const ProductList: React.FC = () => {
    return (
        <S.Container>
            {
                products.map((product) => (
                    <ProductCard key={product.id}product={product} />
                ))
            }
        </S.Container>
    );
};