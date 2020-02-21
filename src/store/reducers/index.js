// Utile quand on a plusieurs reducers dans l'application
import { combineReducers } from 'redux';

import course from './course';

// A cette endroit on importe tous les reducers que l'on a
export default combineReducers({
    course,
});

// Ce que changerai si on avait d'autres reducers c'est qu'on regrouperait tous les objets dans le reducer concerné
// ex.: { 
    // course: { modules: [], activeLesson: {}, activeModule: {} };
    // user: { name: "", avatar: ""}
// }