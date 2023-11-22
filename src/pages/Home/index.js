import { Header } from "../../components/Header";
import background from '../../assets/background.png';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input name="user" placeholder="@user" />
            <button>Buscas</button>
          </div>
          <div className="profile_info">
            <img src="https://avatars.githubusercontent.com/u/44624583?v=4" className="profile" alt="Foto perfil Marcos Winther" />
            <div>
              <h3>Marcos Winther</h3>
              <span>@marcossilvacarreiro</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
