import React, { memo } from "react";
import RightHeaderSide from "./RightHeaderSide";
import LeftHeaderSide from "./LeftHeaderSide";
import MiddleHeaderSide from "./MiddleHeaderSide";
import { Col, Row } from "react-bootstrap";
const Header = memo(function ({ programs, projects }) {
  return (
    <Row>
      <Col xs={12} sm={12}>
        <header>
          <LeftHeaderSide />
          <MiddleHeaderSide programs={programs} projects={projects} />
          <RightHeaderSide programs={programs} projects={projects} />
        </header>
      </Col>
    </Row>
  );
});

export default Header;
