import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import App from "./App";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import ListPosts from "./components/store_details/List_medicine";
import CreatePost from "./components/store_details/Add_medicine";
import Viewmedicine from "./components/store_details/View_medicine";
import Editmedicine from "./components/store_details/Edit_medicine";











const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    { path: 'register', element:<Register/>},
    {path: 'login', element:<Login/> },
    {path: 'stock/details', element:<ListPosts/> },
    {path:'stock/details/create', element:<CreatePost/>},
    {path:'stock/details/:postId/edit', element:<Editmedicine/> },
    {path: 'stock/details/:postId', element:<Viewmedicine/>}
    
  
 
   
    
]);

export default router;