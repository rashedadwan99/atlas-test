import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import FooterLogoSocialMedia from "./FooterLogoSocialMedia";
import _ from "lodash";
import FooterPageLinks from "./FooterPageLinks";
import { useSelector } from "react-redux";
// import DomParser from "../common/domParser/DomParser";
import { routes } from "../../routes/routes";
import "./footer.css";
function Footer({ homePage, campaignsList, programs }) {
  const { t } = useTranslation();
  const isArabic = useSelector((state) => state.language.isArabic);
  const aboutUslinks = [
    { label: t("who_we_r"), href2: routes.whoWeAre },
    { label: t("categories"), href2: routes.whoWeAre },
    { label: t("sponsors"), href2: routes.partners },
    { label: t("approach"), href2: routes.approach },
  ];
  const getTitle = (t) => {
    return isArabic
      ? t.title_ar.slice(0, 20) + (t.title_ar.length > 20 ? ".." : "")
      : t.title.slice(0, 20) + (t.title.length > 20 ? ".." : "");
  };
  const getLinks = (arr, route) => {
    if (Array.isArray(arr)) {
      return [
        ...arr.map((c) => {
          return {
            label: getTitle(c),
            path: route + `/${c.id}`,
          };
        }),
      ];
    }
    return [];
  };

  return (
    <Row
      className={`justify-content-around footer py-3 ${isArabic ? "ar" : "en"}`}
    >
      <Col xs={12} sm={11} md={11} lg={10}>
        <Row>
          <FooterLogoSocialMedia />
          <Col xs={12} sm={12} md={7}>
            <Row>
              <FooterPageLinks title={t("about-us")} links={aboutUslinks} />
              {/* <FooterPageLinks title={t("categories")} links={campaignslinks} /> */}
              {/* <FooterPageLinks title={t("programs")} links={programslinks} /> */}
            </Row>
          </Col>
        </Row>
      </Col>
      <Col
        xs={12}
        sm={11}
        md={11}
        lg={11}
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        <Row className="footer_contact-us justify-content-center">
          {t("Copyright")}
        </Row>
      </Col>
    </Row>
  );
}

export default Footer;
