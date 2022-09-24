import React, { Fragment } from "react";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  postImage: {
    height: 250,
    [theme.breakpoints.down("sm")]:{
        height: 150,
    }
  },
  myCard: {
    marginTop: theme.spacing(5),
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Card className={classes.myCard}>
        <CardActionArea>
          <CardMedia
            image="https://mag.parsnews.com/wp-content/uploads/2022/06/Most-Beautiful-Nature-Wallpapers-Top-Free-Most-Beautiful-25.jpg"
            title="عکس برای پست اول"
            className={classes.postImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              عنوان پست
            </Typography>
            <Typography gutterBottom variant="body">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            بیشتر بخوانید
          </Button>
          <Button size="small" color="primary">
            اشتراک گذاری
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default Post;
