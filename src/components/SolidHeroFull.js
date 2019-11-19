import styled from "styled-components";

const SolidHeroFull = styled.header`
  height: 100vh;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -160px;
  z-index: -2;
  position: relative;
`;

export default SolidHeroFull;
