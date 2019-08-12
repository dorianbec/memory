import MainPage from './components/intro/MainPage'
import Play from './components/intro/menucontent/Play'
import HighScores from './components/intro/menucontent/HighScores'
import HowToPlay from './components/intro/menucontent/HowToPlay'
import GameBoard from '@/GameBoard'


export const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/play',
    component: Play,
  },
  {
    path: '/highscores',
    component: HighScores
  },
  {
    path: '/howtoplay',
    component: HowToPlay
  }  ,
  {
    path: '/gameboard',
    component: GameBoard
  }
]
