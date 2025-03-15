import styled from "styled-components";
import logo from "../assets/logo/wide-color.svg";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  page: string;
}

export default function Header({ page }: HeaderProps) {
  const navigate = useNavigate();

  function logout() {
    console.log("logging out and switching to login page");
    navigate("/login");
  }

  return (
    <>
      <Container>
        <LeftContainer>
          <Logo src={logo} alt="Logo" />
        </LeftContainer>
        <CenterContainer>
          <Title>{page}</Title>
        </CenterContainer>
        <RightContainer>
          <UserDetails>
            <UserDetailText>Name</UserDetailText>
            <UserDetailText>Employee ID</UserDetailText>
            <UserDetailText>Airport</UserDetailText>
            <UserDetailText>Role</UserDetailText>
          </UserDetails>
          <Button onClick={logout}>Logout</Button>
        </RightContainer>
      </Container>
    </>
  );
}

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;
const CenterContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  padding: 10px;
  margin: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Logo = styled.img`
  height: 40px;
  margin: 10px;
`;
const Title = styled.h1`
  font-size: 24px;
  color: #ffffff;
`;
const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const UserDetailText = styled.p`
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-size: 16px;
  margin: 10px;
`;
