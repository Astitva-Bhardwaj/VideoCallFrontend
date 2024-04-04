import styled from "styled-components";

const Component = styled.div`
  height: 100vh;
  weidth: 100vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 1rm;
  align-items: center;
  background-color: #131324;
  video#cameraView {
    height: 28rem;
    align-items: center;
    width: 38rem;
    margin-left: -12rem;
  }
  .all-buttons {
    display: flex;
    gap: 10rem;
    justify-content: center;
    align-content: center;
  }
  .container {
    display: flex;
    gap: 5rem;
  }
  .form-div {
    display: flex;
    gap: 5rem;
    margin-top: 2rem;
  }
  .buttons-div {
    display: flex;
    gap: 5rem;
    margin-top: 8rem;
  }
  button#joinNowBtn {
    margin-left: 2.5rem;
  }
  button#presentBtn {
    margin-left: 2.2rem;
  }

  h1 {
    font-size: 50px;
    margin-top: 3rem;
    color: white;
    align-items: center;
    margin-bottom: 1rem;
  }
  button {
    background-color: #997af0;
    color: white;
    padding: 1rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #4e0eff;
    }
  }
`;

export default Component;
