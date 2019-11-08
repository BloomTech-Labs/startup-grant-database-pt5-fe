// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Drawer } from "@material-ui/core";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import SettingsIcon from "@material-ui/icons/Settings";

// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex"
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0
//   },
//   drawerPaper: {
//     width: drawerWidth
//   },
//   toolbar: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing(3)
//   }
// }));

// const pages = [
//   {
//     title: "Dashboard",
//     href: "/dashboard",
//     icon: <DashboardIcon />
//   },
//   {
//     title: "Settings",
//     href: "/settings",
//     icon: <SettingsIcon />
//   }
// ];

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

// const SideBar = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper
//         }}
//         anchor="left"
//       >
//         <div className={classes.toolbar} />
//         <Divider />
//         <List>
//           {pages.map(page => (
//             <ListItemLink button key={page.title} href={page.href}>
//               <ListItemIcon>{page.icon}</ListItemIcon>
//               <ListItemText primary={page.title} />
//             </ListItemLink>
//           ))}
//         </List>
//         <Divider />
//       </Drawer>
//     </div>
//   );
// };

// export default SideBar;
