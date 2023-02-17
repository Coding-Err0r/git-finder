import styled from 'styled-components';

export const ContainerBox = styled.div`
  width: 800px;
  margin: 50px 0;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ light }) => (light ? 'rgba(201, 201, 201, 0.5)' : 'rgba(26, 26, 26, 0.5)')};
  z-index: 1;
  transition: all 0.2s linear;
  @media screen and (max-width: 768px) {
    padding: 0 15px;
    transition: 0.3s all ease-in-out;
  }
`;
