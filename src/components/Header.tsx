import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the dark mode on and off
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Apply dark class to the root element (html)
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark'); // Apply dark mode
    } else {
      root.classList.remove('dark'); // Remove dark mode
    }
  }, [isDarkMode]);

  return (
    <div className="header flex bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-2 rounded-md mb-4 justify-between">
     <img
        src="/assets/images/logo.svg"
        alt="Logo"
        className="w-32 h-12 filter dark:invert dark:white dark:brightness-50"
      />

      <button onClick={toggleTheme}>
        <img
          src={isDarkMode ? "/assets/images/icon-sun.svg" : "/assets/images/icon-moon.svg"}
          alt="Theme Icon"
          className="w-6 h-6"
        />
      </button>
    </div>
  );
}

export default ThemeToggle;
