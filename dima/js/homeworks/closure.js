function makeUser() {

  return {
    getName: function () {
      return user.name;
    },
    setName: function (name) {
      if (name === false || name === undefined || name === "" || name === null) {
        return;
      } else {
        user.name = name;
      }
    }
  }
}


let user = makeUser();