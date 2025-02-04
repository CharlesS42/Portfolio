import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { AppRoutes } from './shared/models/app.routes';

const onRedirectCallback = () => {
  window.location.replace(AppRoutes.Callback);
};

function App(): JSX.Element {
  return (
    <RouterProvider router={router} />
  );
}

export default App;