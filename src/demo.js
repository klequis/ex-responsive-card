import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import iSummerUnlocked from "./summer-unlocked.jpg";

const styles = {
  card: {
    maxWidth: 345,
    fontFamily: "Roboto"
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    height: "40px",
    letterSpacing: "0px",
    lineHeight: "19px",
    margin: 0,
    maxHeight: "40px",
    // minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis"
    // whiteSpace: "nowrap"
  },
  titleTwo: {
    textOverflow: "ellipsis"
  },
  media: {
    height: 0,
    // paddingTop: "56.25%" // 16:9
    paddingTop: "50%" // 16:9
  }
};

function SimpleMediaCard(props) {
  const { classes, title } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={iSummerUnlocked}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="headline"
            component="div"
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
