import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
  &:first-child {
    margin-left: 100px;
  }
  &:last-child {
    margin-right: 100px;
  }
  background-color: #F5F5F5;
  width: 220px;
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
  margin: 4px 0 4px 0;
  box-shadow: 0 4px 2px -2px #dadada;
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
      <Container>
        <Title>{this.props.column.title}</Title>
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
    );
  }
}
