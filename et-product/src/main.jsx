import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import reducer, { initialState } from './component/reducer/Reducer.jsx';
import { StateProvider } from './component/Staateprovider/Stateprovider.jsx';
// import { StateProvider } from './component/StateProvider/StateProvider.jsx';
// import reducer, { initialState } from './component/reducer/Reducer.jsx';
// import { StateProvider } from './compnent/Staateprovider/Stateprovider.jsx';
// import reducer, { initialState } from './compnent/reducer/Reducer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}> 
      <App />
    </StateProvider>
  </StrictMode>,
);