import React from "react";
import styled from "styled-components";

const PlantFilter = (props) => {
  const { inputHandler, searchValue } = props;

  return (
    <StyledBar>
      <div>
        <input
          name="searchValue"
          type="text"
          placeholder="Filter plants..."
          value={searchValue}
          onChange={inputHandler}
        />
      </div>
    </StyledBar>
  );
};

const StyledBar = styled.div`
  max-width: 40%;
  margin: 30px auto -15px;
  div {
    input {
      text-align: center;
      color: white;
      background-color: #333;
      border: none;
      &::placeholder {
        color: #cf0;
      }
    }
  }
`;

export default PlantFilter;
