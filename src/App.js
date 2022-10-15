import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./router/AppRouter";
import store from "./app/store";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
