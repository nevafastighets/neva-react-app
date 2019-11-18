import styled from "styled-components";

const Hero = styled.header`
  height: 41.1875rem;
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Hero;
