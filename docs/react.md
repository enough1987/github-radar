
### router-router-v4

- ComponentWillReceiveProps

# Q&A:

> <i>public class fields syntax</i>:

```javascript
    handleClick = e => this.setState({[e.target.id]: e.target.value})
``` 

> refs
The ref is used to return a reference to the element. They should be avoided in most cases.
`callback refs`:
```javascript
    <input ref={node => this.node = node} onChange={} value={}>
    this.node.scrollIntoView()
```

> What are portals in React?

Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

```javascript
ReactDOM.createPortal(child, container)
```
The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.

> What is React Fiber?

`Fiber` is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.
Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

> What are controlled components?

A component that controls the input elements within the forms on subsequent user input is called `Controlled Component`, i.e, every state mutation will have an associated handler function.
For example, to write all the names in uppercase letters, we use handleChange as below,
```javascript
handleChange(event) {
  this.setState({value: event.target.value.toUpperCase()})
}
```

- uncontrolled components: `ref`

> What are the different ways to write mapDispatchToProps()?

There are a few ways of binding action creators to dispatch() in mapDispatchToProps(). Below are the possible options:

```javascript
const mapDispatchToProps = (dispatch) => ({
 action: () => dispatch(action())
})

const mapDispatchToProps = (dispatch) => ({
 action: bindActionCreators(action, dispatch)
})
node
const mapDispatchToProps = { action }
```

> How to structure Redux top level directories?

Most of the applications has several top-level directories as below:

- `Components`: Used for dumb components unaware of Redux.
- `Containers`: Used for smart components connected to Redux.
- `Actions`: Used for all action creators, where file names correspond to part of the app.
- `Reducers`: Used for all reducers, where files name correspond to state key.
- `Store`: Used for store initialization.

This structure works well for small and medium size apps.

> What are Redux selectors and why to use them?

Selectors are functions that take Redux state as an argument and return some data to pass to the component.
For example, to get user details from the state:
```javascript
const getUserData = state => state.user.data
```

> How `Relay` is different from Redux?

`Relay` is similar to Redux in that they both use a single store. The main difference is that `Relay` only manages state originated from the server, and all access to the state is used via `GraphQL queries` (for reading data) and `mutations` (for changing data). `Relay` caches the data for you and optimizes data fetching for you, by fetching only changed data and nothing more.


![React 16.3+ Phases (or an interactive version)](../_img1/phases16.3.jpg)

![<Recat 16.3](../_img1/phases.png)