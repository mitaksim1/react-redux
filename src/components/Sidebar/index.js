import React from 'react';
// connect : pour avoir accès aux modules qui sont dans le reducer 
// connect suit le concept de high order component (partage d'information à un composant)
import { connect } from 'react-redux';

function toggleLesson(module, lesson) {
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson,
    };
}
// quand on utilise la fonction connect() on a accès aussi à dispatch 
// qui nous permettra de dispatcher des actions à redux
// ces actions seront "entendus" par tous les reducers de l'application
const Sidebar = ({ modules, dispatch }) => (
    <aside>
    {modules.map(module => (
        <div key={module.id}>
            <strong>{module.title}</strong>
            <ul>
                {module.lessons.map(lesson => (
                    <li key={lesson.id}>
                    {lesson.title}
                    <button onClick={() => dispatch(toggleLesson(module, lesson))}>
                    Selecionar
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    ))}
</aside>
);

// modules: nom choisi pour la propriété qui va stocker le state de reducer 
// Sidebar devient le deuxième paramètre
export default connect(state => ({ modules: state.modules })) (Sidebar);