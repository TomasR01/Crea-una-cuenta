import { useState } from "react";

const Formulario = ({ setError }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validarDatos = (e) => {
    e.preventDefault();

    const { nombre, email, password, confirmPassword } = formData;
    const validarInputs = !nombre || !email || !password || !confirmPassword;
    const validarContraseña = password !== confirmPassword;

    validarInputs
      ? setError({
          error: true,
          msg: "Completa todos los campos",
          color: "warning",
        })
      : setError({
          error: false,
          msg: "¡Cuenta creada exitosamente!",
          color: "success",
        });

    if (validarContraseña) {
      setError({
        error: true,
        msg: "Las contraseñas no coinciden",
        color: "danger",
      });
      return;
    }

    setFormData({
      nombre: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="formulario" onSubmit={(e) => validarDatos(e)}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            onChange={handleChange}
            value={formData.nombre}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="tuemail@ejemplo.com"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirma la contraseña"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-success">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
