import React, { useState, ChangeEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { useStore } from 'stores';
import { observer } from 'mobx-react-lite';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Footprints from 'images/svg/footprints.svg';
import Monument from 'images/svg/monument.svg';
import CocktailDrink from 'images/svg/cocktail-drink.svg';
import ShoppingBag from 'images/svg/shopping-bag.svg';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
      backgroundColor: '#ffffff',
    },
    appBarBottom: {
      position: 'fixed',
      top: 'auto',
      bottom: 0,
      padding: '10px',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    gutters: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(1),
    },
    mainDivider: {
      height: '2px',
      backgroundColor: '#673AB7',
    },
    divider: {
      marginTop: '22px',
      marginBottom: '22px',
    },
    container: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
    location: {
      marginTop: '33px',
      marginBottom: '28px',
      background: '#FAFAFA',
    },
    price: {
      marginTop: '22px',
    },
    sliderMarked: {
      marginBottom: theme.spacing(2),
    },
    circle: {
      background: 'linear-gradient(180deg, #7C46DB 0%, #512DA8 100%)',
    },
    circleImg: {
      width: 20,
      height: 20,
    },
    activityItem: {
      paddingLeft: 0,
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    addLangButton: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(7),
    },
    langChip: {
      marginRight: '13px',
    },
  }),
);

const marks = [
  {
    value: 0,
    label: '$0',
  },
  {
    value: 100,
    label: '$100',
  },
];

const images = [
  { path: Footprints, text: 'Прогулка по городу' },
  { path: Monument, text: 'Поход по музеям' },
  { path: CocktailDrink, text: 'Бары, рестораны' },
  { path: ShoppingBag, text: 'Шоппинг' },
];

function valuetext(value: number) {
  return `$${value}`;
}

const Transition = React.forwardRef<unknown, TransitionProps>(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  },
);

export const Filter = observer(() => {
  const { uiStore } = useStore();
  const classes = useStyles();
  const [location, setLocation] = useState('Могилев, Беларусь');

  const handleClose = () => {
    // uiStore.closeFilter();
  };

  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleToggle = () => {
    //
  };

  const handleDelete = () => {
    //
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={uiStore.isFilterOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
        scroll="body"
      >
        <AppBar className={classes.appBar} color="default" elevation={0}>
          <Toolbar classes={{ gutters: classes.gutters }}>
            <Typography variant="h6" className={classes.title}>
              Фильтр
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Divider className={classes.mainDivider} />
        <Box className={classes.container}>
          <TextField
            className={classes.location}
            label="Местоположение"
            value={location}
            onChange={handleLocationChange}
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <Divider />
          <Typography className={classes.price} gutterBottom>
            Цена
          </Typography>
          <Slider
            value={value}
            onChange={handleChange}
            defaultValue={20}
            getAriaValueText={valuetext}
            aria-labelledby="range-slider"
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
            classes={{ marked: classes.sliderMarked }}
          />
          <Divider className={classes.divider} />
          <Typography className={classes.price} gutterBottom>
            Предпочтения
          </Typography>
          <List dense>
            {images.map((image, index) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem key={index} button className={classes.activityItem}>
                  <ListItemAvatar>
                    <Avatar
                      className={classes.circle}
                      alt={`Avatar n°${index + 1}`}
                      src={image.path}
                      classes={{ img: classes.circleImg }}
                    />
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={image.text} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      edge="end"
                      onChange={handleToggle}
                      inputProps={{ 'aria-labelledby': labelId }}
                      color="primary"
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
          <Divider className={classes.divider} />
          <Typography className={classes.price} gutterBottom>
            Языки
          </Typography>
          <Chip
            className={classes.langChip}
            label="Русский"
            onDelete={handleDelete}
          />
          <Chip label="Английский" onDelete={handleDelete} />
          <Box>
            <Button color="primary" className={classes.addLangButton}>
              <AddIcon className={classes.leftIcon} />
              Добавить язык
            </Button>
          </Box>
        </Box>
        <Button
          className={classes.appBarBottom}
          color="primary"
          variant="contained"
          fullWidth
        >
          Фильтровать
        </Button>
      </Dialog>
    </div>
  );
});
