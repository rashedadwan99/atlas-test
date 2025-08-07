import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import LogoImg from "../../assets/images/logo.jpeg";
import { routes } from "../../routes/routes";
function Logo() {
  const navigate = useNavigate();
  const handleClickLogo = () => {
    navigate(routes.aboutUsRoute);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Image
      loading="lazy"
      src={LogoImg}
      alt="IDare-logo"
      className="logo"
      onClick={handleClickLogo}
    />
  );
}

export default Logo;
