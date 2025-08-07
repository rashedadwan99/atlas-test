import React from "react";
import { NavLink } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { notAuthAction } from "../../../redux/actions/AuthActions";

function NavLinks({ links, setOpenMenu }) {
  const { pathname } = useResolvedPath();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (n) => {
    if (n.path) navigate(n.path);
    else if (n.href) {
      window.open(n.href, "_blank");
    } else if (n.onClick) {
      n.onClick();
    }
    window.scrollTo(0, 0);
    if (setOpenMenu) setOpenMenu(false);
  };
  return links.map((n, i) => {
    if (n.label)
      return (
        <NavLink
          className={`nav${pathname === n.path ? " active" : ""}`}
          key={i}
          onClick={() => handleNavigate(n)}
        >
          <div className="nav-icon">{n.icon}</div>
          <div>{n.label}</div>
        </NavLink>
      );
  });
}

export default NavLinks;
