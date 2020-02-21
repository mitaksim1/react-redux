// C'est dans le store qui va être stocké la plupart des informations de notre appli
import { createStore } from 'redux';

// Initialisation de state initial avec reducer
function reducer() {
    return [
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
    ];

}


// appel à la fonction createStore()
// reducer() : paramètre obligatoire de createStore qui va initialiser notre state
const store = createStore(reducer);

export default store;