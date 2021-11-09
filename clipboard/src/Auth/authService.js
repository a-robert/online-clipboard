export default class AuthService {
  static isAuthenticated = false;

  static signIn(callback) {
    AuthService.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  }

  static signOut(callback) {
    AuthService.isAuthenticated = false;
    setTimeout(callback, 100);
  }
}
