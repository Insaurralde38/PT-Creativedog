export const createFormHandler = (callback) => async (values, { setSubmitting }) => {
  try {
    await callback(values);
  } catch (error) {
    const errorMessage = handleAuthError(error);
    alert(errorMessage);
  } finally {
    setSubmitting(false);
  }
};

const handleAuthError = (error) => {
  console.error("Error al iniciar sesión:", error);
  return "Ocurrió un error inesperado. Por favor, inténtelo más tarde.";
};