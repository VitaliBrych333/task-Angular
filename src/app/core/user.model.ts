interface Users {
  id?: number,
  fakeToken?: string,
  name?: {
      first?: string,
      last?: string
    },
  login?: string,
  password?: string
}

export class User implements Users {
  id?: number;
  fakeToken?: string;
  name?: {
      first?: string,
      last?: string
    };
  login?: string;
  password?: string;

  constructor(
    // userId: number,
    //           userToken: string,
    //           userFirstName: string,
    //           userLaststName: string,
    //           userLogin: string,
    //           userPassword: string
              ) {

    // this.id = userId;
    // this.fakeToken = userToken;
    // this.name.first = userFirstName;
    // this.name.last = userLaststName;
    // this.login = userLogin;
    // this.password = userPassword;
  }

}
