import styles from "../Styles/Pages/Login.module.css";
import FormLogin from "../Components/FormLogin";

function Login() {
  return (
    <div className={styles.mainContainerLogin}>
        <img className={styles.logoLogin} src="https://www.atek-group.com/wp-content/uploads/2020/06/logo-color-atek-group.svg" alt="Atek Group"/>
      <div className={styles.containerInputsLogin}>
        <FormLogin title='Login' />
      </div>
    </div>
  );
}
export default Login;
