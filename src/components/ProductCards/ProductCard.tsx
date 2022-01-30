import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flex from "../Layout/Flex/Flex";
import Pill from "../Pill/Pill";
import "./productcard.css";

type ProductCardsProps = {
  title: string;
  suggestionTags: string[];
};

const ProductCards: React.FC<ProductCardsProps> = ({
  title,
  suggestionTags,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const suggestionPills = suggestionTags.map((sugg) => <Pill>{sugg}</Pill>);

  return (
    <div className="product-cards__container">
      <div className="product-card__title">
        <div>
          <h3>{title}</h3>
          <h4>Suggestion Board</h4>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className={`hamburger-toggle`}>
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </div>
      {/* The info container will be a side drawer if mobile */}
      {/* Otherwise its just part of the container */}
      <div className={`product-card__info ${isOpen ? "open" : null}`}>
        <div className="info-card">
          <Flex withWrap="y">{suggestionPills}</Flex>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
