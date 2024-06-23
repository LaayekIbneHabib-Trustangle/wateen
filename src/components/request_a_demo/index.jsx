import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "./style";
import { StandardButton } from "..";

const RequestADemo = () => {
  return (
    <>
      <Card>
        <div>
          <h2>Join Us Today!</h2>
          <p>
          on this exciting journey and revolutionize your B2B experience today!
          </p>
        </div>
        <div>
          <NavLink to="/lets-talk">
            <StandardButton
              width="18rem"
              borderRadius="1rem"
              name="Talk to an Expert"
            />
          </NavLink>
        </div>
      </Card>
    </>
  );
};

export default RequestADemo;
