import Child from "./Child";
import Member from "./Member.jsx";
import Picture from "./Picture.jsx";
import "./style.css";

function Name() {
  return <h1>App안에서 생성된 컴포넌트</h1>;
}

function App() {
  //컴포넌트의 조건: 함수명이 대문자로 시작, return이 있어야하며 태그를 꼭 넣어야함
  // function Name() {
  //   return <h1>App안에서 생성된 컴포넌트</h1>;
  // }

  return (
    <>
      <Name />
      <Child></Child>
      <Child />
      <Member />
      <Member />
      {/* <Picture/> */}
    </>
  );
}
export default App;
