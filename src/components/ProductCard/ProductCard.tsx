import "./productcard.css";

type ProductCardProp = {
  type: string;
};

const ProductCard: React.FC<ProductCardProp> = ({ type }) => (
  <div className={`product-card product-card--${type}`}></div>
);

export default ProductCard;
