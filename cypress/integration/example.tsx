import React from 'react';
import 'cypress-react-unit-test';

function MyComponent() {
    return <div>t</div>
}

describe('example', () => {
    it('should pass', () => {
        cy.mount(<MyComponent />)
    });
});
