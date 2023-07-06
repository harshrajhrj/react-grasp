# Learning React-router<sup>[Source](https://reactrouter.com/en/main)</sup>
In this [directory](https://github.com/harshrajhrj/react-grasp/tree/react-router), I learned important react feature which is `react-router-dom`.
## Things to be done before getting started
* In *index.js*, we've imported `BrowserRouter` from `react-router-dom` and wrapped entire `<App />` working tree inside *BrowserRouter* component to get full features of *react-router-dom*.
* Syntax for import and BrowserRouter
```javascript
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```
* In *App.js*, we've imported `Routes` and `Route` from `react-router-dom` to use all the indivdual route.
* In `App()` function, we can wrap all individual route inside `<Routes>` component.
* Syntax for import and Route
```javascript
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
            </Routes>
        </>
    )
};
```
* In the above code snippet, using props "path" and "element" we've rendered the following components
    + `<Home />` path `/` is the url to the element `<Home />`
    + `<Element />` path `about` is the url to the element `<About />`
## What I've done?
First we're gonna configure two routes namely-
+ `home` - Home page
+ `about` - About page
## Navigating to the components using Links
In this step, we've created a file *Navbar.js* and inside the file we've imported `Links` component of 'rrd' to navigate between the URLs.
* Syntax for import and basic `Navbar()` function
```javascript
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
}
```
* After importing the *Navbar.js*, we've wrapped the `Navbar` component inside the the `App()` function and we've also added basic styling to the *Navbar* component[^[change](https://github.com/harshrajhrj/react-grasp/blob/f4c5273806766a9cbc212600498895b90b7a1e18/src/App.js#L10)].