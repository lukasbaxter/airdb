import styled from "styled-components";

import cover from "../assets/images/login-cover-1.png";
import logo from "../assets/logo/wide-color.svg";
import userIcon from "../assets/icons/user.png";
import lockIcon from "../assets/icons/lock.png";
import airplaneIcon from "../assets/icons/airplane.png";

import AirportDropdown from "../components/AirportDropdown";
import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState({
    airport: "",
    employeeId: "",
    password: "",
  });
  function handleLogin(event: { preventDefault: () => void }) {
    event.preventDefault();
    console.log(login);
  }

  return (
    <>
      <Container>
        <LeftContainer>
          <CoverImage src={cover} alt="Cover Image" />
        </LeftContainer>
        <RightContainer>
          <RightFormatContainer>
            <Logo src={logo} alt="Logo" />
            <Subtitle>Sign in to your account</Subtitle>
            <form onSubmit={handleLogin}>
              <InputContainer>
                <InputIcon src={airplaneIcon} alt="Airplane Icon" />
                <AirportDropdown />
              </InputContainer>
              <InputContainer>
                <InputIcon src={userIcon} alt="User Icon" />
                <TextInput
                  type="text"
                  placeholder="Employee ID"
                  value={login.employeeId}
                  onChange={(e) =>
                    setLogin({ ...login, employeeId: e.target.value })
                  }
                />
              </InputContainer>
              <InputContainer>
                <InputIcon src={lockIcon} alt="Lock Icon" />
                <TextInput
                  type="password"
                  placeholder="Password"
                  value={login.password}
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />
              </InputContainer>
              <Button type="submit">Sign In</Button>
            </form>
          </RightFormatContainer>
        </RightContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 50vw;
  min-height: 480px;
  min-width: 643px;
  box-shadow: 12px 12px 4px 4px rgba(0, 0, 0, 0.167);
`;
const LeftContainer = styled.div`
  height: 100%;
  width: 40%;
`;
const RightContainer = styled.div`
  background: white;
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const RightFormatContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const CoverImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Logo = styled.img`
  width: 100px;
`;
const Subtitle = styled.h2`
  font-size: 14px;
  color: #666;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: #f0f0f0;
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 15px;
`;
const InputIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const TextInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  flex: 1;
  font-size: 14px;
  color: #333;
`;
const Button = styled.button`
  background: rgb(46, 147, 255);
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #5f54ff;
  }
`;
