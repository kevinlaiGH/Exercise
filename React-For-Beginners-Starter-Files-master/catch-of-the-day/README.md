Lesson 3: Creating our 1st Component

Creating a class
every class needs at least 1 method inside, its usually render()
render determines what html do I put on the page/ what dom elements I render out to the page

1.  But to get it render OUT of the page, we need to import { render } from 'react-dom';
2.  Render the component & target that into your index.html: render(<StorePicker />, document.querySelector('#main'));
3.  after render, we must export the class

To make the components we just put them under src/component folder;
and when we want to use that component, we just need to import it from the path

Lesson 4: Writing HTML with JSX:
Pro tips \*\*

1.  Writing JSX better than React.createElement
2.  If you are returning to multiple line (tags) ---> return (something_here)

from return method, you can only return one element, so wrap them in a <div> XXX </div> !!!!
React 16 update: now its better to use <React.Fragment> XXX </React.Fragment> instead of <div> XXX </div>!!!

Lesson 5: Loading CSS into React Application

rather than writing a big CSS file, we can just import the CSS directly into a component that only relates to that component

import css file to our index.js , then it will apply to our entire application
under index.js -> import './css/style.css';

Lesson 6: Creating application layout with components

Lesson 7: Passing data with props

props are the way we get data into a component
we will have data that lives in our app.js
but how do we get our data frmo our app into our header component?
....or how do we access the data inside the header component to the outside?
This is why we need props!!!!!

######ANALOGY
props: props is how the data gets to where it needs to go (data's home), like a bus/car

when props is populated
props os like an object of data that goit passed in,
like an argument's object in a function

you can add some final properties in tagline -> <Header tagline="Fresh Seafood Market" age={50} />

{this.props.tagline} -> this is the component instance

.props is the object inside of the component (which contains all of our final properties, age, tagline ..etc)

state: where the data lives, data's home

Lesson 8: Stateless Functional Component

Originally the App.js file only have render method, we can change these components to stateless function.
Why? we want to have custom data in each component
What will be inside?
*static propTypes, state, life cyle methods (componentDidMount, componentWillUpdate, componentWillUnmount)
*custom methods: add fish, update fish, remove the fish, load samples, add to order

PRO TIP #######
When you have a function, there's no 'this'. That function will get one argument called 'props'

{this.props.tagline} -> {props.tagline}
