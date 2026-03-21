import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const themeColor = theme === 'dark' ? '#131750' : '#F7F8FA';
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeColor);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <div className="container">
        <Home />
      </div>
    </>
  );
}

export default App;
