class DataUtil {
  static generateName() {
  return "user_" + Math.random().toString(36).substring(2, 8);
}

  static generateEmail(name) {
    return `${name}@gmail.com`;
  }

  static generatePhone() {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  }
}

module.exports = { DataUtil };