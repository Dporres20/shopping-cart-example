import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query';

const client = new QueryClient();

ReactDOM.render(
  // Allows for the use of react-query in the
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
document.getElementById('root')
);

