import React from 'react';
// connect : pour avoir accès aux modules qui sont dans le reducer 
// connect suit le concept de high order component (partage d'information à un composant)
import { connect } from 'react-redux';
// Comme on a déjà les actions enregistrés dans courseActions on pourra factoriser notre code avec bindActionCreator
import { bindActionCreators } from 'redux';

// import de toutes les actions de courses dans l'objet courseActions
import * as CourseActions from '../../store/actions/course';

// quand on utilise la fonction connect() on a accès aussi à dispatch 
// qui nous permettra de dispatcher des actions à redux
// ces actions seront "entendus" par tous les reducers de l'application
const Sidebar = ({ modules, toggleLesson}) => (
    <aside>
    {modules.map(module => (
        <div key={module.id}>
            <strong>{module.title}</strong>
            <ul>
                {module.lessons.map(lesson => (
                    <li key={lesson.id}>
                    {lesson.title}
                    <button onClick={() => toggleLesson(module, lesson)}>
                    Selecionar
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    ))}
</aside>
);

// connect(state => ({ modules: state.course.modules })) (Sidebar);
const mapStateToProps = state => ({
    modules: state.course.modules
});

// courseActions = actions à dispatcher
// dispatch = action de dispatcher
const mapDispatchToProps = dispatch => 
   bindActionCreators(CourseActions, dispatch);


// modules: nom choisi pour la propriété qui va stocker le state de reducer 
// Sidebar devient le deuxième paramètre
export default connect(mapStateToProps, mapDispatchToProps) (Sidebar);