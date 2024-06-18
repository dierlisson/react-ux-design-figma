import './App.css';
import Botao from './componentes/Botao';

function App() {
  const dados = {
    nome: "Dierlisson",
    valor: 100,
    condicao: false,
    lista: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

  }
  return (
    <Botao nome="Front-end II" ativo={true} data={dados}>
      Informe algo
    </Botao>
  );
}

export default App;
