const jwtencrypt = require("jwt-token-encrypt");

class AuthExtentions {
  async encryption() {
    const encryption = {
      key: "AAAAAAAAAAAAAA",
      algorithm: "aes-256-cbc"
    };
    const publicData = {
      role: "user"
    };
    const jwtDetails = {
      secret: "1234567890",
      key: "ThisIsMyAppISS"
    };
    const privateData = {
      email: "Christopher",
      bank: "Gringotts",
      password: "Really Secure Password"
    };
    const token = await jwtencrypt.generateJWT(
      jwtDetails,
      publicData,
      encryption,
      privateData
    );

    return token;
  }
  async DecryptToken() {
    //logic for extracting web token data
  }
}
module.exports = AuthExtentions;
