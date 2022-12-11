
import styles from './Login.module.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = 
    {
        id: 1,
        nome: "Karen",
        email : "karen@karen",
        senha: 123
    }

 
  const fazLogin = async (e) => {
    e.preventDefault();
    if (email==user.email) {
        if (password==user.senha){
            navigate(`/catalogo`)
        }
    }
    
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerlogin}>
        <div className={styles.wraplogin}>
          <form className={styles.loginform} onSubmit={(e) => fazLogin(e)}>
            <span className={styles.loginformtitle}> AntiQuarius </span>
            
            <div className={styles.wrapinput}>
              <input
                className={styles.input}
                type="email"
                value={email}
                placeholder="digite seu email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className={styles.focusinput} data-placeholder="Email"></span>
            </div>

            <div className={styles.wrapinput}>
              <input
                className={styles.input}
                type="password"
                value={password}
                placeholder="digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className={styles.focusinput} data-placeholder="Password"></span>
            </div>

            <div className={styles.containerloginformbtn}>
              <button className={styles.loginformbtn}>Login</button>
            </div>

            <div className={styles.textcenter}>
              <span className={styles.txt1}>Não possui conta? </span>
              <a className={styles.txt2} href="#">
                Criar conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;