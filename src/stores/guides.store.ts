import { action } from 'mobx';
import firebase from 'firebase';

export class GuidesStore {
  @action public loadGuides = async () => {
    const callableFunction = firebase
      .functions()
      .httpsCallable('callableFunction');

    const result = await callableFunction({ text: 'some text' });
    console.log(result);
  };
}
