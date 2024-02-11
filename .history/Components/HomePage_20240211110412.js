import React from "react";
import styles from "./Home.module.css";
function HomePage() {
  return (
    <div class="container">
      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className="container">
            <div className={styles.rightContent}>
              <div className="row ms-4">
                <div
                  className={`${styles.profile_nav_css} col-md-7 mt-5 justify-content-left fw-bold fs-5 `}
                >
                  <label>Post property Ad to sell or rent online for</label>
                  
                </div>

                <div
                  className={`${styles.profile_nav_css} col-md-5 mt-5  fw-bold fs-1 fst-italic`}
                >
                  <label>FREE</label>
                </div>
              </div>
              <div className="mt-4 ms-4">
              <ul>
                    <li>
                    Advertise For FREE
                    </li>
                    <li>
                    Sell 10 X faster
                    </li>
                    <li>
                    Connect with genuine buyer
                    </li>
                    <li>
                    Get unlimited enquiries
                    </li>
                  </ul>
                  <img src="blob:https://www.canva.com/924a834e-8e9f-48de-bd35-539cd02642fa" class="Dt3KRw" width="800" height="716" alt="Real Estate Video Tour Abstract Concept Vector Illustration." draggable="false"></img>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
