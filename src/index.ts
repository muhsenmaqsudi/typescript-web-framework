import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const collection = User.builderUserCollection();

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
