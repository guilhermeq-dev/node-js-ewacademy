function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({ id: 1, name: "John", birthday: new Date() });
    }, 1000);
  });
}

function getUserPhone(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({ phone: "92345-6789", ddd: 11 });
    }, 2000);
  });
}

function getUserAddress(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        street: "Av. Paulista",
        number: 123,
      });
    }, 2000);
  });
}

const user = getUser();

user.then((user) => {
  return getUserPhone(user.id).then((phone) => {
    return getUserAddress(user.id).then((address) => {
      console.log(
        `
        Nome: ${user.name}, 
        Endereço: ${address.street}, ${address.number}, 
        Telefone: (${phone.ddd}) ${phone.phone}
        `
      );
    });
  });
});

// getUser((error, user) => {
//   if (error) {
//     console.error("Error on get user", error);
//     return;
//   }

//   getUserPhone(user.id, (error1, phone) => {
//     if (error1) {
//       console.error("Error on get user phone", error);
//       return;
//     }
//     getUserAddress(user.id, (error2, address) => {
//       if (error2) {
//         console.error("Error on get user address", error);
//         return;
//       }
//       console.log(
//         `Nome: ${user.name}, Endereço: ${address.street}, ${address.number}, Telefone: (${phone.ddd}) ${phone.phone}`
//       );
//     });
//   });
// });
