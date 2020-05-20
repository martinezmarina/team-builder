import React from 'react'
import styled from "styled-components";

const StyledMemberCard = styled.div`
border: 1px solid red;
display: flex;
flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    border: 1px solid #a9743c;
    border-radius: 10px;
    width: 50vw;
    margin: 5vh 25vw;
    background-color: #a9743c;
    h2, p{
        padding: 0 9%;

    }
`

function Members(props) {
    const { information } = props
    if (!information) {
        return <h3>Loading Members Details...</h3>
    }
    return (
        <StyledMemberCard className='information-box'>
            <h2>{information.name}</h2>
            <p>Email: {information.email}</p>
            <p>Role: {information.role}</p>
        </StyledMemberCard>
    )
}
export default Members;