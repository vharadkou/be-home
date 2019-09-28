import { action, configure, observable, runInAction } from "mobx";

import AliceImage from "images/guide/Alice.jpg";
import DmitryImage from "images/guide/Dmitry.jpg";

configure({ enforceActions: "always" });

export class UiStore {
  @observable public isFilterOpen: boolean = false;

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
              id: 2,
              fullName: "Дмитрий Панковский",
              description: "Привет! Hi! Aloha! Я покажу вам лучшие маршруты моего города!",
              price: 0,
              rate: 5,
              reviewCount: 10,
              imgSrc: DmitryImage
            },
            {
              id: 1,
              fullName: "Алеся Костюшко",
              description: "Я активный турист. Предлагаю вам сходить со мной в сплав по Ресте.",
              price: 0,
              rate: 4,
              reviewCount: 6,
              imgSrc: AliceImage
            }
          ];
          this.isMasterPageLoading = false;
        }),
      2000
    );
  };
  // #endregion guieds
}
