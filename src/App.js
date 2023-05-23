import React from "react";
import './app.css'
import { Route, Routes } from "react-router-dom";
const LazyDashboard = React.lazy(() =>
import("./Features/Dashboard/Dashboard")
);
const LazySignin = React.lazy(() => import("./Features/Signin/Signin"));
const LazySecureRouting = React.lazy(() =>
import("./Components/SecureRouting/SecureRouting")
);

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback="Loading...">
              <LazySignin />
            </React.Suspense>
          }
        />
        {/* ----Protect Routing---   */}
        <Route
          element={
            <React.Suspense fallback="Loading...">
              <LazySecureRouting />
            </React.Suspense>
          }
        >
          <Route
            path="/dashboard"
            element={
              <React.Suspense fallback="Loading...">
                <LazyDashboard />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
