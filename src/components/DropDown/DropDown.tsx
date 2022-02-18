// dropdowm has a container
// a hoverable to trigger the appearance of the dropdown menu
// and the menu
// the inner text of the p will change on active filter state
import "./dropdown.css";
import Button from "../Button/Button";
import Flex from "../Layout/Flex/Flex";
import { useState } from "react";

interface DropDownProps {
  options: string[];
  selectDefault: string;
}

const DropDown = ({ options, selectDefault }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>(selectDefault);

  const optionItems = options.map((o) => {
    return (
      <li onClick={() => handleSelect(o)} className="menu-item">
        <Flex direction="row">
          <p>{o}</p>
          {o === selected ? <span className="menu-item--active">X</span> : null}
        </Flex>
      </li>
    );
  });

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (o: string): void => {
    setSelected(o);
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown">
      <Button flavor="dropdown" onClick={handleOpen}>
        Sort by: {selected}
      </Button>
      <ul className={`menu-list ${isOpen ? null : "hidden"}`}>{optionItems}</ul>
    </div>
  );
};

export default DropDown;
