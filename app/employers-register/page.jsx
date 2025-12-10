"use client";
import LoginPopup from "@/components/common/form/login/LoginPopup";
import DefaulHeader from "@/components/header/DefaulHeader";
import MobileMenu from "@/components/header/MobileMenu";
import FooterDefault from "@/components/footer/common-footer";
import React, { useEffect } from "react";
import useSignup from "@/hooks/auth/useSignup";
import "../../styles/custom.css";

const EmployersRegister = () => {
  const {
    submit,
    companyName,
    setCompanyName,
    legalName,
    setLegalName,
    companyEmail,
    setCompanyEmail,
    contactPersonName,
    setContactPersonName,
    industry,
    setIndustry,
    registrationNumber,
    setRegistrationNumber,
    setRegisterType,
    reset,
  } = useSignup();

  useEffect(() => setRegisterType("employer"), []);

  return (
    <>
      <span className="header-span"></span>
      <LoginPopup />
      <DefaulHeader />
      <MobileMenu />

      <div className="py-10 bg-gray-50 min-h-screen">
        <div className="auto-container d-flex row">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/575/280/original/a-stunning-glass-skyscraper-stands-tall-and-proud-on-a-transparent-background-showcasing-its-intricate-architectural-design-and-reflecting-the-surrounding-environment-with-elegance-generative-ai-png.png"
            className="col-4"
            alt="Welcome"
          />
          <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md col-8">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Company Registration
            </h2>

            <div className="gap-3 column-gap-3 mx-auto form-wrapper">
              <div className="form-group mt-3">
                <label className="font-medium">
                  Company Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </div>

              <div className="form-group mt-3">
                <label className="font-medium">
                  Legal Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  value={legalName}
                  onChange={(e) => setLegalName(e.target.value)}
                  type="text"
                  placeholder="Legal Name"
                  required
                />
              </div>

              <div className="form-group mt-3">
                <label className="font-medium">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  type="email"
                  placeholder="Company Email"
                  required
                />
              </div>

              <div className="form-group mt-3">
                <label className="font-medium">
                  Contact Person Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  value={contactPersonName}
                  onChange={(e) => setContactPersonName(e.target.value)}
                  type="text"
                  placeholder="Contact Person Name"
                  required
                />
              </div>

              <div className="form-group mt-3">
                <label className="font-medium">
                  Industry <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  type="text"
                  placeholder="Industry"
                  required
                />
              </div>

              <div className="form-group mt-3">
                <label className="font-medium">
                  Registration Number <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  type="text"
                  placeholder="Registration Number"
                  required
                />
              </div>

              <p className="text-center text-gray-500 text-sm my-2">
                We’ll get in touch with you when we validate your data.
              </p>

              <div className="d-flex gap-2">
                <button className="w-100 btn btn-danger py-3" onClick={reset}>
                  Reset
                </button>
                <button
                  className="w-100 theme-btn btn-style-one py-3"
                  onClick={submit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterDefault footerStyle="alternate5" />
    </>
  );
};

export default EmployersRegister;
