function getUser(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      name: "John",
      birthday: new Date(),
    });
  }, 1000);
}

function getUserPhone(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      phone: "123456789",
      ddd: 11,
    });
  }, 2000);
}

function getUserAddress(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      street: "Av. Paulista",
      number: 123,
    });
  }, 2000);
}

getUser((error, user) => {
  if (error) {
    console.error("Error on get user", error);
    return;
  }

  getUserPhone(user.id, (error1, phone) => {
    if (error1) {
      console.error("Error on get user phone", error);
      return;
    }
    getUserAddress(user.id, (error2, address) => {
      if (error2) {
        console.error("Error on get user address", error);
        return;
      }
      console.log(
        `Nome: ${user.name}, Endereço: ${address.street}, ${address.number}, Telefone: (${phone.ddd}) ${phone.phone}`
      );
    });
  });
});