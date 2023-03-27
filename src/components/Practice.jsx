function Practice() {
  const style = { marginTop: "32px", backgroundColor: "skyblue" };
  const helloStr = "Hello, first exercise";
  // function alertFunc() {
  //   alert("클릭 됨");
  // }

  return (
    <div
      style={style}
      onClick={() => {
        alert("클릭 됨!");
      }}
      className={"test"}
    >
      {helloStr}
    </div>
  );
}

export default Practice;
