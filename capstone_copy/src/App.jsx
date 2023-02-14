import { createRoot } from "react-dom/client";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Onboarding from "./Onboarding";
import Register from "./Register";
import ValidateAddress from "./ValidateAddress";
import ValidateCard from "./ValidateCard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Onboarding />} />
          <Route path="register" element={<Register />} />
          <Route path="address" element={<ValidateAddress />} />
          <Route path="card" element={<ValidateCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
const container = createRoot(document.getElementById("root"));
container.render(<App />);
