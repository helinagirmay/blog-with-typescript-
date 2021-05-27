import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  select: {
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    margin: "4% 5% 4% 5%",
    // margin: theme.spacing(1),
    minWidth: "90%",
  },
  graph: {
    alignItems: "center",
    justifyContent: "center",
    margin: "4% 1% 4% 10%",
    height: 400,
    width: "50%",
  },
}));
