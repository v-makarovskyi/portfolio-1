import React from "react";
import styled from "styled-components";
import { Github } from "../components/AllSvg";
import { motion } from "framer-motion";


const Box = styled(motion.li)`
  width: 16vw;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
    font-size: calc(1em + 0.5vw);
`;

const Description = styled.p`
    font-size: calc(0.8em + 0.3vw);
    font-family: 'Karla', sans-serif;
    font-weight: 500;
`

const Tags = styled.div`
   border-top: 2px solid ${props => props.theme.body};
   padding-top: 0.5rem;
   display: flex;
   flex-wrap: wrap;
   ${Box}:hover & {
    border-top: 2px solid ${props => props.theme.text}; 
   }
`

const Tag = styled.span`
  margin-right: 0.8rem;  
  font-size: calc(0.8em + 0.3vw);
`
const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Demo = styled.div`
    width: 150px;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    padding: 10px;
    border-radius: 0 0 0 30px;
    font-size: calc(1em + 0.5vw);
    display: flex;
    justify-content: center;

    ${Box}:hover & {
    background-color: 2px solid ${props => props.theme.text}; 
    color: 2px solid ${props => props.theme.body};
    }

`

const Item = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

const Card = (props) => {
  const { id, name, description, tags, demo} = props.data;
  
  return (
    <Box key={id} variants={Item} initial="hidden" animate="show">
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
          {
              tags.map((t, id) => (
                  <Tag key={id}>#{t}</Tag>
              ))
          }
      </Tags>
      <Footer>
      <a href={demo} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
        <Demo>Смотреть</Demo> 
        </a>
        <Github width={30} height={30}/>
       
      </Footer>
    </Box>
  )
};

export default Card;
