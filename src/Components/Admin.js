// import React from "react";

// import { Link } from "react-router-dom";

// export default function Admin() {
//   return (
//     <div>
//       <h1>This is an Admin page.</h1>
//       <Link to="/logout">Logout</Link>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h1>This is an Admin page.</h1>
      <Link to="/logout">Logout</Link>
    </div>
  );
}

export default Admin;
