import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import RQComponent from "./RQComponent";
import SWRComponent from "./SWRComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Hello, world</h1>
              <h1>
                Look at the difference of data fetching between swr and
                react-query
              </h1>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <Link to="/swr">SWR</Link>
                <Link to="/react-query">React Query</Link>
              </div>
            </div>
          }
        />
        <Route path="/swr" element={<SWRComponent />} />
        <Route path="/react-query" element={<RQComponent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
