import React from "react";
const Filters = ({ filters, currentFilteredBy, updateFilter }) => {
  return (
    <div className="App">
      <div class="container restaurants">
        <div class="restaurant-options">
          {Object.entries(filters).map(([key, value]) => (
            <button
              key={key}
              className={`restaurant-option ${
                currentFilteredBy === key ? "underline" : "false"
              }`}
              onClick={() => updateFilter(key)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Filters;
