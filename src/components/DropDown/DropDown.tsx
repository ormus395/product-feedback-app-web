// dropdowm has a container
// a hoverable to trigger the appearance of the dropdown menu
// and the menu
// the inner text of the p will change on active filter state
import "./dropdown.css";
import Button from "../Button/Button";
import { useState } from "react";

interface DropDownProps {
  options: string[];
  selectDefault: string;
}

const DropDown = ({ options, selectDefault }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>(selectDefault);

  const optionItems = options.map((o) => {
    console.log(o);
    return (
      <li
        onClick={(e) => handleSelect(e)}
        className="menu-item"
        data-option={o}
      >
        {o}
      </li>
    );
  });

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (e: any): void => {
    setSelected(e.target.dataset.option);
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown">
      <Button type="dropdown" onClick={handleOpen}>
        Sort by: {selected}
      </Button>
      <ul className={`menu-list ${isOpen ? null : "hidden"}`}>{optionItems}</ul>
    </div>
  );
};

export default DropDown;
