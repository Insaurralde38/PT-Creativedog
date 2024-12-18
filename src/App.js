import { useAuth } from "@/context/AuthContext";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <main>
      {isAuthenticated ? <HomePage /> : <LoginPage />}
    </main>
  );
}