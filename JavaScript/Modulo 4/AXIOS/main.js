axios
  .get("https://api.github.com/users/saliba65")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.warn(error);
  });
