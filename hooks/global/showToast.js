import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (type, message, options = {}) => {
  const {
    icon: customIcon,
    style,
    autoClose = 3000,
    position = "top-right",
    hideProgressBar = false,
    ...rest
  } = options;

  const icons = {
    success: "✅",
    error: "❌",
    info: "ℹ️",
    warning: "⚠️",
    default: "🔔",
  };

  const toastOptions = {
    position,
    autoClose,
    hideProgressBar,
    className: `text-xs`,
    icon: customIcon ?? icons[type] ?? icons.default,
    theme: "light",
    ...rest,
  };

  switch (type) {
    case "success":
      toast.success(message, toastOptions);
      break;
    case "error":
      toast.error(message, toastOptions);
      break;
    case "info":
      toast.info(message, toastOptions);
      break;
    case "warn":
    case "warning":
      toast.warn(message, toastOptions);
      break;
    default:
      toast(message, toastOptions);
  }
};
