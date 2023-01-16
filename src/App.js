import CurrentBalance from './components/CurrentBalance';
import Spending from './components/Spending';
import AppStyled from './styled-components/App';
function App() {
  return (
 <AppStyled>
  <CurrentBalance/>
  <Spending/>
 </AppStyled>
  );
}

export default App;
