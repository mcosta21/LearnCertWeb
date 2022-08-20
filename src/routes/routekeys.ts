export enum RouterKey {
  Home = "/",
  Login = "/login",
  CertificationLearn = "/certification/learn",
  CertificationForm = "/certification/form",
  CertificationList = "/certification/list",
  Management = "/management"
}

class RouterKeyValue {
  key: RouterKey;
  value: string;

  constructor(key: string) {
    this.key = key as RouterKey;
    this.value = RouterKey[key];
  }
}

export const RouterKeys = Object.keys(RouterKey).map(x => {
  return new RouterKeyValue(x);
}) as RouterKeyValue[];
