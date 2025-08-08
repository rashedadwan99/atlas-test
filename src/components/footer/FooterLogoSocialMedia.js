import Logo from "../logo/Logo";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import AosContainer from "../common/aos/Aos";

function FooterLogoSocialMedia() {
  const socialMedia = [
    {
      id: "f",
      href: "https://www.facebook.com/idareorganisation/?_rdc=1&_rdr",
      icon: <FaFacebookF />,
    },

    {
      id: "l",
      href: "https://www.linkedin.com/company/idareorg/",
      icon: <FaLinkedinIn />,
    },
    {
      id: "y",
      href: "https://www.youtube.com/channel/UCSOKUsPA3zsd1u9qSid-7yQ?view_as=subscriber",
      icon: <IoMdPlay />,
    },
    {
      id: "i",
      href: "https://www.instagram.com/idareorganisation/",
      icon: <FaInstagram />,
    },
  ];
  const navigate = (sm) => {
    window.open(sm.href, "_blank");
  };
  const { t } = useTranslation();
  return (
    <Col className="footer_logo-social-media" xs={12} sm={12} md={5}>
      <div className="footer_logo-container">
        <AosContainer dataaos="zoom-in">
          <Logo />
        </AosContainer>
      </div>
      <div className="footer_social-media my-3">
        {socialMedia.map((sm, i) => {
          return (
            <div
              key={i}
              className="footer_social-media-icon"
              onClick={() => navigate(sm)}
            >
              <AosContainer dataaos="flip-up">{sm.icon}</AosContainer>
            </div>
          );
        })}
      </div>
      <AosContainer dataaos="flip-up">
        <p style={{ fontWeight: "bold" }}>{t("Copyright")}</p>
      </AosContainer>
    </Col>
  );
}

export default FooterLogoSocialMedia;
