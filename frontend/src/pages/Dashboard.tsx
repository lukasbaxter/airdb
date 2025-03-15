import styled from "styled-components";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import DatabaseViewport from "../database/DatabaseViewport";

export default function Dashboard() {
  const title = "Dashboard";
  const [page, setPage] = useState("");

  useEffect(() => {
    setPage(title);
    console.log("Set header title to: " + page);
  }, []);

  return (
    <>
      <SessionContainer>
        <HeaderContainer>
          <Header page={page} />
        </HeaderContainer>
        <DatabaseViewport />
      </SessionContainer>
    </>
  );
}

const SessionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  width: 100%;
  flex-shrink: 0;
`;
