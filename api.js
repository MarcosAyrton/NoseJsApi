const express = require("express");

const app = express();

const port = 3000;

const userRoutes = require("./routes/users.routes");

app.use(express.json());
app.use("/api", userRoutes);

// Port
app.listen(port, () => {
  console.log(`Servidor corriendo en localhost:${port}`);
});
