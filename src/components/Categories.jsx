import React, { Fragment } from "react";

const Categories = (props) => {
  return (
    <Fragment>
      <div className="btn-container">
        {props.category.map((categories, index) => {
          return (
            <button
              className="filter-btn"
              type="button"
              key={index}
              onClick={() => props.filterItems(categories)}
            >
              {categories}
            </button>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Categories;
