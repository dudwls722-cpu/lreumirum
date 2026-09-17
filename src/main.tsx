import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function App() {
  return (
    <main className="app">
      <div className="container">
        <div className="logo">이름이룸</div>

        <p className="subtitle">
          나에게 어울리는 이름을 찾아보세요
        </p>

        <section className="card">
          <h2>이름 추천받기</h2>

          <label className="label" htmlFor="surname">
            성씨
          </label>

          <input
            id="surname"
            className="input"
            type="text"
            placeholder="예: 조"
          />

          <button className="button">
            이름 추천하기
          </button>
        </section>
      </div>
    </main>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
