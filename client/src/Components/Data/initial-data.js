const initialData = {
    tasks: {
        'task-1': {id:"task-1", content: 'Take out the garbage'},
        'task-2': {id:"task-2", content: 'Watch TV'},
        'task-3': {id:"task-3", content: 'Take dog on a walk'},
        'task-4': {id:"task-4", content: 'Clean Bathroom'},
        'task-5': {id:"task-5", content: 'Something'},
        'task-6': {id:"task-6", content: 'Something'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: "to-do",
            taskIds: ["task-1", "task-2", "task-3", "task-4","task-5","task-6"]
        },  
        'column-2': {
            id: 'column-2',
            title: "In Progress",
            taskIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Completed',
            taskIds:[]
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
}
export default initialData