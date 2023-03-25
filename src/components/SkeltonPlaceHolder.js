import React from "react";
import Placeholder from "react-bootstrap/Placeholder";

const SkeltonPlaceHolder = () => {
  return (
    <div>
      <Placeholder as="p" animation="glow">
        <Placeholder xs={3} />
      </Placeholder>
      <Placeholder as="p" animation="glow">
        <Placeholder xs={9} />
      </Placeholder>
      <Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
    </div>
  );
};

export default SkeltonPlaceHolder;
