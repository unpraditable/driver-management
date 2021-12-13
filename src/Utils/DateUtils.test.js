import DateUtils from "./DateUtils";

describe("DateUtils", () => {
  const isoDate = "2011-12-27T08:14:51.174Z";
  test("_dateToMiliseconds", () => {
    expect(DateUtils._dateToMiliseconds(isoDate)).toEqual(1324973691174);
  });
  test("convertDate", () => {
    expect(DateUtils.convertDate(isoDate)).toEqual("27-12-2011");
  });
});
