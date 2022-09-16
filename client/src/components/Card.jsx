import styled from 'styled-components'

const StyledCard = styled.div`
width: ${({width}) => width};
height: ${({height}) => height};
background: ${({backGround}) => backGround};
border: ${({border}) => border};
color: ${({color}) => color};
display: flex;
align-items: ${({align}) => align};
justify-content: ${({justify}) => justify};
flex-direction: ${({flexd}) => flexd};
border-radius: 10px;
`

const Card = ({backGround, width, height, color, border, flexd, children, justify, align}) => {
    return (<StyledCard  align={align} backGround={backGround} width={width} height={height} color={color} flexd={flexd} border={border} justify={justify}>
        {children}
    </StyledCard>
    )
}

export default Card