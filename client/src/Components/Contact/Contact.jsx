import React from "react";
import "./contact.scss";
import Button from '@mui/material/Button';
import LightSpeed from 'react-reveal/LightSpeed';

function Contact() {
  return (
    <LightSpeed>
      <div className="form-main-container" id="Contact">
        <div className="form-container">
          <section className="row">
            <section className="contactsubmit">
              <h4 className="text-center">Contact</h4>
              <hr />
              <form action="mailto:vsznitowski@gmail.com" method="post">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder="Full Name"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control input- text-center"
                    placeholder="youremail@youremail.com"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>

                  <textarea
                    className="form-control"
                    rows="3"
                    name="message"
                  ></textarea>
                </div>

                <Button
                  color="info"
                  outline variant="contained"
                  type="submit"
                  value="Submit"
                >
                  Submit
                </Button>
              </form>
            </section>
          </section>
        </div>
      </div>
    </LightSpeed>
  );
}
export default Contact;