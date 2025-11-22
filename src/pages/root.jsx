import { Outlet,Link} from "react-router-dom";


export default function Root() {
  return (
    <>
      <div id="sidebar">

        
        <nav>
          <ul>
            <li>
              <Link to={`/header`}>Header</Link>
            </li>
            <li>
              <Link to={`/hero`}>Hero section</Link>
            </li>
             <li>
              <Link to={`/all-posts`}>posts</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
       <Outlet/>
      </div>
    </>
  );
}
