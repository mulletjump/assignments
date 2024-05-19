import React from "react";
import "./assets/scss/style.css";
import plusIcon from "./assets/img/plus.svg";
import deleteIcon from "./assets/img/delete.svg";

const App = () => {
  return (
    <div id="wrap">
      <header id="header">
        <h1>To-do List</h1>
        <div className="add">
          <input type="text" placeholder="오늘의 할 일을 적어보세요!" />
          <button>
            <img src={plusIcon} alt="" />
          </button>
        </div>
      </header>
      <main id="main">
        <div className="list">
          <div className="box">
            <input type="checkbox" id="task1" />
            <label htmlFor="task1"></label>
            <span>끝내주는 잠 자기</span>
          </div>
          <button>
            <img src={deleteIcon} alt="" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
