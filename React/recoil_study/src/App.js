import { RecoilRoot } from "recoil";
import CharacterCounter from "./components/RecoilExample/CharacterCounter";
import FontButton from "./components/RecoilExample/FontButton";
import Text from "./components/RecoilExample/Text";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <FontButton />
        <Text />
        <CharacterCounter />
      </RecoilRoot>
    </div>
  );
}

export default App;
