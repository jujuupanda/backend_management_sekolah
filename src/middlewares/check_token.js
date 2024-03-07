const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware untuk pengecekan token
const checkToken = (req, res, next) => {
  // Dapatkan token dari header Authorization
  const token = req.header("Authorization");

  // Verifikasi token
  jwt.verify(token, JWT_SECRET, function (err, decoded) {
    if (err) {
      return res.status(401).json({ message: err });
    } else {
      next();
    }
  });
};
module.exports = checkToken;
