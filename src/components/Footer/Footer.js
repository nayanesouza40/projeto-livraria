import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaWhatsapp />
        </li>
      </ul>
      <p className={style.copy_right}>
        <span>Antiquarius</span> &copy; 2018
      </p>
    </footer>
  );
}
