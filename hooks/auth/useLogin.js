import { useLoginMutation } from "@/RTK/authApi";
import { useState } from "react";
import { showToast } from "../global/showToast";
import { isValidEmail } from "../global/helpers";
import Cookies from "js-cookie";

const useLogin = () => {
  const [email, setEmail] = useState("byjyta@gmail.com");
  const [password, setPassword] = useState("000000");

  const [login, { isLoading, error }] = useLoginMutation();

  const valid = () => {
    let ok = true;

    if (!isValidEmail(email)) {
      showToast("error", "Please enter a valid email address");
      ok = false;
    }
    if (password.length < 6) {
      showToast("error", "Password must be at least 6 characters");
      ok = false;
    }

    return ok;
  };

  const submit = async () => {
    if (!valid()) return;
    try {
      const user = await login({ email, password }).unwrap();

      Cookies.set("user", JSON.stringify(user.jobSeeker));
      Cookies.set("token", user.token, { expires: 7 });

      window.location.reload();
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    Cookies.remove("user");
    Cookies.remove("token");
    window.location.reload();
  };

  const userCookieValue = Cookies.get("user");

  let userData = null;

  if (userCookieValue) {
    try {
      userData = JSON.parse(userCookieValue);
    } catch (error) {
      console.error("Error parsing user cookie:", error);
      userData = null;
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    error,
    submit,
    logout,
    userData,
  };
};
export default useLogin;
