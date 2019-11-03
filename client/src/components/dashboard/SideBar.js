import React from "react";
import clsx from "clsx";
import { Divider, Drawer } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import { makeStyles } from "@material-ui/styles";

import SidebarNav from "./SideBarNav";

const useStyles = makeStyles({
  drawer: {
    width: 240
  },
  root: {
    backgroundColor: "#000000",
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  divider: {
    margin: "5px"
  },
  nav: {
    marginBottom: "10px"
  }
});

const SideBar = props => {
  const { open, variant, onClose, className, ...rest } = props;
  const classes = useStyles();
  const pages = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <DashboardIcon />
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

export default SideBar;
