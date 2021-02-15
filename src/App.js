import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { ItemData } from "./ItemData";
import DataTable from "./DataTable";
import "./App.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    margin: "250px auto",
    maxWidth: "1200px",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  item: {
    flexDirection: "column",
    alignItems: "baseline",
  },
  itemWrap: {
    display: "flex",
    alignItems: "center",
  },
  dropdown: {
    display: "none",
    padding: "8px",
    maxHeight: "350px",
    overflow: "hidden",
    overflowY: "auto",
    width: "100%",
  },
  dropDownLink: {
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    cursor: "pointer",
    padding: "10px 0px",
  },
  dropDownWrap: {
    padding: "10px 0px",
  },
  active: {
    display: "block",
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [menu, setMenuActive] = React.useState(ItemData);
  function setMenu(id) {
    setMenuActive(
      menu.map((item, index) => {
        if (index === id) {
          item.active = !item.active;
        }
        return item;
      })
    );
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            React-Task
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menu.map((item, index) => (
            <ListItem
              button
              key={index}
              className={classes.item + (item.active ? " active" : "")}
              onClick={() => setMenu(index)}
            >
              <div className={classes.itemWrap}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
                {item.children && <ArrowDropDownIcon />}
              </div>
              {item.children && (
                <div className={classes.dropdown + " dropdown"}>
                  {item.children.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={(classes.dropDownWrap, "dropDownLink")}
                      >
                        <a href="#!" className={classes.dropDownLink}>
                          {item.text}
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <DataTable />
        </div>
      </main>
    </div>
  );
}
