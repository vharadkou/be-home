import { action, configure, observable } from 'mobx';

configure({ enforceActions: 'always' });

export class UiStore {
  @observable public isFilterOpen: boolean = false;

  @action public openFilter = () => {
    this.isFilterOpen = true;
  };

  @action public closeFilter = async () => {
    this.isFilterOpen = false;
  };
}
