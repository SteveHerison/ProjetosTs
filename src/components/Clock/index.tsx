import { useEffect, useState } from "react";
import { CurrentTime } from "../functions/CurrentTime";

const Clock = () => {
  const [time, setTime] = useState(CurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = CurrentTime();
      setTime(currentTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const StyleHorario = () => {
    if (time.horasNumber >= 0 && time.horasNumber < 12) {
      return "bg-gradient-to-r from-yellow-400 to-yellow-600"; // Manhã (Bom dia)
    } else if (time.horasNumber >= 12 && time.horasNumber < 18) {
      return "bg-gradient-to-r from-orange-400 to-orange-600"; // Tarde (Boa tarde)
    }
    return "bg-gradient-to-r from-blue-500 to-blue-800"; // Noite (Boa noite)
  };

  const CurrentHorario = () => {
    if (time.horasNumber >= 0 && time.horasNumber < 12) {
      return "Bom dia";
    } else if (time.horasNumber >= 12 && time.horasNumber < 18) {
      return "Boa tarde";
    }
    return "Boa noite";
  };

  return (
    <div
      className={` ${StyleHorario()} w-full h-full flex items-center justify-center`}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex text-8xl">
          <p>{`${time.horasString}:${time.minutosString}`}</p>
        </div>
        <p className="text-3xl font-bold">{CurrentHorario()}</p>
      </div>
    </div>
  );
};

export default Clock;
