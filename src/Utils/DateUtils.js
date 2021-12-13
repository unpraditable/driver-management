export default class DateUtils {
  static _dateToMiliseconds(isoDate) {
    return Date.parse(isoDate);
  }

  static convertDate(isoDate) {
    const miliseconds = this._dateToMiliseconds(isoDate);
    const dateObject = new Date(miliseconds);
    const month = dateObject.toLocaleString("en-US", { month: "numeric" });
    const date = dateObject.toLocaleString("en-US", { day: "numeric" });
    const year = dateObject.toLocaleString("en-US", { year: "numeric" });

    const concatedDate = `${date}-${month}-${year}`;
    return concatedDate;
  }
}
