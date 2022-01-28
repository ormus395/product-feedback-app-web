import "./productcard.css";

type ProductCardsProps = {
  title: string;
  suggestionTags: string[];
}

const ProductCards: React.FC<ProductCardsProps> = ({title, suggestionTags}) => {
  return (
    <div className="product-cards__container">
      <div className="product-card__title"></div>
      {/* The info container will be a side drawer if mobile */}
      {/* Otherwise its just part of the container */}
      <div className="product-card__info"></div>
    </div>
  )
}

export default ProductCards
