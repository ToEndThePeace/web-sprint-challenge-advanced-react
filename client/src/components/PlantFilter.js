import React from "react";
import styled from "styled-components";

const PlantFilter = props => {
  const { inputHandler, searchValue } = props;

  return (
    <StyledBar>
      <div>
        <input
          name="searchValue"
          type="text"
          value={searchValue}
          onChange={inputHandler}
        />
      </div>
    </StyledBar>
  )
}

const StyledBar = styled.div`

`;

export default PlantFilter;