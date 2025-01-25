import { Provider } from 'react-redux';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import { GlobalStyles } from './styles/GlobalStyles';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductList />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
