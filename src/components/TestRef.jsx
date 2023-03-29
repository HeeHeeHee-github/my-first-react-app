import { useRef, useState } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요');

  const inputValue = useRef();

  const onChangeText = (e) => {
    const inputText = e.target.value;
    setText(inputText);
  };

  const onChangeRef = () => {
    setText(inputValue.current.value); // input 태그 안에 있는 current 값
  };
  return (
    <div>
      <h1>{text}</h1>
      <input
        ref={inputValue}
        // onChange={(e) => {
        //   onChangeText(e);
        // }}

        onChange={onChangeRef}
      />
    </div>
  );
}
