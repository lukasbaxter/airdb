import styled from "styled-components";
import AirportDropdown from "../components/AirportDropdown";
import airplaneIcon from "../assets/icons/airplane.png";
import userIcon from "../assets/icons/user.png";

export default function Users() {
  const handleRegister = (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Registering user");

    // generate random 8 digit user id
    const userId = Math.floor(10000000 + Math.random() * 90000000);
    console.log(userId);

    //genearte random password (6 characters, first 3 random letters, second 3 random numbers, last 3 random letters)
    const password =
      Math.random().toString(36).slice(-3) +
      Math.floor(100 + Math.random() * 900) +
      Math.random().toString(36).slice(-3);
    console.log(password);

    // log users name (first + last)
    const firstName = e.target[1].value;
    const lastName = e.target[2].value;
    console.log(firstName + lastName);
  };

  return (
    <div>
      <h1>Users</h1>
      <h2>Create new user</h2>
      <form onSubmit={handleRegister}>
        <InputContainer>
          <InputIcon src={airplaneIcon} alt="Airplane Icon" />
          <AirportDropdown />
        </InputContainer>
        <InputContainer>
          <InputIcon src={userIcon} alt="User Icon" />
          <TextInput type="text" placeholder="First name" />
        </InputContainer>
        <InputContainer>
          <InputIcon src={userIcon} alt="User Icon" />
          <TextInput type="text" placeholder="Last name" />
        </InputContainer>
        <Button type="submit">Create user</Button>
      </form>
    </div>
  );
}
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
