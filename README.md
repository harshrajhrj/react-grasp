# Learning React-router
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
* In *app.js*, we've imported `Routes` and `Route` from `react-router-dom` to use all the indivdual route.
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

`Server running at port 3000`