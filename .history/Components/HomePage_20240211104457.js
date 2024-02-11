import React from "react";
import styles from "./Home.module.css";
function HomePage() {
  return (
    <div class="container text-center">
      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className="container">
            <div className={styles.rightContent}>
              <div className="row">
                <div className={`${styles.profile_nav_css} col-md-7 mt`}>
                  <label>Post property Ad to sell or rent online for</label>
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
