import { useAuth } from "@/context/AuthContext";
import { createFormHandler } from "@/utils/createFormHandler";

const useAuthentication = () => {
  const { authenticateUser } = useAuth();

  const handleSubmit = createFormHandler(async (values) => {
    const { success, message } = await authenticateUser(
      values.email,
      values.password
    );

    if (!success) {
      alert(message || "Credenciales inválidas. Intente nuevamente.");
    }
  });

  return { handleSubmit };
};

export default useAuthentication;