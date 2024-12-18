import React, { useState } from "react";
import LoginTemplate from "@/components/templates/LoginTemplate";
import Navbar from "@/components/organisms/Navbar";
import LoginPageData from "@/data/LoginPageData";
import { useAuth } from "@/context/AuthContext";
import { loginValidationSchema } from "@/utils/validationSchemas";
import { createFormHandler } from "@/utils/createFormHandler";

const LoginPage = () => {

  const { authenticateUser } = useAuth();
  const [isNavbarFixed, setIsNavbarFixed] = useState(true);

  const handleSubmit = createFormHandler(async (values) => {
    const { success, message } = await authenticateUser(
      values.email,
      values.password
    );

    if (!success) {
      alert(message || "Credenciales inválidas. Intente nuevamente.");
    }
  });

  return (
    <div>
      <Navbar isFixed={isNavbarFixed}/>
      <LoginTemplate
        data={LoginPageData}
        validationSchema={loginValidationSchema}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginPage;