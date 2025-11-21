import Link from "next/link";

const ApplyJobModalContent = () => {
  return (
    <form className="default-form job-apply-form">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea
            className="darma"
            name="message"
            placeholder="Cover letter (Optional)"
          ></textarea>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <div className="input-group checkboxes square">
            <input type="checkbox" name="remember-me" id="rememberMe" />
            <label htmlFor="rememberMe" className="remember">
              <span className="custom-checkbox"></span> You accept our{" "}
              <span data-bs-dismiss="modal">
                <Link href="/terms">
                  Terms and Conditions and Privacy Policy
                </Link>
              </span>
            </label>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button
            className="theme-btn btn-style-one w-100"
            type="button"
            name="submit-form"
          >
            Apply Job
          </button>
        </div>
      </div>
    </form>
  );
};

export default ApplyJobModalContent;
