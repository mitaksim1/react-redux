import React, { Component } from 'react';

export default class Sidebar extends Component {
    state = {
        modules: [
            { 
                id: 1, title: 'Start avec React', lessons: [
                {id: 1, title: 'Cours 1'},
                {id: 2, title: 'Cours 2'},
                ],
            },
            {
            id: 2, title: 'On apprend Redux', lessons: [
                {id: 3, title: 'Cours 3'},
                {id: 4, title: 'Cours 4'},
                ],
            }   
        ]
    };

    render() {

        const { modules } = this.state;
        return (
            <aside>
                {modules.map(module => (
                    <div key={module.id}>
                        <strong>{module.title}</strong>
                        <ul>
                            {module.lessons.map(lesson => (
                                <li key={lesson.id}>{lesson.title}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </aside>
        );
    }
}