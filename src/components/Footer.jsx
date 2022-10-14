import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <footer className="w-100 " style={{ height: "20px" }}>
        <div className="container w-80 h-100 d-flex flex-column jjustify-content-center align-items-center">
          <div className="d-flex gap-3">
            <div className="fs-2 cursor-pointer">
              <a href="https://github.com/huseyin-aln">
                <FaGithub color="black" />
              </a>
            </div>

            <div className="fs-2 cursor-pointer">
              <a href="https://www.linkedin.com/in/hüseyin-arslan444/">
                <FaLinkedin color="black" />
              </a>
            </div>
          </div>
          <div className="m-2 fs-5 fw-bold">
            Copyright &copy; 2022, {"<h-aln>"}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
