import {createBrowserRouter } from "react-router-dom"
import Root from "../pages/root"

import Posts from "../pages/Posts"
import PostList from "../pages/PostList"

export const router=createBrowserRouter([
{path:"/", element:<Root/>,children:[
    {path:"/all-posts",element:<Posts/>},
{path:"/header",element:<div>this is header</div>},
{path:"/hero",element:<div>this is hero section</div>},
{path:"/post/:PostId",element:<PostList/>}
]},

])
export default router