export default class DriverService {
  static async fetchDrivers() {
    const response = await fetch("https://randomuser.me/api/?results=30").catch(
      (e) => console.error(e)
    );
    const drivers = await response.json();
    return drivers.results;
  }
}
