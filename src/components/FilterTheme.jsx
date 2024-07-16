import React from "react";

function FilterTheme({ setTheme, theme }) {
  function handleSwitchTheme(e) {
    setTheme(e.target.value);
  }
  return (
    <select
      onChange={(e) => handleSwitchTheme(e)}
      value={theme}
      defaultValue=""
      className="bg-white text-white font-chalk bg-opacity-10 w-[325px] text-black my-5 "
    >
      <option value="animaux">animaux</option>
      <option value="pays">pays</option>
      <option value="anime">anime</option>
    </select>
  );
}

export default FilterTheme;
