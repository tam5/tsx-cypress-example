import React from 'react';
import 'cypress-react-unit-test';
import ReactDOM from 'react-dom';

Cypress.on('window:load', win => {
    // @ts-ignore
    win.ReactDOM = window.ReactDOM || win.ReactDOM;
});

function setup(win: any) {
    if (win.ReactDOM !== ReactDOM) {
        win.ReactDOM = ReactDOM;
    }
}

beforeEach(() => setup(window))

function MyComponent() {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        console.log('clicking works');
        setCount(count + 1);
    };

    return <div onClick={handleClick}>Count is: {count}</div>
}

describe('example', () => {
    it('should pass', () => {
        cy.mount(<MyComponent />)

        cy.contains('Count').click();
    });
});
