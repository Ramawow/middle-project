import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './page/home'
import VisiMisi from './page/visi misi'
import Struktur from './page/struktur'
import Galeri from './page/galeri'
import EventPage from './page/our event'
import Magazine from './page/magazine'

import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  return (
    <BrowserRouter>
    <Navbar /> 
    <Switch>
      <Route exact path='/' component={Home}/>

      <Route path='/visi-misi' component={VisiMisi}/>
      <Route path='/struktur-organisasi' component={Struktur}/>
      <Route path='/galeri' component={Galeri}/>

      <Route exact path='/our-events'><Redirect to='/'/></Route>
      <Route exact path='/our-events/:slug' component={EventPage}/>

      <Route exact path='/e-magazine' component={Magazine}/>
    </Switch>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
