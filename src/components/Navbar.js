import React from 'react'

export default function Navbar() {
  return (
//     <div style={{marginTop : "2rem", color:"black"}}>
//      <ul className="nav  justify-content-end">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">HOME</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             WHAT WE DO
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="/">Item 1</a></li>
//             <li><a className="dropdown-item" href="/">Item 2</a></li>
//           </ul>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             HIRE EXPERTS
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="/">Item 1</a></li>
//             <li><a className="dropdown-item" href="/">Item 2</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//             <a className="nav-link" href="/">COMPANY</a>
//         </li>
//         <li className="nav-item">
//             <a className="nav-link" href="/">SAY HELLO!</a>
//         </li>

//         <div className="pos-f-t">
//            <div className="collapse" id="navbarToggleExternalContent">
//                 <div className="bg-dark p-4">
//                   <h4 className="text-white">Collapsed content</h4>
//                     <span className="text-muted">Toggleable via the navbar brand.</span>
//                 </div>
//             </div>
//         <nav className="navbar navbar-dark bg-dark">
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//         </nav>
// </div>

//       </ul>
//    </div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="/">Navbar</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <a className="nav-link" href="/">Home</a>
    </li>
    
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="/">Action</a>
        <a className="dropdown-item" href="/">Another action</a>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">COMPANY</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">SAY HELLO</a>
    </li>
  </ul>
  {/* <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form> */}
</div>
</nav>

  )
}
