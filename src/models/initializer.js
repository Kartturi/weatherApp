import initialApiCall from "./Initial";
import startTime from "../views/clock-time";
import setNumbers from "../views/times";

export default function initialize() {
  initialApiCall();
  startTime();
  setNumbers();
}
