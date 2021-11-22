
import styled from 'styled-components/macro';
import {keyframes} from 'styled-components';

function TitleBox () {
    return (
    <Wrapper>
        <Title> Hello world</Title>
        <SubTitle>It's me!</SubTitle>
    </Wrapper> 
    )
}

export default TitleBox;

const romoveInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }`

const romoveInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }`

const Title = styled.h1`
    color: white;
    display: inline-block;
    animation: ${romoveInLeft} 1s ease-out;
`
const SubTitle = styled.h2`
    color: white;
    display: inline-block;
    animation: ${romoveInRight} 1s ease-out;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: green;
height: 40%;
`
