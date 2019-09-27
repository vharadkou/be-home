import { action, configure, observable, runInAction } from 'mobx';
import { firebaseConfig } from 'firebase.conf';
import firebase from 'firebase';

configure({ enforceActions: 'always' });

export class AuthStore {
  @observable public isLoggedIn: boolean = false;

  @action public readSession = () => {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`,
    );

    if (user) {
      this.isLoggedIn = true;
    }
  };

  @action public login = async () => {
    await firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION);

    try {
      const res = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      if (res.user) {
        runInAction(() => (this.isLoggedIn = true));
      }
    } catch (err) {
      console.error(err);
    }
  };

  @action public logout = async () => {
    await firebase.auth().signOut();
    runInAction(() => (this.isLoggedIn = false));
  };
}
