import { action, configure, observable, runInAction } from "mobx";

import AliceImage from 'images/guide/Alice.jpg'
import DmitryImage from 'images/guide/Dmitry.jpg'

configure({ enforceActions: "always" });

export class UiStore {
  @observable public isFilterOpen: boolean = true;

  @observable public isMasterPageLoading: boolean = false;

  @action public openFilter = () => {
    this.isFilterOpen = true;
  };

  @action public closeFilter = async () => {
    this.isFilterOpen = false;
  };

  // #region guieds
  @observable public guides: Array<any> = [];

  @action public loadGuides = async () => {
    this.isMasterPageLoading = true;
    setTimeout(
      () =>
        runInAction(() => {
          this.guides = [
            {
              id: 1,
              fullName: "Алеся Костюшко",
              description: "Покажу вам все свои дырки",
              price: 0,
              rate: 4,
              reviewCount: 6,
              imgSrc: AliceImage,
            },
            {
              id: 2,
              fullName: "Дмитрий Панковский",
              description: "Вы останитесь довольны мной",
              price: 0,
              rate: 5,
              reviewCount: 10,
              imgSrc: DmitryImage,
            }
          ];
          this.isMasterPageLoading = false;
        }),
      2000
    );
  };
  // #endregion guieds
}
