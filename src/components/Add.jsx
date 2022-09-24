import React, { useState } from "react";

import {
  Button,
  Container,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  tooltip: {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    [theme.breakpoints.down("xs")]: {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "auto",
    backgroundColor: "#fff",
    width: 550,
    height: 580,
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  item: {
    width: "100%",
    marginTop: theme.spacing(3),
    direction: "rtl",
  },
  multilineField: {
    marginTop: theme.spacing(3),
    "& .MuiFormControl-root": {
      "& .MuiFormLabel-root": {
        right: "-129px",
      },
    },
  },
  cancelBtn: {
    marginRight: theme.spacing(4),
  },
  accessLevel: {
    width: "100%",
  },
  accLevelLabel: {
    width: "95%",
    transformOrigin: "top right",
  },
  accLevelSelect: {
    top: "450ox",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Add() {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <Tooltip title="افزودن پست" aria-label="add" arrow>
        <Fab
          color="primary"
          className={classes.tooltip}
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Container className={classes.container}>
          <form className={classes.form}>
            <div className={classes.item}>
              <TextField placeholder="عنوان" style={{ width: "100%" }} />
            </div>
            <div className={classes.multilineField}>
              <TextField
                label="محتوای شما"
                multiline
                rows={4}
                defaultValue="داستانت را بگو ..."
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <FormControl className={classes.accessLevel}>
                <InputLabel className={classes.accLevelLabel}>
                  نوع دسترسی
                </InputLabel>
                <Select className={classes.accLevelSelect}>
                  <MenuItem value="public">عمومی</MenuItem>
                  <MenuItem value="private">خصوصی</MenuItem>
                  <MenuItem value="friends">دوستان</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.item}>
              <FormControl component="fieldset">
                <FormLabel component="legend" color="primary">
                  دسترسی کامنت گذاری؟
                </FormLabel>
                <RadioGroup color="primary">
                  <FormControlLabel
                    value="everybody"
                    control={<Radio color="primary" />}
                    label="برای همه"
                    color="primary"
                  />
                  <FormControlLabel
                    value="friends"
                    control={<Radio color="primary" />}
                    label="دوستان من"
                  />
                  <FormControlLabel
                    value="nobody"
                    control={<Radio color="primary" />}
                    label="هیچکس"
                  />
                  <FormControlLabel
                    value="premium"
                    disabled
                    control={<Radio color="primary" />}
                    label="سفارشی (کاربران ویژه)"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setOpenAlert(true)}
              >
                ارسال
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
                className={classes.cancelBtn}
              >
                انصراف
              </Button>
            </div>
          </form>
        </Container>
      </Modal>

      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success">
          پست با موفقیت ارسال شد !
        </Alert>
      </Snackbar>
    </>
  );
}

export default Add;
