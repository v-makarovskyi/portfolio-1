import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import sputnik from "../assets/images/sputnik.png";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
    0% {transform: translateY(50px)}
    50% {transform: translateY(20px) translateX(50px)}
    100% {transform: translateY(50px)}

`;

const Space = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 40vw;
  animation: ${float} 6s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 45vw;
  height: 50vh;
  z-index: 3;
  line-height: 1, 5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.7em + 1vh);
  backdrop-filter: blur(4px);

  position: absolute;
  top: 10rem;
  left: calc(5rem + 5vh);

  font-size: 24px;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`;




const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton theme="dark" />
        <ParticleComponent theme="dark" />
        <Space>
          <img src={sputnik} alt="astronaut" />
        </Space>
        <Main>
            Доброго времени суток. <br/><br/>Меня зовут Владислав. <br />
            <br /> Создаю сайты, которые отлично смотрятся, быстро загружаются,
            функциональны и просты в использовании. <br />
            <br />
            Любой начатый проект довожу до конца, постоянно совершенствую свой
            профессиональный уровень. <br />
            <br /> Вы можете заказать у меня разработку сайта с нуля, или
            связаться со мной для сотрудничества.
        </Main>
        <BigTitle right='5%' top="70%" text="Обо мне" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
