import React from 'react'
import styled from 'styled-components'
import Particles from "react-tsparticles"

import configDark from '../particles/particles.config-dark.json'
import configLight from '../particles/particles.config-light.json'

const Box = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 0;
`

const ParticleComponent = (props) => {
    return (
        <Box>
            <Particles styles={{position:'absolut', top:0}} options={props.theme === 'light' ? configLight : configDark}/>
        </Box>
    )
}

export default ParticleComponent
