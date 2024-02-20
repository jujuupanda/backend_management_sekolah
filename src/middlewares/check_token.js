const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware untuk pengecekan token
const checkToken = (req, res, next) => {
  // Dapatkan token dari header Authorization
  const token = req.header("Authorization");

  // Jika token tidak tersedia
  if (!token) {
    return res.status(401).json({ message: "Token dibutuhkan!!" });
  }

  // Verifikasi token
  const tokenValid = jwt.verify(token, JWT_SECRET);
  if (tokenValid) {
    next();
  } else {
    return res.status(401).json({ message: "Token tidak valid!!" });
  }
};
module.exports = checkToken;
