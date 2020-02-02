import { observable, action } from "mobx";
import { enableLogging } from "mobx-logger";

class User {
  @observable name = "";
}

class Store {
  @observable user = "yang";

  @action.bound UserChange() {
    this.user = "cesi";
  }
}
enableLogging(User);
enableLogging(Store);
var store = new Store();

export default store;
