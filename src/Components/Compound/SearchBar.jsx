import "./SearchBar.scss";
import { InputGroup, Form } from "react-bootstrap";

export const SearchBar = () => {
  return (
    <>
      <InputGroup>
        <Form.Control
          placeholder="Enter your search here.."
          aria-label="Search"
          aria-describedby="search"
        />
        <InputGroup.Text id="search">
          <i className="bi-search"></i>
        </InputGroup.Text>
      </InputGroup>
    </>
  );
};
