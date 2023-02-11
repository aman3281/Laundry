import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "700px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "700px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    // paddingTop: "2rem",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  navDiv: {
    background: "white",
    marginTop: "-8px",
    marginLeft: "-30px",
    width: "104%",
    padding: "5px",
  },
  logout: {
    // background: "red",
    padding: "1rem",
    borderRadius: "1rem",
    marginLeft: ".5rem",
    borderBottom: "2px solid Black",
    "&:hover": {
      background: "skyblue",
      color: "white",
    },
  },
}));
