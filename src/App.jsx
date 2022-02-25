
import { Home } from "./pages/Home.jsx"
import { Mark } from "./pages/Mark.jsx"
import { Menu } from './pages/Menu.jsx'
import { Curso } from "./pages/Curso.jsx"
import { Admin } from './pages/Admin.jsx'
import { pageSobre } from './pages/Sobre.jsx'
import { tutorialPages } from './pages/Tutoriais.jsx'
import { Route, BrowserRouter, Switch } from "react-router-dom"
import { AuthcontextProv } from "./context/userContext"
import { PrivateRoute } from './context/privateRoute'




function App() {

    return (

        <BrowserRouter>
            <AuthcontextProv>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exat path='/sobre' component={pageSobre} />
                    <PrivateRoute exact path='/menu' component={Menu} />
                    <PrivateRoute exact path='/admin' component={Admin} />
                    <PrivateRoute exact path='/menu/mark' component={Mark} />
                    <PrivateRoute exact path='/menu/tutorial' component={tutorialPages} />
                    <PrivateRoute exact path='/menu/curso' component={Curso} />
                </Switch>
            </AuthcontextProv>
        </BrowserRouter>




    )
}
export default App;



