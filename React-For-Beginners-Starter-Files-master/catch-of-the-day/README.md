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
Pro tips **
1) Writing JSX better than React.createElement
2) If you are returning to multiple line (tags) ---> return (something_here)

from return method, you can only return one element, so wrap them in a <div> XXX </div> !!!!
React 16 update: now its better to use <React.Fragment> XXX </React.Fragment> instead of <div> XXX </div>!!!

Lesson 5: Loading CSS into React Application

rather than writing a big CSS file, we can just import the CSS directly into a component that only relates to that component

import css file to our index.js , then it will apply to our entire application
under index.js ->   import './css/style.css';

Lesson 6: Creating application layout with components





