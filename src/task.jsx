import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border-radius: 4px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  box-shadow: 0 4px 8px 0 lightgrey;
`;

const Title = styled.div`
  padding: 10px;
  border-radius: 4px 4px 0px 0px;
  color: white;
  background-color: #00af81;
  font-size: 12px;
`;

const Content = styled.div`
  padding: 10px 10px 16px 10px;
  border-radius: 0px 0px 4px 4px;
  transition: background-color 0.2s ease;
  background: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
`;

const Button = styled.button`
  float: right;
  background-color: #00af81;
  border: none;
  color: white;
`;

export default class Task extends React.Component {
  state = { showing: true };

  render() {
    const { showing } = this.state;

    return (
      <div>
        { showing ?
          <Draggable draggableId={this.props.task.id} index={this.props.index}>
          {(provided, snapshot) => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              innerRef={provided.innerRef}
              isDragging={snapshot.isDragging}
            >
              <Title>{this.props.task.title}
                <Button onClick={() => this.setState({ showing: !showing })}>x</Button>
              </Title>
              <Content>{this.props.task.content}</Content>
            </Container>
          )}
          </Draggable>
          : null
        }
      </div>
    );
  }
}
