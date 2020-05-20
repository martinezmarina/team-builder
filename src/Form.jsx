import React from "react";
import styled from "styled-components";

function Form(props) {
  const { values, onInputChange, onSubmit } = props;

  const StyledForm = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Pangolin&display=swap");
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #6c978c;
    border-radius: 10px;
    width: 80vw;
    margin: 5vh 10vw;
    background-color: #6c978c;
    .form-submit {
      font-family: "Open Sans", sans-serif;
      margin: 3%;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 35%;
      h2 {
        padding: 0 2%;
      }
      button {
        width: 25%;
        padding: 2%;
        border: 1px solid #282c34;
        border-radius: 5px;
        background-color: #282c34;
        color: #f2e9dd;
        &:hover {
          background-color: #264045;
          border-color: #264045;
        }
      }
    }
    .form-inputs {
      display: flex;
      flex-direction: column;
      width: 25vw;
      text-align: right;
      padding: 3% 5%;
      h4 {
        text-align: center;
      }

      select,
      input {
        margin: 2%;
        padding: 1%;
        border: 1px solid #282c34;
        background-color: #282c34;
        color: #f2e9dd;
        &:hover {
          background-color: #264045;
          border-color: #264045;
        }
      }
    }
  `;

  return (
    <StyledForm className="form-box" onSubmit={onSubmit}>
      <div className="form-submit">
        <h2>Add a Team Member</h2>
        <button>Submit</button>
      </div>
      <div className="form-inputs">
        <h4>Member Information</h4>
        <label>
          Name:&nbsp;
          <input
            type="text"
            placeholder="Name"
            maxLength="30"
            name="name"
            value={values.name}
            onChange={onInputChange}
          />
        </label>
        <label>
          Email:&nbsp;
          <input
            type="text"
            placeholder="Email"
            maxLength="40"
            name="email"
            value={values.email}
            onChange={onInputChange}
          />
        </label>
        <label>
          Role:&nbsp;
          <select name="role" value={values.role} onChange={onInputChange}>
            <option value="">Select a Role</option>
            <option value="backendEngineer">Backend Engineer</option>
            <option value="frontendEngineer">Frontend Engineer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
        </label>
      </div>
    </StyledForm>
  );
}

export default Form;
