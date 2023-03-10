import { User } from "../interface/User";

export const userStatus: {
  firstUser: User;
  secondUser: User;
} = {
  firstUser: {
    name: "",
    decideCard: "",
    selectNumber: 0,
  },
  secondUser: {
    name: "",
    decideCard: "",
    selectNumber: 0,
  },
};

export const winLoseStatus: {
  winUser: User;
  loseUser: User;
} = {
  winUser: {
    name: "",
    decideCard: "",
    selectNumber: 0,
  },
  loseUser: {
    name: "",
    decideCard: "",
    selectNumber: 0,
  },
};
