import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'; // Certifique-se de que este caminho esteja correto.

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          <div>Aluno: Kayo Fernando</div>
        </div>
      </Navbar>
      <Menu /> {/* Renderiza o componente Menu */}
    </div>
  );
}

export default App;
