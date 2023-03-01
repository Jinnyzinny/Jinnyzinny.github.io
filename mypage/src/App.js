import react, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

//footer 부분은 Blog와 나를 드러낼 수 있는 부분들에 대해서 좀 더 소개를 했다.

function App() {
  return (
    <div className="App">
      <header>
        <div className="Name">Jin's Portfolio & Profile</div>
      </header>
      <div className="Aspiration">
        2023 현재 많은 프로젝트를 진행하지 않았지만, 비어있는 이 공간을 채워가는
        개발자가 되겠습니다.
      </div>
      <div className="Web"></div>

      <div className="Mobile"></div>
      <footer>
        <div className="blog">
          <img
            src="Notion Logo.png"
            alt="노션 로고"
            width={"3%"}
            height={"3%"}
          />
          <span>노션</span>
          <a href="https://jinnyzinny-221.tistory.com/" target={"_blank"}>
            <img
              src="Tstory icon.png"
              alt="티스토리 로고"
              width={"3%"}
              height={"3%"}
            />
          </a>
          <span>티스토리</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
