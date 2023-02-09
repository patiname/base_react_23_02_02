import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { PageNotFound } from "./PageNotFound";
import { Sub01 } from "./Sub01";
import { Sub02 } from "./Sub02";

export const RouterEx = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub01" element={<Sub01 />} />
        <Route path="/sub02" element={<Sub02 />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
