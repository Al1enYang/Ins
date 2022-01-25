import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Link,
  } from "react-router-dom";

  import Login from './pages/ins/Login';
  import Signup from './pages/ins/Signup';
  import Main from './pages/ins/Main';
  import Profile from "./pages/ins/Profile";


  function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="main" element={<Main />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default Router