import React, { useEffect, useState } from "react";

const Pie = () => {
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
  const handlesubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log(name);
  };
  return (
    <>
      Pie
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          aria-label="fullname"
        />
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
};

export default Pie;
