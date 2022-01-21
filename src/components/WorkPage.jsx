import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import Card from "../subComponents/Card";
import { Work } from "../data/WorkData";
import { Clock } from "../components/AllSvg";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(7rem + 1.5vw);
  height: 40vh;
  display: flex;

  color: white;
`;

const Rotate = styled.div`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const Container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    const rotate = () => {
      ref.current.style.transform = `translateX(${parseInt(
        -window.pageYOffset
      )}px)`;

      yinyang.current.style.transform = `rotate(${parseInt(
        -window.pageYOffset
      )}deg)`;
    };

    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton theme="dark" />
        <Main ref={ref} variants={Container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <Clock width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
        <BigTitle text="ПРОЕКТЫ" top="5%" right="10%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
