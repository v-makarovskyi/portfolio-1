import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes";
import { Design, Develope } from "../components/AllSvg";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  cursor: pointer;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vh);

  ${Main}:hover & {
    fill: ${(props) => props.theme.body};
  }

  & > :first-child {
    margin-right: 1rem;
  }
`;

const Desc = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vh);
  padding: 0%.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton theme='light' />
        <ParticleComponent theme='light' />

        <Main>
          <Title>
            <Design width={40} height={40} /> Дизайнер
          </Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            accusamus illum tenetur, debitis libero quo!
          </Desc>
          <Desc>
            <strong>Я люблю дизайн</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile App</li>
            </ul>
          </Desc>
          <Desc>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Desc>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend разработчик
          </Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            accusamus illum tenetur, debitis libero quo!
          </Desc>
          <Desc>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase
              etc.
            </p>
          </Desc>
          <Desc>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Desc>
        </Main>
        <BigTitle top="-2%" right="5%" text="Skills"/>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
