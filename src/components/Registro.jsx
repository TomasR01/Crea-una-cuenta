import Alerta from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

const Registro = ({ error, setError, msg, color }) => {
  return (
    <>
      <h1>Crea una cuenta</h1>
      <SocialButton
        github={"github"}
        facebook={"facebook"}
        linkedin={"linkedin"}
      />
      <p>O usa tu email para registrarte</p>
      <Formulario error={error} setError={setError} />
      <Alerta msg={msg} color={color} />
    </>
  );
};

export default Registro;
