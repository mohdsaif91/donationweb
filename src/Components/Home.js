import React from "react";

import "./Home.scss";

function Home() {
  return (
    <>
      <div className="contents">
        <div className="content">
          <h1>Donation of this week</h1>
          <p>1552₹</p>
          <button>Donate More</button>
        </div>
        <div className="content">
          <h1>Donation of this Month</h1>

          <p>22722₹</p>

          <button>Donate More</button>
        </div>

        <div className="content">
          <h1>Donation of this Year</h1>

          <p>490000₹</p>

          <button>Donate More</button>
        </div>
      </div>
    </>
  );
}

export default Home;
