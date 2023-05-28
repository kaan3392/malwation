import Exit from "../../svg/Exit";
import Home from "../../svg/Home";
import Projects from "../../svg/Projects";
import Search from "../../svg/Search";
import Setting from "../../svg/Setting";
import Support from "../../svg/Support";
import Tasks from "../../svg/Tasks";
import Users from "../../svg/Users";
import * as S from "./styled";

const Sidebar = () => {
  return (
    <S.Container>
        <S.Wrapper>
          <S.Main>
            <S.Top>
              <S.Title>MALWATION</S.Title>
              <S.SearchContainer>
                <Search />
                <S.SearchInput type="text" placeholder="Search" />
              </S.SearchContainer>
              <S.List>
                <S.ListItem>
                  <Home />
                  Home
                </S.ListItem>
                <S.ListItem>
                  <Projects />
                  Projects
                </S.ListItem>
                <S.ListItem>
                  <Tasks />
                  Tasks
                </S.ListItem>
                <S.ListItem>
                  <Users />
                  Users
                </S.ListItem>
              </S.List>
            </S.Top>
            <S.Bottom>
              <S.List>
                <S.ListItem>
                  <Support />
                  Support
                </S.ListItem>
                <S.ListItem>
                  <Setting />
                  Setting
                </S.ListItem>
              </S.List>
              <S.InformationContainer>
                <S.Information>
                  <S.Name>Kaan Alacali</S.Name>
                  <S.Email>kaanalacali@gmail.com</S.Email>
                </S.Information>
                <S.Logout>
                  <Exit />
                </S.Logout>
              </S.InformationContainer>
            </S.Bottom>
          </S.Main>
        </S.Wrapper>
    </S.Container>
  );
};

export default Sidebar;
