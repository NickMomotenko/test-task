import { Routes, Route, Navigate } from "react-router-dom";

import Container from "./components/ui/Container";
import { Dashboard } from "./pages/Dashboard";
import History from "./pages/History";

function App() {
  return (
    <div className="app">
      <Container>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
