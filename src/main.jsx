import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TaskList from './components/useState/TaskList.jsx'
import FoodCard from './components/useState/FoodCard.jsx'
import ShowHideText from './components/useState/ShowHideText.jsx'
import InputControled from './components/useState/InputControled.jsx'
import TaskList2 from './components/useState/TaskList2.jsx'
import RealMadridPlayers from './components/useState/RealMadridPlayers.jsx'
import ChampionsTeam from './components/useState/ChampionsTeam.jsx'
import Colors from './components/useState/Colors.jsx'
import ColorsSelectors from './components/useState/ColorsSelectors.jsx'
import Count from './components/useState/Count.jsx'
import Calculator from './components/useState/Calculator.jsx'
import Cards from './components/useState/Cards.jsx'
import Login from './components/useState/Login.jsx'
import Text from './components/useState/Text.jsx'
import StringCounter from './components/useState/StringCounter.jsx'
import ShowPassword from './components/useState/ShowPassword.jsx'
import ActivateButton from './components/useState/ActivateButton.jsx'
import UserList from './components/useEffect/UserList.jsx'
import RealTimeClock from './components/useEffect/RealTimeClock.jsx'
import NetworkStatus from './components/useEffect/NetworkStatus.jsx'
import AlertCounter from './components/useEffect/AlertCounter.jsx'
import DocumentTitle from './components/useEffect/DocumentTitle.jsx'
import SimpleTemporizator from './components/useEffect/SimpleTemporizator.jsx'
import WindowSize from './components/useEffect/WindowSize.jsx'
import BackgroundColor from './components/useEffect/BackgroundColor.jsx'
import Authentication from './components/useEffect/Authentication.jsx'
import PokeApi from './components/useEffect/PokeApi.jsx'
import AvengersApi from './components/useEffect/AvengersApi.jsx'
import GokuApi from './components/useEffect/GokuApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<TaskList/>
    <App />
    <FoodCard/>
    <ShowHideText/>
    <InputControled/>
    <TaskList2/>
    <RealMadridPlayers/>
    <ChampionsTeam/>
    <Colors/>
    <ColorsSelectors/>
    <Count/>
    <Calculator/>
    <Cards/>
    <Login/>
    <Text/>
    <StringCounter/>
    <ShowPassword/>
    <ActivateButton/>
    
    <UserList/>
    <RealTimeClock/> 
    <NetworkStatus/>
    <AlertCounter/>
    <DocumentTitle/>
    <SimpleTemporizator/>
    <WindowSize/>
    <BackgroundColor/>
    <Authentication/>
    <PokeApi/>
    <AvengersApi/>*/}
    <GokuApi/>




  </StrictMode>
)
