import { Component } from "react";
import { Dropdown } from "react-bootstrap";

class FilterSearch extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between text-white">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="custom-btn ms-4 mt-1">
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <i className="bi bi-grid ms-3 me-3 fs-6"></i>
          <i className="bi bi-grid-3x3 ms-3 me-3 fs-6"></i>
        </div>
      </div>
    );
  }
}

export default FilterSearch;
