import React from "react";

function Home() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div>Home</div>
      <button onClick={logout}>Log Out</button>
    </>
  );
}

export default Home;
