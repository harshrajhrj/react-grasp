# Learning React-router
In this [directory](https://github.com/harshrajhrj/react-grasp/tree/react-router), I learned important react feature which is `react-router-dom`.
## Things to be done before getting started
* In *index.js*, we've imported `BrowserRouter` from `react-router-dom` and wrapped entire `<App />` working tree inside *BrowserRouter* to get full features of *react-router-dom*.
* Syntax for import
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
* Syntax for import
```javascript
import { Routes, Route } from 'react-router-dom';
```
* In `App()` function, we can wrap all individual route inside `<Routes>` component.
```javascript
function App() {
    return (
        <>
            <Routes>
                <Route path='/'></Route>
                <Route path='/'></Route>
                <Route path='/'></Route>
            </Routes>
        </>
    )
};
```
## What I've done?
First we're gonna configure two routes namely-
+ `home` - Home page
+ `about` - About page

`Server running at port 3000`