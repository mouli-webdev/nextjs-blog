import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./Home.module.css";
import Form from "react-bootstrap/Form";
function HomePage() {
  return (
    <div class="container">
      <div className={styles.container}>
        <div className={styles.left}>
          <Card className={`${styles.card_css}  `} style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>POST YOUR PROPERTY FOR FREE</Card.Title>
              <Card.Text>
                Add Basic Details
                <p className="fw-bold mt-2">Looking For..........</p>
              </Card.Text>
              <button className={`${styles.button_css} px-4 me-3 `}>
                Sell
              </button>
              <button className={`${styles.button_css} px-4 me-3 `}>
                Rent
              </button>
              <p className="fw-bold mt-2">Property Type</p>
              <button className={`${styles.button_css} px-4 me-3 `}>
                Residential
              </button>
              <button className={`${styles.button_css} px-4 me-3 `}>
                Commercial
              </button>
              <button className={`${styles.button_css} px-2 me-2 mt-2 `}>
                Flat/Apartment
              </button>
              <button className={`${styles.button_css} px-2 me-2 mt-2`}>
                Villa
              </button>
              <button className={`${styles.button_css} px-2 me-2 mt-2 `}>
                PLot
              </button>
              <button className={`${styles.button_css} px-2 me-2 mt-2 `}>
                Independent HOuse
              </button>
              <button className={`${styles.button_css} px-2 me-2 mt-2 `}>
                Builder Floor
              </button>
              <p className="fm-1 mt-2">Add Your Contact Detail</p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>
                <p className="fs-6"> Are you a Registered User?</p>

                <Button
                  className={`${styles.submit_button_css} px-2 me-2 mt-2 `}
                  variant="primary"
                  type="submit"
                >
                  Start Now
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
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
                  <li>Advertise For FREE</li>
                  <li>Sell 10 X faster</li>
                  <li>Connect with genuine buyer</li>
                  <li>Get unlimited enquiries</li>
                </ul>
                <img
                  src="https://cdni.iconscout.com/illustration/premium/preview/girl-working-on-computer-5364524-4487826.png?f=webp&h=700"
                  class="Dt3KRw ms-4 rounded mx-auto d-block mt-5"
                  width="230"
                  height="200"
                  alt="Real Estate Video Tour Abstract Concept Vector Illustration."
                  draggable="false"
                ></img>
                <div class="container" >
                <div className={styles.container}>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <label>Step by Step Guide for Free Property Listing </label>
      </div>
    </div>
  );
}

export default HomePage;
