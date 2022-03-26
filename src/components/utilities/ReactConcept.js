import React from 'react';
import './ReactConcept.css'

const ReactConcept = () => {
    return (
        <div className='mainDiv'>
            <div className='half-width'>
            <h1>How React Works?</h1>
            <p>A React application is made up of multiple components,
                each component responsible for outputting a small,
                reusable piece of HTML code. The components are the heart
                of all React applications. These Components can be nested
                with other components to allow complex applications to be
                built of simple building blocks. ReactJS uses virtual DOM
                based mechanism to fill data in HTML DOM. The virtual DOM
                works fast as it only changes individual DOM elements instead
                of reloading complete DOM every time.To create React app, we
                write React components that correspond to various elements.
                We organize these components inside higher level components
                which define the application structure. 
            </p>
            </div>
            <div className='half-width'>
                <h1>Props VS State</h1>
                <p><strong>Props:</strong>
                    Props are read-only.Props are immutable.Props allow you to pass data from one component to other components as an argument.
                    Props can be accessed by the child component.Props are used to communicate between components.
                    Stateless component can have Props.	Props make components reusable.Props are external and controlled by whatever renders the component.
                </p>
                <p><strong>State:</strong>
                    State changes can be asynchronous.State is mutable.State holds information about the components.
                    State cannot be accessed by child components.States can be used for rendering dynamic changes with the component.
                    Stateless components cannot have State.State cannot make components reusable.The State is internal and
                    controlled by the React Component itself.
                </p>
            </div>
            


        </div>
    );
};

export default ReactConcept;