import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { Blogs } from '../data/BlogData'
import BlogComponent from './BlogComponent'
import AnchorComponent from '../subComponents/AnchorComponent'
import BigTitle from '../subComponents/BigTitle'
import { motion } from 'framer-motion'

const MainContainer = styled(motion.div)`

`

const Container = styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
    width: 100%;
    height: auto;
    position: relative;
    padding: 2rem;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
`

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 1
        }
    }
}

const BlogPage = () => {

    const [numbers, setNumbers] = useState(0)

    useEffect(() => {
        let num = (window.innerHeight-70)/30
        setNumbers(parseInt(num))
    }, [])


    return (
        <MainContainer
        variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity: 0, transition: {duration: 0.5}
        }}
        >
            <Container>
                <LogoComponent />
                <PowerButton />
                <SocialIcons />
                <AnchorComponent numbers={numbers}/>
                <Center>
                    <Grid>
                        {
                            Blogs.map((blog) => {
                                return <BlogComponent blog={blog} key={blog.id}/>
                            })
                        }
                    </Grid>
                </Center>
                <BigTitle text="Блоги" top="7%" left="7%"/>
            </Container>
        </MainContainer>
    )
}

export default BlogPage
