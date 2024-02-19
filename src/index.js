const app = require("./app/app");
require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server berhasil dirunning di port ${PORT}`);
});
