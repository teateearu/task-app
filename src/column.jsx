import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Wrapper = styled.div`
  width: 100vh;
`;
const Container = styled.div`
  background-color: #F5F5F5;
  min-height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #eaeaea;
  &:last-child {
    border-right: 1px solid #eaeaea;
  }
`;
const Title = styled.h3`
  color: #7E7E7E;
  font-size: 14px;
  padding: 16px;
  text-align: center;
  margin: 4px 0 2px 0;
  box-shadow: 0 4px 2px -2px #dadada;
  z-index: 1;
`;
const TaskList = styled.div`
  color: #7E7E7E;
  padding: 8px;
  transition: background-color 0.2s ease;
  background: ${props => (props.isDraggingOver ? '#e5fff8' : '#F5F5F5')};
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>{this.props.column.title}</Title>
        <Container>
          <Droppable droppableId={this.props.column.id}>
            {(provided, snapshot) => (
              <TaskList
                innerRef={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {this.props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      </Wrapper>
    );
  }
}
