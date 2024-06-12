import { routerRoute } from "../Routes/Root";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <header>
        {
            routerRoute.map((list) => (

                // if the statement is single line
                // use only ()
                // but if the statement is multiple statement
                // use {}
                <Link to={list.path} key={list.path}>{list.name}</Link>
            ))
        }
    </header>
  )
}

export default Headers;