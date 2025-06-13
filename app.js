const express = require("express");
const userModel = require("./models/user");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  let allUsers = await userModel.find();
  res.render("read", { users: allUsers });
});

app.get("/delete/:id", async (req, res) => {
  let { id } = req.params;
  let deletedUser = await userModel.findByIdAndDelete(id);
  res.redirect("/read");
});

app.get("/edit/:id", async (req, res) => {
  let { id } = req.params;
  let user = await userModel.findById(id);
  res.render("edit", { user });
});

app.post("/update/:id", async (req, res) => {
  let { id } = req.params;
  let { name, email, image } = req.body;

  let updatedUser = await userModel.findByIdAndUpdate(
    id,
    {
      name,
      email,
      image,
    },
    { new: true }
  );

  res.redirect("/read");
});

app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;

  let user = await userModel.create({
    name,
    email,
    image,
  });

  res.redirect("/read");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
