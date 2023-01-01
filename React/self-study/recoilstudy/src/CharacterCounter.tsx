import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const textState = atom({
  key: "textState",
  default: "",
});

const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});


function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <>Character Count : {count}</>;
}

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (e: any) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};

const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};

export default CharacterCounter;
