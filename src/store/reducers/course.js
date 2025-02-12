// Initialisation de state initial avec reducer
const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        { 
            id: 1, title: 'Start avec React', lessons: [
            {id: 1, title: 'Cours 1'},
            {id: 2, title: 'Cours 2'}
            ],
        },
        {
        id: 2, title: 'On apprend Redux', lessons: [
            {id: 3, title: 'Cours 3'},
            {id: 4, title: 'Cours 4'}
            ],
        }
    ]
}

export default function course(state = INITIAL_STATE, action) {
    console.log(action);
    if (action.type === 'TOGGLE_LESSON') {
        return { 
            ...state, 
            activeLesson: action.lesson, 
            activeModule: action.module 
        };
    }
    return state;
}
