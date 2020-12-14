import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BoardNav from "./BoardNav";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading3QuartersOutlined, LoadingOutlined } from "@ant-design/icons";
const createNewBoard = () => {};

const openSearchBar = () => {};

const Boards = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log(user);
  if (isAuthenticated) {
    return (
      <div>
        <BoardNav />
        {/* <Search type="text" id="sd"></Search>
            <SearchOutlined />
            <div> shay thee</div>
            <a href="/boards"><Image src="https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/trello-header-logos/af7af6ed478d3460709d715d9b3f74a4/trello-logo-white.svg" alt="home_logo" width="130" height="60"></Image></a> */}
        <Headers>🕔 Recently Viewed</Headers>
        <Recently>
          <Item>
            <Link to="/board">Board 1</Link>
          </Item>
          <Item>Board 1</Item>
          <Item>Board 1</Item>
          <Item>Board 1</Item>
          <Item>Board 1</Item>
          <Item>Board 1</Item>
          {/* TODO: FUNCTION for adding new board */}
        </Recently>
        <Headers>👤 Personal Boards</Headers>

        <Recently>
          <Item>Board 1</Item>
          <Item>Board 1</Item>
          <Item>Board 1</Item>
          <Item>Board 1</Item>
          <Item>Board 1</Item>
          <Item>Board 1</Item>
          <button
            style={{
              backgroundColor: "rgba(9,30,66,.06)",
              borderRadius: "2px",
              boxShadow: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              marginTop: "1rem",
              width: "189",
              height: "80px",
              padding: "5%"
            }}
            onClick={createNewBoard}
          >
            <span style={{ color: "#172b4d" }}>Create new board</span>
          </button>
        </Recently>
      </div>
    );
  } else {
    return <LoadingOutlined />;
  }
};

export default Boards;

const Header = styled.header`
  background: #0079bf;
  padding-top: 0.2rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 30px;
`;
const Image = styled.img`
  position: relative;
  left: 25%;
  width: 105px;
  height: 25px;
  opacity: 0.5;

  :hover {
    opacity: 0.8;
  }
`;

const Search = styled.input`
  background-color: #fff;
  padding: 8px 12px;
  position: relative;
  bottom: 6px;
  left: 2px;
  color: #172b4d;
  border: none;
  box-shadow: none;
  padding-right: 54px;
  width: 180px;
  height: 10px;
  border-radius: 3px;
  opacity: 0.5;
`;

const Recently = styled.ul`
  position: relative;
  right: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 4fr));
  grid-auto-rows: 80px;
  grid-gap: 8px;
  list-style: none;
  font-weight: bold;
`;

const Item = styled.li`
  background-color: #0079bf;
  color: #ffffff;
  text-align: left;
  border-radius: 4px;
  cursor: pointer;
  flex: 1 0 15%;
  margin: 5px;
  padding: 5%;
  width: 160px;
  height: 60px;
  :hover {
    opacity: 0.8;
  }
`;

const Headers = styled.h2`
  color: #172b4d;
  font-size: 1rem;
`;
