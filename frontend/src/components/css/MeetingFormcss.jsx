import styled from "styled-components";
const MeetingFormrum = styled.div`
  background-color: #131324;
  height: 100vh;
  weidth: 100vw;
  gap: 10rm;
  align-items: center;

  .container {
    display: flex;
    gap: 12rem;
    height: 500px;
    justify-content: center;
  }
  .lable {
    font-size: 1rem;
  }
  .form-group {
    color: wheat;
    gap: 20px;
    h2 {
      margin-left: 3rem;
      justify-content: center;
      margin-top: 1rem;
    }
  }
  .create {
    h1 {
      color: white;
      align-content: center;
    }
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    margin-top: 65px;

    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      margin-top: 4rem;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #977af0;
        outline: none;
      }
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
      margin-top: 6rem;
      margin-left: 4rem;
      justify-content: center;
      &:hover {
        background-color: #4e0eff;
      }
    }
  }

  .join {
    h1 {
      color: white;
      align-content: center;
    }
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 7rem;
    margin-top: 65px;

    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      margin-top: 4rem;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #977af0;
        outline: none;
      }
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
      margin-top: 6rem;
      margin-left: 4rem;
      justify-content: center;
      &:hover {
        background-color: #4e0eff;
      }
    }
  }
`;

export default MeetingFormrum;
