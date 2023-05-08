import React, { useEffect, useState } from "react";

function Time({inpTime}) {
  const [time, setTime] = useState(new Date({inpTime}).toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return <div>{time}</div>;
}

export default Time;
