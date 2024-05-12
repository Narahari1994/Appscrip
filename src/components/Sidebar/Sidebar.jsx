import { BsChevronDown } from "react-icons/bs";

import "./Sidebar.css";

const filterItems = [
  {
    id: 1,
    name: "IDEAL FOR",
    category: "All",
    logo: <BsChevronDown />,
  },
  {
    id: 2,
    name: "OCCASSION",
    category: "All",
    logo: <BsChevronDown />,
  },
  {
    id: 3,
    name: "WORK",
    category: "All",
    logo: <BsChevronDown />,
  },
  {
    id: 4,
    name: "FABRIC",
    category: "All",
    logo: <BsChevronDown />,
  },
  {
    id: 6,
    name: "SEGMENT",
    category: "All",
    logo: <BsChevronDown />,
  },
  {
    id: 7,
    name: "SUITABLE",
    category: "All",
    logo: <BsChevronDown />,
  },
  {
    id: 8,
    name: "RAW MATERIALS",
    category: "All",
    logo: <BsChevronDown />,
  },
  {
    id: 9,
    name: "PATTERN",
    category: "All",
    logo: <BsChevronDown />,
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="input-container">
        <input type="checkbox" name="customisable" id="customisable" />
        <label htmlFor="customisable">customisable</label>
      </div>
      {filterItems.map((item) => {
        return (
          <div className="sidebar-item" key={item.id}>
            <div>
              <span className="item-heading">{item.name}</span>
              <span>{item.category}</span>
            </div>
            {item.logo}
          </div>
        );
      })}
    </div>
  );
};
export default Sidebar;
