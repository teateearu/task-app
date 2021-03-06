const initialData = {
  tasks: {
    'task-1': { id: 'task-1', title: 'Item title', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget' },
    'task-2': { id: 'task-2', title: 'Item title', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget' },
    'task-3': { id: 'task-3', title: 'Item title', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget' },
    'task-4': { id: 'task-4', title: 'Item title', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget' },
    'task-5': { id: 'task-5', title: 'Item title', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget' },
    'task-6': { id: 'task-6', title: 'Item title', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget' },
    'task-7': { id: 'task-7', title: 'Item title', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget' },
    'task-8': { id: 'task-8', title: 'Item title', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Flowcharts',
      taskIds: ['task-1'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Wireframes',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Prototype',
      taskIds: ['task-2', 'task-3'],
    },
    'column-4': {
      id: 'column-4',
      title: 'Development',
      taskIds: ['task-4', 'task-5', 'task-6'],
    },
    'column-5': {
      id: 'column-5',
      title: 'Test',
      taskIds: [],
    },
    'column-6': {
      id: 'column-6',
      title: 'Launch',
      taskIds: ['task-7', 'task-8'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6'],
};

export default initialData;
