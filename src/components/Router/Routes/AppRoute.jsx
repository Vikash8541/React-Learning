import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Layout from "../Components/Layout";
import Error from "../Pages/Error";
import BlogPage from "../Pages/BlogPage";
import SingleBlog from "../Pages/SingleBlog";
import User from "../../../Api/User";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/users" element={<User />} />

          {/* Using unique id */}
          {/* <Route path="/blog/:id" element={<SingleBlog />} /> */}

          {/* Using Slug */}
          <Route path="/blog/:title" element={<SingleBlog />} />
          
          {/* We you have create 404 page then use it */}
          <Route path="/*" element={<Error/>}/>

          {/* Or if you want not create 404 page just only redirect then any page*/}
          {/* <Route path="/*" element={<Navigate to="/"/>} /> */}

        </Route>
      </Routes>
    </>
  );
};

export default AppRoute;
