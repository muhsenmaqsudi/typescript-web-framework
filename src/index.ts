import { User } from "./models/User";

const user = new User({});

user.events.on("change", () => {
  console.log("changeed");
});

user.events.trigger("change");
