// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./components/ConnectUs.jsx/Join";
import Subscribe from "./components/ConnectUs.jsx/Subscribe";
import Home from "./pages/Home";

import { AuthProvider } from "./components/context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="font-jost">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Join isAdmin={false} />} />
            <Route path="/subscribe" element={<Subscribe isAdmin={false} />} />
            <Route path="/home" element={<Home isAdmin={false} />} />

            {/* Admin Routes (No nesting) */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Join isAdmin={true} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/home"
              element={
                <ProtectedRoute>
                  <Home isAdmin={true} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/subscribe"
              element={
                <ProtectedRoute>
                  <Subscribe isAdmin={true} />
                </ProtectedRoute>
              }
            />

            {/* Catch-All Route (Optional) */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
