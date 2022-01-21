import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";


const Box = styled(motion.div)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 25rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.4);

  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
    transition: all 0.3s ease;
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0%.5rem 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 600;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const HashTags = styled.div`
  padding-top: 0.5rem;
  margin-bottom: 5px;
`;

const Tag = styled.span`
  padding-right: 0.5rem;
`;

const Date = styled.span`
  padding: 1.5rem;
`;


const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.9,
    },
  },
};

const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;

  return (
      <Box
      variants={Item}
      initial="hidden" 
      animate="show"
      >
        <a href={link} target="_blank" rel="noreferrer">
          <Image img={imgSrc} />
        </a>
        <Title>{name}</Title>
        <HashTags>
          {tags.map((tag, id) => {
            return <Tag key={id}>#{tag}</Tag>;
          })}
        </HashTags>
        <Date>{date}</Date>
      </Box>

  );
};

export default BlogComponent;
