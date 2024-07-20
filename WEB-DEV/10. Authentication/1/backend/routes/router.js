const {signUp, login, forgotPassword,resetPassword, verifyRoute, logout} = require("../controller/Authentication");
const router = require("express").Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword/:token", resetPassword);
router.get("/verify", verifyRoute)
router.get("/logout", logout)
module.exports = router;