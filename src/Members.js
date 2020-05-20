import React from 'react'

function Members(props) {
    const { information } = props
    if (!information) {
        return <h3>Loading Members Details...</h3>
    }
    return (
        <div className='information-box'>
            <h2>{information.name}</h2>
            <p>Email: {information.email}</p>
            <p>Role: {information.role}</p>
        </div>
    )
}
export default Members;