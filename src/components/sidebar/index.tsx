import Input from "../input";
import Logo from "../logo";

import * as Svg from "../../svg/Svg";
import * as S from "./styled";

import { linksBottom, linksTop } from "./constants";

const Sidebar = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Main>
          <S.Top>
            <Logo />
            <Input />
            <S.List>
              {linksTop.map((link, index) => (
                <S.ListItem key={index} to={link.path}>
                  {link.icon}
                  {link.name}
                </S.ListItem>
              ))}
            </S.List>
          </S.Top>
          <S.Bottom>
            <S.List>
              {linksBottom.map((link, index) => (
                <S.ListItem key={index} to={link.path}>
                  {link.icon}
                  {link.name}
                </S.ListItem>
              ))}
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
