import { UserList, MovieList } from "../Data.js";
import _ from "lodash";
// const { UserList } = require("../Data");
const resolvers = {
  Query: {
    users() {
      return UserList;
    },
    user(parent, args) {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    movies() {
      return MovieList;
    },
    movie(parent, args) {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },

  Users: {
    favoriteMovies() {
      return _.filter(
        MovieList,
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2015
      );
    },
  },

  Mutation: {
    createUsers(parent, args) {
      const user = args.input;
      const lastid = UserList[UserList.length - 1].id;
      user.id = lastid + 1;
      UserList.push(user);
      return user;
    },
    updateUsername(parent, args) {
      const { id, newUserName } = args.input;
      let userUpdate;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUserName;
          userUpdate = user;
        }
      });
      return userUpdate;
    },
    deleteUsers(parent, args) {
      const id = args.id;
      _.remove(UserList, (user) => user.id === Number(id));
      return null;
    },
  },
};

export { resolvers };
