import React from "react";
import styles from "./Navbar.module.css";
function HomePage() {
  return (
    <div class="container text-center">
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className="container">
        <div className={styles.rightContent}>
          <div className="row">
            <div className={`${styles.profile_nav_css} sticky-top`}>

            </div>

          </div>

          
        </div>
        </div>
      </div>
      
    </div>
    </div>
  );
}


export default HomePage;
