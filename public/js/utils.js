// UF has late classes with special codes, this strips them and returns an integer
export function convertToNum(inputTime) {
  switch (inputTime) {
    case "E1":
      return 12;
      break;
    case "E2":
      return 13;
      break;
    case "E3":
      return 14;
      break;
    default:
      return inputTime;
      break;
  }
}