import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { theme } from 'common/theme';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </ThemeProvider>
  </React.StrictMode>
);
