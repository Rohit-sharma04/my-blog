// import {Link} from "react-router-dom";
// import {useContext, useEffect} from "react";
// import {UserContext} from "./UserContext";

// export default function Header() {
//   const url=import.meta.env.VITE_BACKEND_URL;

//   const {setUserInfo,userInfo} = useContext(UserContext);
//   useEffect(() => {
//     fetch(url+'/profile', {
//       credentials: 'include',
//     }).then(response => {
//       response.json().then(userInfo => {
//         setUserInfo(userInfo);
//       });
//     });
//   }, []);

//   function logout() {
//     fetch(url+'/logout', {
//       credentials: 'include',
//       method: 'POST',
//     });
//     setUserInfo(null);
//   }

//   const username = userInfo?.username;

//   return (
//     <header>
//       <Link to="/" className="logo">MyBlog</Link>
//       <nav>
//         {username && (
//           <>
//             <Link to="/create">Create new post</Link>
//             <a onClick={logout}>Logout ({username})</a>
//           </>
//         )}
//         {!username && (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// }


import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import "./header.css";  // Import the CSS file
import logo from '../src/assets/blog-logo.png'
export default function Header() {
  const url = import.meta.env.VITE_BACKEND_URL;

  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch(url + '/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch(url + '/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
