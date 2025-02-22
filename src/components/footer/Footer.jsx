import React from "react";

const Footer = () => {
  return (
    <>
      <section className="py-10 border-t border-gray-600 bg-[#24303f]">
        <footer className="footer screen flex justify-between flex-col md:flex-row lg:flex-row text-white p-10">
          <aside>
            <img className="w-[70px]" src="/images/bd-logo.png" alt="" />
            <p>
              HACK-CORRUPTION
              <br />
              Providing reliable tech since 2030
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </section>
    </>
  );
};

export default Footer;
