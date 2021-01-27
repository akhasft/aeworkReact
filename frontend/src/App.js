import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./Screens/HomeScreen";

import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import UserListScreen from "./Screens/UserListScreen";
import UserEditScreen from "./Screens/UserEditScreen";
import UpdateHomeScreen from "./Screens/UpdateHomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          {/* admin routers */}
          <Route exact path="/admin/userlist" component={UserListScreen} />
          <Route exact path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route
            exact
            path="/admin/updatehomepage"
            component={UpdateHomeScreen}
          />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
