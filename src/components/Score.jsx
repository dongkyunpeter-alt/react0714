import st from "./Score.module.css";
console.log(st);

const Score = (names) => {
  console.log(names.children);

  return (
    <>
      <div className={st.box}>
        <p className={st.name}>이름: {names.children}</p>
      </div>
    </>
  );
};
export default Score;
