import AosContainer from "../common/aos/Aos";
import NavItems from "../common/navs/NavItems";
import { Col } from "react-bootstrap";

function FooterPageLinks({ title, links }) {
  return (
    <Col xs={11} sm={11} md={4}>
      <AosContainer data-aos="zoom-in">
        <p className="footer_page-name">{title}</p>
      </AosContainer>
      <NavItems links={links} isFooter={true} />
    </Col>
  );
}

export default FooterPageLinks;
