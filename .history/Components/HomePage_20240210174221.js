import React from "react";
import styles from "./Navbar.module.css";
function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
    </div>
  );
}

// <div class="container text-center">
//   <div class="row">
//     <div className="left">col-sm-8</div>
//     <div class="right">col-sm-4</div>
//   </div>

//   <div class="row">
//     <div class="col-sm">col-sm</div>
//     <div class="col-sm">col-sm</div>
//     <div class="col-sm">col-sm</div>
//   </div>
// </div>

export default HomePage;
