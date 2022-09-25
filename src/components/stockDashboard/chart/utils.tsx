export const convertDate = (date: Date): string =>
  date.getHours().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  }) +
  ":" +
  date.getMinutes().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
