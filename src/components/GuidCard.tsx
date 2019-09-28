import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ChatIcon from "images/svg/Chat.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      position: "relative",
      maxWidth: 500
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    }
  })
);

export default function RecipeReviewCard({
  fullName,
  description,
  price,
  rate,
  reviewCount,
  imgSrc
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title="Paella dish"
        />
        <CardHeader title={`${fullName}, ${price}$`} subheader={description} />
      </CardActionArea>
      <CardContent>
        {/* <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography> */}
        rate to be here
      </CardContent>
      <div style={{ position: "absolute" }}>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <BookmarkIcon />
          </IconButton>
          <IconButton aria-label="share">
            <img alt="Chat icon" src={ChatIcon}></img>
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}
