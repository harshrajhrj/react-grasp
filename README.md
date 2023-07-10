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
* After importing the *Navbar.js*, we've wrapped the `Navbar` component inside the the `App()` function and we've also added basic styling to the *Navbar* component<sup>[change](https://github.com/harshrajhrj/react-grasp/blob/f4c5273806766a9cbc212600498895b90b7a1e18/src/App.js#L10)</sup>.
## Navigating to the components using NavLink
* `NavLink` works same as `Link` component, additionally it appends `active` class to the current active link( `<a>` element ) which helps the user to know which link they're in currently. This is important with respect to user's point of view<sup>[change](https://github.com/harshrajhrj/react-grasp/blob/ccd1be5485cfff03dc4f0f882167ac765378369a/src/components/Navbar.js#L7)</sup>.
* We can style the `.active` class in two ways-
    + Using css
    + Using `style` prop in the `NavLink` component. While the link is active, then the 'rrd' adds `isActive : true` property to the component. And we can use this property to set the styles within the `Navbar()` component function using JavaScript<sup>[change](https://github.com/harshrajhrj/react-grasp/blob/f706fb175b01978fd742fe987e229b81f1db1c30/src/components/Navbar.js#L4)</sup>.
## Navigating to the components using useNavigate
* We can navigate to the components based on the events like form submission, onClick, etc using `useNavigate` component.
* An event can be like `Place an order` button click and the user will be navigated to `order summary` page<sup>[change](https://github.com/harshrajhrj/react-grasp/blob/839be61bc54e343d2ff6966749a6c6083d4d9b82/src/components/Home.js#L8)</sup>.
* We can also use `{replace : true}` property to remove the current page from stack after navigating to the `order-summary`. Changes reflect when we try to navigate back to `home`( home ) page. Then, there will be no `Home` page present as it was removed<sup>[change](https://github.com/harshrajhrj/react-grasp/blob/839be61bc54e343d2ff6966749a6c6083d4d9b82/src/components/OrderSummary.js#L8)</sup>.
* In `OrderSummary` component, we've used `navigate(-1)` which means there is a change in the history stack. It simply go back, one page behind.
## No match route
* If the given URLs doesn't have any corresponding component, then the NoMatch route is used.
* This can be achieved in given steps:
    1. Create a file `NoMatch.js` in `components` folder<sup>[change](https://github.com/harshrajhrj/react-grasp/blob/935ee74416446460035f79d09fd70a56ff044911/src/components/About.js#L1)</sup>.
    2. Import the `NoMatch` component in "App.js" and wrap the component under `<Route>` component.
    3. In `path` prop of `<Route>`, `*` means if no location/path matches, then the "NoMatch" path will be executed and therefore its component<sup>[change](https://github.com/harshrajhrj/react-grasp/blob/935ee74416446460035f79d09fd70a56ff044911/src/App.js#L20)</sup>.
## Nested routes
* Nested routes can be used to change a particular component keeping other components common in the current page itself. It is very powerful when the situation comes for handling many components for a single parent route.
* I'm using a new page "products" which further has two components "category" and "new products".
    * I created a `NavLink` to the `products` page in the `NavBar` component<sup>[change](https://github.com/harshrajhrj/react-grasp/blob/7fa92fdea25aa3a4a5e3a9d67dbd06f266f2aff8/src/components/Navbar.js#L15)</sup>.
    * Create a `Products.js` file<sup>[change](https://github.com/harshrajhrj/react-grasp/blob/7fa92fdea25aa3a4a5e3a9d67dbd06f266f2aff8/src/components/Products.js#L3)</sup>.
    * In the `products` component, wrap all the child components individually inside `Link` component of 'rrd'<sup>[change](https://github.com/harshrajhrj/react-grasp/blob/7fa92fdea25aa3a4a5e3a9d67dbd06f266f2aff8/src/components/Products.js#L10-L11)</sup>.
    * Create `Category.js` and `NewProduct.js` file.
    * Import the following components in `App.js`:
        * products
        * category
        * newproduct
    * Add the nested routing<sup>[change](https://github.com/harshrajhrj/react-grasp/blob/7fa92fdea25aa3a4a5e3a9d67dbd06f266f2aff8/src/App.js#L23)</sup>.
    * In `Products.js`, import `Outlet` component and add the `<Outlet />` component in the last of `Products` component<sup>[change](https://github.com/harshrajhrj/react-grasp/blob/7fa92fdea25aa3a4a5e3a9d67dbd06f266f2aff8/src/components/Products.js#L13)</sup>.
## Index route
* We can use index route(also a type of nested route) when we want any child component to be displayed with the parent component. Other child components can be displayed using the `Link` feature.
* In `App.js`, we've a index route which renders the child component `category` too with the `products` component which wasn't in earlier case. So, when we go to "newproduct", the child component changes to `NewProduct` which should work as earlier and so with "category" component<sup>[change](https://github.com/harshrajhrj/react-grasp/blob/37d1f56b596afc15d46ae1d18d9c14b7da0fba6a/src/App.js#L24)</sup>.
## Dynamic and nested route
* I've created dynamic routing for displaying multiple users details. I achieved this using `:userid` literal which is appended to the parent path in the `<Route>` component. When we hit the location as `/users/1`, then it'll show the detail for `user1` and similarly for others.
* I've also used nested dynamic route to change only specific component keeping the common component in place.