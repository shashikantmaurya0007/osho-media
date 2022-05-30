import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "shashi",
    lastName: "Maurya",
    username: "shashi1",
    email: "shashimourya1@gmail.com",
    password: "shashi1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
