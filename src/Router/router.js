import { BrowserRouter, Switch, Route } from "react-router-dom"
import { PageError } from "../Pages/ErrorPage"
import { PageHome } from "../Pages/HomePage"


export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <PageHome />
                </Route>

                <Route>
                    <PageError />
                </Route>
            </Switch>
        </BrowserRouter>
    )
} 