import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import LearningSection from './Components/LearningSection'; 
import FeatureLearning from './Components/FeatureLearning';
import Data from './Components/Data';
import LearningPaths from './Components/LearningPaths';
import MongoDbUniversity from './Components/MongoDbUniversity';
import LearningExp from './Components/LearningExp';
import Explore from './Components/Explore';
import LoveYourDev from './Components/LoveYourDev';
import Footer from './Components/Footer';


function App() {
  return (
   <>
   <Header/> 
   <LearningSection/>
   <FeatureLearning/>
   <Data/>
   <LearningPaths/>
   <MongoDbUniversity/>
  <LearningExp/>
  <Explore/>
  <LoveYourDev/>
  <Footer/>

   </>
  );
}

export default App;
