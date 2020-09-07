import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

export const mainListItems = (
  <div>
    <NavLink to="/">
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </NavLink>
    <NavLink to="/Courses">
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="Courses" />
      </ListItem>
    </NavLink>
    <NavLink to="/College">
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="College" />
      </ListItem>
    </NavLink>
    <NavLink to="/Teachers">
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="Teachers" />
      </ListItem>
    </NavLink>
    <ListItem button>
      <ListItemIcon></ListItemIcon>
      <ListItemText primary="Students" />
    </ListItem>
    <ListItem button>
      <ListItemIcon></ListItemIcon>
      <ListItemText primary="Attendance" />
    </ListItem>
    <ListItem button>
      <ListItemIcon></ListItemIcon>
      <ListItemText primary="Fees" />
    </ListItem>
    <ListItem button></ListItem>
  </div>
);
