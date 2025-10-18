import bcrypt from "bcrypt";

const password = "9531977";
const saltRounds = 10;

bcrypt.hash(password, saltRounds).then((hash) => {
  console.log("Hashed password:", hash);
});
