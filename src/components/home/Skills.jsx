import React from "react";
import { Jumbotron, Container, Row } from "react-bootstrap";
import {Tooltip, Avatar} from "@mui/material";

const Skills = ({frontend, backend}) => {
  return (
    <Jumbotron fluid className="bg-white m-0" id="skills">
      <Container className="text-center my-5 section section-lg">
          <h2 className="display-4 mb-5 text-center">
              Skills
          </h2>
        <Row className="justify-content-md-center">
          {frontend.map((skill) => {
            return (
              <Tooltip
              title={skill.name}
              placement="top"
              arrow
              >
                <Avatar style={{padding: "1.8rem", backgroundColor: "#6699cc", marginRight: "1rem"}}>
                <i class={skill.icon} style={{color: "White", fontSize: "2rem"}}></i>
                </Avatar>
              </Tooltip>
            );
          })}
        </Row>
        <Row className="justify-content-md-center" style={{paddingTop: "2rem"}}>
          {backend.map((skill) => {
            return (
              <Tooltip
              title={skill.name}
              placement="top"
              arrow
              >
                <Avatar style={{padding: "1.8rem", backgroundColor: "#6699cc", marginRight: "1rem"}}>
                <i class={skill.icon} style={{color: "White", fontSize: "2rem"}}></i>
                </Avatar>
              </Tooltip>
            );
          })}
        </Row>
			</Container>
    </Jumbotron>
  );
}

export default Skills;
