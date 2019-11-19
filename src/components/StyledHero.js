import styled from "styled-components";

const StyledHero = styled.header`
  height: 41.1875rem;
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -160px;
  z-index: -2;
  position: relative;
`;

export default StyledHero;
