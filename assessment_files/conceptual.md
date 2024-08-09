### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  - React is a Javascript library used to build front end compenents of an application

- What is Babel?
  - Babel is a Javascript compiler that translates things into Javascript

- What is JSX?
  - JSX stands for JavaScript XML and is like an extension to JavaScript

- How is a Component created in React?
  - Components are similar to functions and created like a function but return HTML to be rendered.

- What are some difference between state and props?
  - props are things that are passed between components and immutable while state is used to preserve values and is mutable.

- What does "downward data flow" refer to in React?
  - downward data flow is data or functions being passed down from a parent component to a child.

- What is a controlled component?
  - controlled components are form elements that are managed by React state.  The values of the form elements are set and updated by React state and a single source of truth.

- What is an uncontrolled component?
  - uncontrolled components manage state internally rather than through React state

- What is the purpose of the `key` prop when rendering a list of components?
  - the key prop is used to identify items so you can track what has been added, removed or modified.  This should be a unique value.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  - While an array index might be unique on the intial load of an app, if something is added, removed or moved in the array then you won't know where something is.

- Describe useEffect.  What use cases is it used for in React components?
  - useEffect is used to perform side actions.  Examples are fetching data, update to the DOM or a timer.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  - useRef will persist a value between renders.  When you change this value it will no re-render.

- When would you use a ref? When wouldn't you use one?
  - you would use a ref when you want to update the DOM without re-rendering or tracking a state change.  If you need to re-render then you should use useState

- What is a custom hook in React? When would you want to write one?
  - a custom hook is similar to a function that returns an array containing the value and a function.  These can be used to replace code that is replicated between components.
