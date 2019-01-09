import { useEffect, useState } from "react";
import Moment from "moment";

const TimeComponent = ({ format }) => {
  const [time, setTime] = useState("0000");

  useEffect(
    () => {
      setTime(Moment().format(format || "HHmm"));
    },
    [time]
  );

  return time;
};

export default TimeComponent;
