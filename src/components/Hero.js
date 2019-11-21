import styled from "styled-components";

const Hero = styled.header`
  height: ${props => props.height || 41}.1875rem;
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -160px;
  z-index: -2;
  position: relative;
`;

export default Hero;
