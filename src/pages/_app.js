import { useEffect } from "react";
import { useRouter } from "next/router";
import { AuthProvider } from "@/context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const restrictedRoutes = ["/HomePage", "/LoginPage"];
    if (restrictedRoutes.includes(router.pathname)) {
      router.replace("/");
    }
  }, [router.pathname]);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}