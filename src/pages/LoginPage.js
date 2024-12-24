import React from "react";
import { loginValidationSchema } from "@/utils/validationSchemas";
import useAuthentication from "@/hooks/useAuthentication";
import useNavbarState from "@/hooks/useNavbarState";
import Navbar from "@/components/organisms/Navbar";
import LoginTemplate from "@/components/templates/LoginTemplate";
import LoginPageData from "@/data/LoginPageData";

const LoginPage = () => {
  const { isNavbarFixed } = useNavbarState();
  const { handleSubmit } = useAuthentication();

  return (
    <div>
      <Navbar isFixed={isNavbarFixed} />
      <LoginTemplate
        data={LoginPageData}
        validationSchema={loginValidationSchema}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginPage;