console.log("1+1");
const a = "5분 남았어";
const b = "곧 끝나";
console.log(a);

export function Text() {
  console.log(`a야${a}`);

  return (
    <p>
      {a} {b}
    </p>
  );
}
export default Text;
