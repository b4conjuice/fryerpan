import styled from 'styled-components';

const AppStyles = styled.div`
  font-family: Arial;
  height: 100%;
  width: 100%;

  header,
  main,
  footer {
    box-sizing: border-box;
  }

  header,
  footer {
    height: 10%;
    font-size: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header {
    background: var(--darkBlue);
    color: white;
  }

  main {
    background: var(--grey);
    color: var(--blue);
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    height: 80%;
    padding: 4vw;
  }

  footer {
    background: var(--lightBlue);
  }
`;

export default AppStyles;
