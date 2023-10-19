import { useState } from "react";
import { Form } from "react-bootstrap";
import "./Filter.scss";

const filters = [
  {
    dropdownText: "Everything",
    filterText: "All updates",
  },
  {
    dropdownText: "Posts",
    filterText: "All posts",
  },
  {
    dropdownText: "Replies",
    filterText: "All replies",
  },
];

export const UpdateFilter = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0].filterText);

  function changeFilter(selectedIndex) {
    setSelectedFilter(filters[selectedIndex].filterText);
    onFilterChange(selectedIndex);
  }

  return (
    <div className="filter-container">
      <div className="filter-text-container">
        <p className="filter-text">{selectedFilter}</p>
      </div>
      <div className="filter-select-container">
        <Form.Select onChange={(e) => changeFilter(e.target.value)}>
          {filters.map((x, index) => (
            <option key={index} value={index}>
              {x.dropdownText}
            </option>
          ))}
        </Form.Select>
      </div>
    </div>
  );
};
