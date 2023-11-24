const logout = async (req, res) => {
  req.session.destroy();
  res.clearCookie("connect.sid");
  res.write("Logged out successfully");
  res.redirect("/");
};

// if session exists, user is logged in else not
const isUserLoggedIn = (req, res, next) => {
  if (req.session.userId) {
    console.log("user is logged in");
    return true;
  } else {
    console.log("user is not logged in");
    return false;
  }
};

module.exports = { logout, isUserLoggedIn };
