import React, { useState } from 'react';
import { useStore } from 'stores';
import { observer } from 'mobx-react-lite';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import authLogo from 'images/png/logoAuth.png';
import FormControl from '@material-ui/core/FormControl';
import gmailIcon from 'images/svg/gmailIcon.svg';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  createUser: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    marginBottom: '27.5px',
  },
  iconMargin: {
    marginRight: '5px',
  },
  textWelcome: {
    fontSize: '24px',
    fontWeight: 'normal',
    lineHeight: '55px',
  },
  textFind: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '24px',
    textAlign: 'center',
  },
  imgWelcome: {
    width: '117px',
    height: '72px',
  },
  socialAuth: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textAuth: {
    fontSize: '12px',
    color: '#707070',
    lineHeight: '24px',
  },
}));

export const Auth = observer(() => {
  const { authStore } = useStore();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  const handleLogin = async () => {
    await authStore.login(login, password);
  };

  const onChangeLogin = (event: any) => {
    setLogin(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const onClickGmailIcon = async () => {
    await authStore.loginGmail();
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img src={authLogo} alt="" className={classes.imgWelcome} />

          <Typography className={classes.textWelcome}>
            Добро пожаловать
          </Typography>
          <Typography className={classes.textFind}>
            Узнавайте новое о городе с людьми, которые живут в нем
          </Typography>
          <FormControl className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login"
              label="Логин"
              onChange={onChangeLogin}
              value={login}
              placeholder="Введите логин"
              name="login"
              autoFocus
              autoComplete="off"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={onChangePassword}
              value={password}
              name="password"
              label="Пароль"
              placeholder="Введите пароль"
              type="password"
              id="password"
              autoComplete="off"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Запомнить меня"
            />
            <Button
              type="submit"
              onClick={handleLogin}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Войти
            </Button>
          </FormControl>
          <div>
            <span className={classes.textAuth}>Войти с помощью</span>
            <div className={classes.socialAuth}>
              <img src={gmailIcon} alt="" onClick={onClickGmailIcon} />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
});
