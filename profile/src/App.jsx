import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    cursor: url(https://cur.cursors-4u.net/food/foo-6/foo507.ani),
            url(https://cur.cursors-4u.net/food/foo-6/foo507.png),
            auto !important;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
