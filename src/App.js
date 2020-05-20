import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import styled from 'styled-components'
import Form from './Form'
import Members from './Members'

const initialTeamList = [
  {
    id: uuid(),
    name: "Marina",
    email: "marinasemail@email.com",
    role: "Manager",
  }
];

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}

const StyledApp = styled.div`
background-color:red;
`

function App() {
  const[teamMembers, setTeamMembers] = useState(initialTeamList);
  const[formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setFormValues({...formValues, [name]: value });
  }
  const onSubmit = (event) => {
    event.preventDefault();

    if (
      !formValues.name.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim() 
    ) {
      return;
    }
    const newMember = {...formValues, id: uuid()}
    setTeamMembers([newMember, ...teamMembers])
    setFormValues(initialFormValues)
  }

  return (
    <StyledApp className="App">
      <header className="App-header">
        <h1>Project Team Members</h1>
      </header>
      <Form 
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      />
      {teamMembers.map((member) => {
        return <Members key={member.id} information={member} />
      })}
    </StyledApp>
  );
}

export default App;
