import * as Svg from "../../svg/Svg";
import * as S from "./styled";
import Logo from "../logo";
import Input from "../input";

const Sidebar = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Main>
          <S.Top>
            <Logo />
            <Input />
            <S.List>
              <S.ListItem>
                <Svg.Home />
                Home
              </S.ListItem>
              <S.ListItem>
                <Svg.Projects />
                Projects
              </S.ListItem>
              <S.ListItem>
                <Svg.Tasks />
                Tasks
              </S.ListItem>
              <S.ListItem>
                <Svg.Users />
                Users
              </S.ListItem>
            </S.List>
          </S.Top>
          <S.Bottom>
            <S.List>
              <S.ListItem>
                <Svg.Support />
                Support
              </S.ListItem>
              <S.ListItem>
                <Svg.Setting />
                Setting
              </S.ListItem>
            </S.List>
            <S.InformationContainer>
              <S.Information>
                <S.Name>Kaan Alacali</S.Name>
                <S.Email>kaanalacali@gmail.com</S.Email>
              </S.Information>
              <S.Logout>
                <Svg.Exit />
              </S.Logout>
            </S.InformationContainer>
          </S.Bottom>
        </S.Main>
      </S.Wrapper>
    </S.Container>
  );
};

export default Sidebar;
