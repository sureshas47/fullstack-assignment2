// Function to check if user data is default
function isUserDataDefault(userInfo) {
  // For example, if all fields are undefined or have default values
  return (
    !userInfo ||
    Object.values(userInfo.toObject()).every(
      (value) => value === undefined || value === "default"
    )
  );
}
module.exports = { isUserDataDefault };
