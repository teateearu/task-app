import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
  z-index: 1;
  background-color: white;
  width: 220px;
  box-shadow: 0 4px 8px 0 lightgrey;
`;
const Form = styled.form`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  margin: 0;
`;
const Title = styled.h3`
  color: #7E7E7E;
  font-size: 14px;
  padding: 16px;
`;
const Input = styled.input`
  padding: 8px;
  margin: 0 0 4px 16px;
  width: 170px;
  background-color: #FAFAFA;
  border: 1px solid lightgrey;
  border-radius: 4px;
  &::placeholder {
    color: lightgrey;
    font-style: italic;
  }
`;
const BigInput = styled.textarea`
  padding: 8px;
  margin-left: 16px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  width: 170px;
  background-color: #FAFAFA;
  &::placeholder {
    color: lightgrey;
    font-style: italic;
  }
`;
const Button = styled.button`
  padding: 8px;
  color: white;
  background-color: #00af81;
  margin: 16px;
  border-radius: 4px;
`;

export default class FormContainer extends React.Component {

  createNew = () => {
    // Eventually would add a new Task
    alert('Submitted');
  }
  render() {
    return (
      <Container>
        <Title>New project</Title>
        <Form onSubmit={this.createNew}>
          <Input placeholder="Project title" />
          <BigInput rows="7" placeholder="Project description" />
          <Button>Add project +</Button>
        </Form>
      </Container>
    );
  }
}
