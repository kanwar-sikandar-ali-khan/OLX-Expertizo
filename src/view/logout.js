import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import { useHistory } from "react-router-dom";
import { logout } from "../config/firebase";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function LogoutButton({ logout }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => logout()}
      >
        Logout
      </Button>
    </div>
  );
}
