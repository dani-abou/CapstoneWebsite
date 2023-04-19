import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import Layout from './layout';
import { EachProjectPage, HomePage, PeoplePage, ProgramPage, ProjectsPage } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>
      <HomePage />
    </Layout>,
  },
  {
    path: "/program",
    element:
      <Layout>
        <ProgramPage />
      </Layout >,
  },
  {
    path: "/projects",
    element: <Layout>
      <ProjectsPage />
    </Layout>,
  },
  {
    path: "/people",
    element:
      <Layout>
        <PeoplePage />
      </Layout >,
  },
  {
    path: "/project/:projectId",
    element: <Layout>
      <EachProjectPage />
    </Layout>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

