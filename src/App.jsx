import { Plans } from './components/ Plans/Plans';
import { Award } from './components/Award/Award';
import { Content } from './components/Content/Content';
import { Engages } from './components/Engages/Engages';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Imagine } from './components/Imagine/Imagine';
import { Point } from './components/Point/Point';
import { Questions } from './components/Qusetions/Questions';
import { Tools } from './components/Tools/Tools';
import { Trial } from './components/Triall/Trial';
import { Member } from './components/member/Member';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Tools/>
      <Imagine/>
      <Engages/>
      <Point/>
      <Member/>
      <Plans/>
      <Questions/>
      <Award/>
      <Trial/>
      <Footer/>
    </div>
  );
}

export default App;
