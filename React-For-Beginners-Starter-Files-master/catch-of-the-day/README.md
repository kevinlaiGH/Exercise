Lesson 3:  Creating our 1st Component

Creating a class
every class needs at least 1 method inside, its usually render()
render determines what html do I put on the page/ what dom elements I render out to the page
1) But to get it render OUT of the page, we need to import { render } from 'react-dom';
2) Render the component & target that into your index.html: render(<StorePicker />, document.querySelector('#main'));
3) after render, we must export the class

To make the components we just put them under src/component folder;
and when we want to use that component, we just need to import it from the path

Lesson 4:  Writing HTML with JSX:

React.createElement is better than writing JSX

