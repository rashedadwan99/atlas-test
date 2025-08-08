import { Col, Row } from "react-bootstrap";
import "./about-us.css";
import { useTranslation } from "react-i18next";
import landingImg from "../../assets/images/landingImg.jpeg"; // ✅ Correct import
import Cimg from "../../components/common/image/Cimg";
import Writer from "../../components/common/writer/Writer";
import AosContainer from "../../components/common/aos/Aos";

function FirstAboutSection() {
  const { t } = useTranslation();

  return (
    <Row className="justify-content-end landing_container">
      <Cimg
        src={landingImg}
        alt="Landing Background"
        className="landing_background"
      />
      <Col xs={11} sm={8} md={6}>
        <div className="landing_title">
          <AosContainer dataaos="fade-up">
            <h2>{t("acacia")}</h2>
            <span className="landing_writer">
              <Writer sentence={t("idea")} />
            </span>
          </AosContainer>
        </div>
      </Col>
    </Row>
  );
}

export default FirstAboutSection;
