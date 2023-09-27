import './App.css';
import { Background } from './Components/Background';
import { Body } from './Components/Body';
import { Body2 } from './Components/Body2';
import { Foot } from './Components/Foot';
import { Head } from './Components/Head';

function App() {
  return (
    <div>
        <Head />
        <Background />
        <Body />
        <Body2 />
        <Foot />
    </div>
  );
}

export default App;
