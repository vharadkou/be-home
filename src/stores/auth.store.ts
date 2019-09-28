import { action, configure, observable, runInAction } from 'mobx';
import { firebaseConfig } from 'firebase.conf';
import firebase from 'firebase';

configure({ enforceActions: 'always' });

export class AuthStore {
  @observable public isLoggedIn: boolean = false;

  constructor(private routerStore: any) {}

  @action public readSession = () => {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`,
    );

    if (user) {
      this.isLoggedIn = true;
      this.routerStore.push('/guides');
    }
  };
  @action public register = async (login: any, password: any) => {
    try {
      const reg = await firebase
        .auth()
        .createUserWithEmailAndPassword(login, password);
      if (reg.user) {
        runInAction(() => (this.isLoggedIn = true));
        this.login(login, password);
      }
    } catch (err) {
      console.log(err);
    }
  };

  @action public login = async (login: any, password: any) => {
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(login, password);
      if (res.user) {
        runInAction(() => (this.isLoggedIn = true));
        this.routerStore.push('/guides');
      }
    } catch (err) {
      this.register(login, password);
    }
  };

  providerGmail = new firebase.auth.GoogleAuthProvider();
  providerFB = new firebase.auth.FacebookAuthProvider();

  @action public loginGmail = async () => {
    await firebase
      .auth()
      .signInWithPopup(this.providerGmail)
      .then(res => {
        let user = res.user;
        if (user) {
          runInAction(() => (this.isLoggedIn = true));
          this.routerStore.push('/guides');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action public loginFB = async () => {
    await firebase
      .auth()
      .signInWithPopup(this.providerFB)
      .then(res => {
        if (res.user) {
          runInAction(() => (this.isLoggedIn = true));
          this.routerStore.push('/guides');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action public logout = async () => {
    await firebase.auth().signOut();
    runInAction(() => (this.isLoggedIn = false));
  };
}
