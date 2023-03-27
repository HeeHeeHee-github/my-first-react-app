function EventHandler() {
  function alertFunc() {
    alert("click");
  }
  return (
    <div>
      <span onClick={alertFunc}>click1</span>
      <br />
      <span onClick={() => alertFunc()}>click2</span>
      <br />
      <span
        onClick={() => {
          let num = 10;
          num += 5;
          console.log(num);
        }}
      >
        숫자계산
      </span>
    </div>
  );
}
export default EventHandler;
