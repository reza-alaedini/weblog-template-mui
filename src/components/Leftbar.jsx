import React from "react";

import {
  makeStyles,
  Container,
  Avatar,
  Typography,
  ImageList,
  ImageListItem,
  Link,
  Divider,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: "0",
  },
  onlineText: {
    color: "#555",
  },
  imgGallery: {
    left: "auto",
    height: "100%",
    position: "relative",
    transform: "translateX(0%)",
    right: "0%",
    top: "0%",
  },
  sectionTitle: {},
  linkSection: {
    marginRight: "10px",
    color: "#4496ee",
  },
}));

function Leftbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.onlineText} gutterBottom>
        دوستان آنلاین
      </Typography>
      <AvatarGroup max={4} style={{ marginBottom: "20px", overflow: "hidden" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://v4.mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://v4.mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://v4.mui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://v4.mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>

      <Typography className={classes.onlineText} gutterBottom>
        گالری
      </Typography>
      <ImageList rowHeight={100} cols={3} style={{ marginBottom: "20px" }}>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/breakfast.jpg"
            alt="gallery pic"
            className={classes.imgGallery}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/burgers.jpg"
            alt="gallery pic"
            className={classes.imgGallery}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/hats.jpg"
            alt="gallery pic"
            className={classes.imgGallery}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/camera.jpg"
            alt="gallery pic"
            className={classes.imgGallery}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/morning.jpg"
            alt="gallery pic"
            className={classes.imgGallery}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/star.jpg"
            alt="gallery pic"
            className={classes.imgGallery}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/plant.jpg"
            alt="gallery pic"
            className={classes.imgGallery}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/olive.jpg"
            alt="gallery pic"
            className={classes.imgGallery}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/bike.jpg"
            alt="gallery pic"
            className={classes.imgGallery}
          />
        </ImageListItem>
      </ImageList>

      <Typography className={classes.onlineText} gutterBottom>
        دسته بندی ها
      </Typography>
      <Link component="button" href="" className={classes.linkSection}>
        ورزشی
      </Link>
      <Link component="button" href="" className={classes.linkSection}>
        سیاسی
      </Link>
      <Divider flexItem style={{ marginBottom: "10px" }} />
      <Link component="button" href="" className={classes.linkSection}>
        علمی
      </Link>
      <Link component="button" href="" className={classes.linkSection}>
        هنری
      </Link>
    </Container>
  );
}

export default Leftbar;
