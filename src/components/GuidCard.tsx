import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      position: "relative",
      maxWidth: 500
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    text: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "24px"
    },
    smallText: {
      fontSize: "14px"
    }
  })
);

const ITEM_HEIGHT = 48;

const LongMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200
          }
        }}
      >
        <MenuItem onClick={handleClose}>
          <span className={clsx(classes.text, classes.smallText)}>
            Отправить сообщение
          </span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span className={clsx(classes.text, classes.smallText)}>
            Добавить в закладки
          </span>
        </MenuItem>
      </Menu>
    </>
  );
};

const rateView = rate => {
  const stars: Array<any> = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      i < rate ? (
        <StarIcon style={{ color: "#FDBA62", width: "16px", height: "16px" }} />
      ) : (
        <StarBorderIcon
          style={{ color: "#BDBDBD", width: "16px", height: "16px" }}
        />
      )
    );
  }
  return stars.map(star => star);
};

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
        <CardMedia className={classes.media} image={imgSrc} title="" />
      </CardActionArea>
      <CardHeader
        style={{ paddingBottom: "0px", marginBottom: "0px" }}
        action={<LongMenu />}
        title={<span className={classes.text}>{fullName}</span>}
        subheader={
          <span className={clsx(classes.text, classes.smallText)}>
            «{description}»
          </span>
        }
        disableTypography={false}
      />
      <CardContent
        style={{
          paddingTop: "0px",
          paddingBottom: "0px",
          marginTop: "4px",
          marginBottom: "4px"
        }}
      >
        {rateView(rate)}
      </CardContent>
    </Card>
  );
}
