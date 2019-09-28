import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'stores';
import Box from '@material-ui/core/Box';
import { events } from './events-data';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    marginBottom: '12px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  text: {
    fontSize: '1rem',
  },
  textSmall: {
    fontSize: '0.875rem',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  cardHeader: {
    paddingTop: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.87)',
  },
  date: {
    textTransform: 'lowercase',
  },
}));

export const Events = observer(() => {
  const classes = useStyles();
  const { uiStore } = useStore();

  useEffect(() => {
    uiStore.loadGuides();
  }, [uiStore]);

  const formatedDate = (date: Date) => {
    const digestDate: number = date.getDate();
    const digestMonth: string = date
      .toLocaleString('ru', { month: 'short' })
      .toUpperCase();
    const digestYear: number = date.getFullYear();

    return `${digestDate} ${digestMonth} ${digestYear}`;
  };

  return (
    <Box className={classes.root}>
      {events.map((event, index) => (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={event.path} title="" />
          </CardActionArea>
          <CardHeader
            className={classes.cardHeader}
            title={<span className={classes.text}>{event.title}</span>}
            subheader={
              <>
                <div>
                  <span className={classes.textSmall}>{event.description}</span>
                </div>
                <div className={classes.date}>{formatedDate(event.date)}</div>
              </>
            }
            disableTypography={false}
          />
        </Card>
      ))}
    </Box>
  );
});
