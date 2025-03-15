import styled from "styled-components";
import tagIcon from "../assets/icons/tag.png";

export default function Roles() {
  const handleRoleRegister = (e: any) => {
    e.preventDefault();

    const roleName = {
      name: e.target[0].value,
    };
    console.log(roleName);
  };
  return (
    <div>
      <h1>Users</h1>
      <h2>Create new user</h2>
      <form onSubmit={handleRoleRegister}>
        <InputContainer>
          <InputIcon src={tagIcon} alt="Role name" />
          <TextInput type="text" placeholder="Role title" />
        </InputContainer>
        <Button type="submit">Create role</Button>
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
