import { useForm } from "react-hook-form";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function FormLogin({ title }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitForm = (data) => {
    localStorage.setItem("token", `TokenDe${data.email}Simulado`);
    setLoader(true)
    setTimeout(()=>{
        setLoader(false)
        navigate("/home");
    },3000)
  };
  return (
    <>
      <form
        className={styles.mainContainerFormLogin}
        onSubmit={handleSubmit(SubmitForm)}
      >
        {loader ? <div className={styles.containerLoaderFormLogin}><span className={styles.loader}></span></div> : null}

        <div className={styles.containerLabelInput}>
          <label htmlFor="email" className={styles.labelFormLogin}>
            Email
          </label>
          <input
            className={styles.inputFormLogin}
            id="email"
            type="email"
            placeholder="Your email"
            {...register("email", {
              required: true,
              pattern: /\S+@\S+\.\S+/,
            })}
          />
          {errors.email?.type === "required" && (
            <p className={styles.errorFormLogin}>Email is required</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className={styles.errorFormLogin}>Invalid email</p>
          )}
        </div>
        <div className={styles.containerLabelInput}>
          <label htmlFor="password" className={styles.labelFormLogin}>
            Password
          </label>
          <input
            className={styles.inputFormLogin}
            id="password"
            type="password"
            placeholder="Your password"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 16,
              pattern: /^([A-ZÑÁÉÍÓÚÜ0-9]||[a-zñáéíóú0-9])+$/,
            })}
          />
          {errors.password?.type === "required" && (
            <p className={styles.errorFormLogin}>Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className={styles.errorFormLogin}>Minimum length of 8</p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className={styles.errorFormLogin}>Maximum length of 16</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className={styles.errorFormLogin}>Only letters and numbers</p>
          )}
        </div>
        <button className={styles.buttonFormLogin}>{title}</button>
      </form>
    </>
  );
}
export default FormLogin;
