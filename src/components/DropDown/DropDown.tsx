// dropdowm has a container
// a hoverable to trigger the appearance of the dropdown menu
// and the menu
// the inner text of the p will change on active filter state

const DropDown = ({ children }: any) => {
  <div className="dropdown">
    <p>
      <span>Sort by: </span> Most Upvotes <span>^</span>
    </p>
    <div className="dropdown-menu__container">
      <ul className="dropdown__menu">
        <li className="dropwdown__menu__item"></li>
        <li className="dropwdown__menu__item"></li>
        <li className="dropwdown__menu__item"></li>
        <li className="dropwdown__menu__item"></li>
      </ul>
    </div>
  </div>;
};

export default DropDown;
