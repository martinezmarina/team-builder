import React from 'react'

function Form(props){
    const{
    values,
    onInputChange,
    onSubmit,
    } = props

    return(
        <form className='form-box' onSubmit={onSubmit}>
            <div className='form-submit'>
                <h2>Add a Team Member</h2>
                <button>Submit</button>
            </div>
            <div className='form-inputs'>
                <h4>Member Information</h4>
                <label>Name:&nbsp;
                <input 
                type='text'
                placeholder='Name'
                maxLength='30'
                name='name'
                value={values.name}
                onChange={onInputChange}
                />
                </label>
                <label>Email:&nbsp;
                    <input 
                    type='text'
                    placeholder='Email'
                    maxLength='40'
                    name='email'
                    value={values.email}
                    onChange={onInputChange}
                    />
                </label>
                <label>Role:&nbsp;
                    <select name='role' value={values.role} onChange={onInputChange}>
                        <option value=''>Select a Role</option>
                        <option value='backendEngineer'>Backend Engineer</option>
                        <option value='frontendEngineer'>Frontend Engineer</option>
                        <option value='designer'>Designer</option>
                        <option value='manager'>Manager</option>
                    </select>
                </label>
            </div>
        </form>
    )
}


export default Form;