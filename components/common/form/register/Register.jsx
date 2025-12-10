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
