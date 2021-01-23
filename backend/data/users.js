import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin user",
    email: "zackh41@gmail.com",
    password: bcrypt.hashSync("000123", 10),
    isAdmin: true,
  },
];

export default users;
