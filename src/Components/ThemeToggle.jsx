import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div>
      <button className={`btn btn-outline-${theme === 'light' ? 'dark' : 'light'} btn_dark_mode`} onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;