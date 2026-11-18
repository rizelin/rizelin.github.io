import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { LangProvider } from "./i18n/LangContext";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            {/*
              ページを追加するときはここに追加する。例:
              <Route path="projects/:slug" element={<ProjectDetail />} />
              <Route path="blog" element={<BlogList />} />
              <Route path="blog/:slug" element={<BlogPost />} />
            */}

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}
