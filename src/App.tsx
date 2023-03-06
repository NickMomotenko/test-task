import Container from "./components/Container";
import Input from "./components/Input";
import Menu from "./components/Menu";
import { Title } from "./components/Title";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <div className="app">
      <Container>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
