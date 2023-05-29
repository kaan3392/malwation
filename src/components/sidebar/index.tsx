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
                <Svg.HomeIcon />
                Home
              </S.ListItem>
              <S.ListItem>
                <Svg.ProjectsIcon />
                Projects
              </S.ListItem>
              <S.ListItem>
                <Svg.TasksIcon />
                Tasks
              </S.ListItem>
              <S.ListItem>
                <Svg.UsersIcon />
                Users
              </S.ListItem>
            </S.List>
          </S.Top>
          <S.Bottom>
            <S.List>
              <S.ListItem>
                <Svg.SupportIcon />
                Support
              </S.ListItem>
              <S.ListItem>
                <Svg.SettingIcon />
                Setting
              </S.ListItem>
            </S.List>
            <S.InformationContainer>
              <S.Information>
                <S.Name>Kaan Alacali</S.Name>
                <S.Email>kaanalacali@gmail.com</S.Email>
              </S.Information>
              <S.Logout>
                <Svg.ExitIcon />
              </S.Logout>
            </S.InformationContainer>
          </S.Bottom>
        </S.Main>
      </S.Wrapper>
    </S.Container>
  );
};

export default Sidebar;
