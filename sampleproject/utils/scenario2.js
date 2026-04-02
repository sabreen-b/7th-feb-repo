class UtilityClass{
   generateAlphaNumeric() {
  return "user_" + Date.now();   // ✅ return added
}

 generatePhoneNumber() {
  return Math.floor(1000000000 + Math.random() * 9000000000);
}
}

module.exports = {UtilityClass};  // ✅ moved outside
