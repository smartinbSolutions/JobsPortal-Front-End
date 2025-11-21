"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LoginWithSocial from "./LoginWithSocial";
import Link from "next/link";
import useSignup from "@/hooks/auth/useSignup";
import LoadingCard from "../../LoadingCard";

const Register = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    isLoading,
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
    verificationCode,
    setVerificationCode,
    openVerify,
    submitCode,
  } = useSignup();

  if (isLoading) return <LoadingCard />;

  if (openVerify) {
    return (
      <div className="form-inner">
        <h3>Verify your email address</h3>
        <span>We've sent a code to your email, please enter it below</span>
        <div className="form-group">
          <label>Verification Code</label>
          <input
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            type="number"
            name="verificationcode"
            placeholder="123456"
            required
          />
        </div>
        <div className="col-lg-6 col-md-12">
          <button
            type="button"
            className="btn btn-primary-outline"
            onClick={submitCode}
          >
            Check code
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="form-inner">
        <h3>Create a Free LinkedOut Account</h3>

        <Tabs>
          <div className="form-group register-dual">
            <TabList className="btn-box row">
              <Tab className="col-lg-6 col-md-12">
                <button
                  className="theme-btn btn-style-four"
                  onClick={() => setRegisterType("seeker")}
                >
                  <i className="la la-user"></i> Candidate
                </button>
              </Tab>

              <Tab className="col-lg-6 col-md-12">
                <button
                  className="theme-btn btn-style-four"
                  onClick={() => setRegisterType("employer")}
                >
                  <i className="la la-briefcase"></i> Employer
                </button>
              </Tab>
            </TabList>
          </div>

          <TabPanel>
            <form method="post" action="add-parcel.html">
              <div className="form-group">
                <label>
                  First Name <span className="text-danger">*</span>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="username"
                  placeholder="Username"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Password <span className="text-danger">*</span>
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password-field"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <button
                  className="theme-btn btn-style-one"
                  type="button"
                  onClick={submit}
                >
                  Register
                </button>
              </div>
            </form>
          </TabPanel>

          <TabPanel>
            <form method="post" action="add-parcel.html">
              <div className="form-group">
                <label>
                  Company Name <span className="text-danger">*</span>
                </label>
                <input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  type="text"
                  name="companyname"
                  placeholder="Company Name"
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  Legal Name <span className="text-danger">*</span>
                </label>
                <input
                  value={legalName}
                  onChange={(e) => setLegalName(e.target.value)}
                  type="text"
                  name="legalname"
                  placeholder="Legal Name"
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  type="email"
                  name="companyEmail"
                  placeholder="Company Email"
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  Contact Person Name <span className="text-danger">*</span>
                </label>
                <input
                  value={contactPersonName}
                  onChange={(e) => setContactPersonName(e.target.value)}
                  type="text"
                  name="contactpersonname"
                  placeholder="Contact Person Name"
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  Industry <span className="text-danger">*</span>
                </label>
                <input
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  type="text"
                  name="industry"
                  placeholder="Industry"
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  Registration Number <span className="text-danger">*</span>
                </label>
                <input
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  type="text"
                  name="registrationNumber"
                  placeholder="Registration Number"
                  required
                />
              </div>
              <h6 className="mb-2 text-center">
                We'll get in touch with you when we validate your data.
              </h6>
              <div className="form-group">
                <button
                  className="theme-btn btn-style-one"
                  type="button"
                  onClick={submit}
                >
                  Register
                </button>
              </div>
            </form>
          </TabPanel>
        </Tabs>

        <div className="bottom-box">
          <div className="text">
            Already have an account?{" "}
            <Link
              href="#"
              className="call-modal login"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
              data-bs-target="#loginPopupModal"
            >
              LogIn
            </Link>
          </div>
          <div className="divider">
            <span>or</span>
          </div>
          <LoginWithSocial />
        </div>
      </div>
    );
  }
};

export default Register;
