import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>이름이룸</h1>
      <p>나에게 어울리는 이름을 찾아보세요.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
