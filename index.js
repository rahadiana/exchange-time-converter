const { GeTime } = require("./TimeFormatter");


function convertTime(val) {
    const parsedVal = parseInt(val);
    if (isNaN(parsedVal)) {
        return { error: "Invalid timestamp: input must be a valid number" };
    }
    const PArseTime = GeTime(parsedVal)
    const year = PArseTime.Y;
    const month = PArseTime.M;
    const date = PArseTime.D;
    const hours = PArseTime.HH;
    const minutes = PArseTime.MM;
    const seconds = PArseTime.SS;

    // Efficient calculations using math operations
    const GetJam = hours;
    const GetMenit = minutes;
    const Get10Detik = Math.floor(seconds / 10);
    const Get1Minute = minutes % 10;
    const Get10Minute = Math.floor(minutes / 10);
    const Get5Minutes = Math.floor(minutes / 5) * 5; // Round down to nearest 5 minutes
    const Get15Minute = Math.ceil((minutes + 1) / 15);
    const Get20Minute = Math.ceil((minutes + 1) / 20);
    const Get30Minute = Math.ceil((minutes + 1) / 30);
    const Get2Jam = Math.floor(hours / 2) + 1;

    const Prev10Detik = Get10Detik === 0 ? 5 : Get10Detik - 1;
    const Prev1Minute = Get1Minute === 0 ? 9 : Get1Minute - 1;
    const Prev5Minutes = Get5Minutes === 0 ? 55 : Get5Minutes === 5 ? 0 : Get5Minutes - 5;
    const Prev10Minute = Get10Minute === 0 ? 9 : Get10Minute - 1;
    const Prev15Minute = Get15Minute === 1 ? 4 : Get15Minute - 1;
    const Pre20Minute = Get20Minute === 1 ? 3 : Get20Minute - 1;
    const Pre30Minute = Get30Minute === 1 ? 2 : Get30Minute - 1;
    const PreJam = hours === 0 ? 23 : hours - 1;
    const PreGet2Jam = Get2Jam === 1 ? 12 : Get2Jam - 1;
  
    return {
      year, month, date,
      GetJam, GetMenit, Get10Detik, Get1Minute, Get5Minutes, Get10Minute, Get15Minute,
      Get20Minute, Get30Minute, Get2Jam,
      Prev10Detik, Prev1Minute, Prev5Minutes, Prev10Minute, Prev15Minute, Pre20Minute, Pre30Minute, PreJam, PreGet2Jam
    }
  }


  module.exports =  {convertTime};
