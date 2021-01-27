import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { loadPage, updatePage } from "../actions/pageActions";
import { PAGE_UPDATE_RESET } from "../constants/pageConstants";

const UpdateHomeScreen = ({ history }) => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [accentColor, setAccentColor] = useState("");
  const [instaUrl, setInstaUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [codepenUrl, setCodepenUrl] = useState("");
  const [mail, setMail] = useState("");
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [aboutMeHeading, setAboutMeHeading] = useState("");
  const [aboutMeDescription, setAboutMeDescription] = useState("");
  const [position, setPosition] = useState("");
  const [workHeading, setWorkHeading] = useState("");

  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const { loading, pageInfo, error } = page;

  const pageUpdate = useSelector((state) => state.pageUpdate);

  const {
    loading: updateLoading,
    success: updateSuccess,
    error: updateError,
  } = pageUpdate;

  useEffect(() => {
    if (updateSuccess) {
      dispatch({ type: PAGE_UPDATE_RESET });
      history.push("/");
    } else {
      if (!page || !pageInfo.heading) {
        dispatch(loadPage());
      } else {
        setBackgroundColor(pageInfo.backgroundColor);
        setPrimaryColor(pageInfo.primaryColor);
        setAccentColor(pageInfo.accentColor);
        setInstaUrl(pageInfo.instaUrl);
        setGithubUrl(pageInfo.githubUrl);
        setCodepenUrl(pageInfo.codepenUrl);
        setMail(pageInfo.mail);
        setHeading(pageInfo.heading);
        setSubHeading(pageInfo.subHeading);
        setAboutMeHeading(pageInfo.aboutMeHeading);
        setAboutMeDescription(pageInfo.aboutMeDescription);
        setPosition(pageInfo.position);
        setWorkHeading(pageInfo.workHeading);
      }
    }
  }, [dispatch, page, updateSuccess, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updatePage({
        backgroundColor,
        primaryColor,
        accentColor,
        instaUrl,
        githubUrl,
        codepenUrl,
        mail,
        heading,
        subHeading,
        aboutMeHeading,
        aboutMeDescription,
        position,
        workHeading,
      })
    );
  };

  return (
    <>
      <Link to="/admin" className="btn btn-primary">
        Go Back
      </Link>
      <FormContainer style={{ background: "#fff !important" }}>
        <h1 className="text-light">Update HomePage</h1>

        {updateLoading && <Loader />}
        {updateError && <Message variant="danger">{updateError}</Message>}

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">error</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>backgroundColor</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter background Color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="AccentColor">
              <Form.Label>Accent Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Accent Color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="primaryColor">
              <Form.Label>PrimaryColor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Primary Color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="instaUrl">
              <Form.Label>Instagram Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter instagram url"
                value={instaUrl}
                onChange={(e) => setInstaUrl(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="githubUrl">
              <Form.Label>Github url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter GitHub Url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="codepenUrl">
              <Form.Label>code pen Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Code pen url"
                value={codepenUrl}
                onChange={(e) => setCodepenUrl(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="mail">
              <Form.Label>mail</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email id"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="Heading">
              <Form.Label>Heading</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Heading"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="subHeading">
              <Form.Label>Sub Heading</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Sub Heading"
                value={subHeading}
                onChange={(e) => setSubHeading(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="position">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="AboutMeHeading">
              <Form.Label>About Me Heading</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter AboutMeHeading"
                value={aboutMeHeading}
                onChange={(e) => setAboutMeHeading(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="AboutMeDescription">
              <Form.Label>About Me Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter About Me Description"
                value={aboutMeDescription}
                onChange={(e) => setAboutMeDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="workHeading">
              <Form.Label>Work Heading</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Work Heading"
                value={workHeading}
                onChange={(e) => setWorkHeading(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="info">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UpdateHomeScreen;
