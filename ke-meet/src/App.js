import GlobalStyle from './GlobalStyles';
import Routers from "./Routers";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <GlobalStyle />
      <Routers />
    </>
  );
}

export default App;
