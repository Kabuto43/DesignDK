import React from "react"
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { App } from "./App"
import './index.css'

import { About } from "./pages/About"
import { Blogs } from "./pages/Blogs"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { Services } from "./pages/Services"
import { SingleBlog } from "./pages/SingleBlog"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)