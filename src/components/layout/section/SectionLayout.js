import { Row } from "react-bootstrap";
import "./sectionLayout.css";
import AosContainer from "../../common/aos/Aos";
function SectionLayout({ title, dataaos }) {
  return (
    <AosContainer dataaos={dataaos}>
      <Row className="justify-content-center my-5">
        <h3 className="section-header">{title}</h3>
      </Row>
    </AosContainer>
  );
}

export default SectionLayout;
