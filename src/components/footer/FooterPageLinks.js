import NavItems from "../common/navs/NavItems";
import { Col } from "react-bootstrap";

function FooterPageLinks({ title, links }) {
  return (
    <Col xs={11} sm={11} md={4}>
      <p className="footer_page-name">{title}</p>
      <NavItems links={links} isFooter={true} />
    </Col>
  );
}

export default FooterPageLinks;
