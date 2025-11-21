import { useSignupMutation, useVerifyEmailMutation } from "@/RTK/authApi";
import { useState } from "react";
import { showToast } from "../global/showToast";
import { isValidEmail } from "../global/helpers";
import { useCompanyRegisterMutation } from "@/RTK/jobCompaniesApi";

const useSignup = () => {
  const [registerType, setRegisterType] = useState("seeker");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [openVerify, setOpenVerify] = useState(false);

  //Company
  const [companyName, setCompanyName] = useState("");
  const [legalName, setLegalName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");
  const [industry, setIndustry] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");

  const [signup, { isLoading, error }] = useSignupMutation();
  const [checkCode, { isLoading: isVerifying, error: verifyError }] =
    useVerifyEmailMutation();
  const [registerCompany, { isLoading: companyLoading, error: companyError }] =
    useCompanyRegisterMutation();

  const valid = () => {
    let ok = true;

    if (registerType === "seeker") {
      if (!isValidEmail(email)) {
        showToast("error", "Please enter a valid email address");
        ok = false;
      }
      if (name.length < 2) {
        showToast("error", "Please enter a valid name");
        ok = false;
      }
      if (password.length < 6) {
        showToast("error", "Password must be at least 6 characters");
        ok = false;
      }
    } else {
      if (!isValidEmail(companyEmail)) {
        showToast("error", "Please enter a valid email address");
        ok = false;
      }
      if (legalName.length < 2) {
        showToast("error", "Please enter a valid legal name");
        ok = false;
      }
      if (companyName.length < 2) {
        showToast("error", "Please enter a valid company name");
        ok = false;
      }
      if (contactPersonName.length < 2) {
        showToast("error", "Please enter a valid contact person name");
        ok = false;
      }
      if (industry.length < 2) {
        showToast("error", "Please enter a valid industry");
        ok = false;
      }
      if (registrationNumber.length < 5) {
        showToast("error", "Please enter a valid registration number");
        ok = false;
      }
    }

    return ok;
  };

  const submit = async () => {
    if (!valid()) return;
    try {
      if (registerType === "seeker") {
        await signup({ email, password, name }).unwrap();
        showToast("success", "Please verify your email");
        setOpenVerify(true);
      } else {
        await registerCompany({
          companyName,
          legalName,
          email: companyEmail,
          contactPersonName,
          industry,
          registrationNumber,
        }).unwrap();
        setCompanyName("");
        setLegalName("");
        setCompanyEmail("");
        setContactPersonName("");
        setIndustry("");
        setRegistrationNumber("");
        showToast(
          "success",
          "Done! We'll get in touch with you when we validate your data",
          {
            autoClose: 6000,
          }
        );
      }
    } catch (error) {
      console.log(error);
      if (error?.data?.message) {
        showToast("error", error?.data?.message);
      }
    }
  };

  const submitCode = async () => {
    if (verificationCode?.length != 6) {
      showToast("error", "Please enter a valid verification code");
      return;
    }
    try {
      await checkCode({ email, verificationCode }).unwrap();
      showToast("success", "Email verified! Log in to start");
      setOpenVerify(false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    isLoading: isLoading || companyLoading,
    error: error || companyError,
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
    registerType,
    setRegisterType,
    verificationCode,
    setVerificationCode,
    openVerify,
    setOpenVerify,
    submitCode,
  };
};

export default useSignup;
