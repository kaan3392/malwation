import Logo from "../Logo";
import Input from "../Input";

import * as S from "./styled";
import * as Svg from "../../svg/Svg";

import { useStore } from "../../store";
import { linksBottom, linksTop } from "./constants";

const Sidebar = () => {
  const logout = useStore((state) => state.logout);
  const currentUser = useStore((state) => state.currentUser);


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
                <S.Name>{currentUser?.name}</S.Name>
                <S.Email>{currentUser?.email}</S.Email>
              </S.Information>
              <S.Logout onClick={logout}>
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
