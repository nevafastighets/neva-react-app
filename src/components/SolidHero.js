import styled from "styled-components";

const SolidHero = styled.header`
  height: 41.1875rem;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -160px;
  z-index: -2;
  position: relative;
`;

export default SolidHero;
