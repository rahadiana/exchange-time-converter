const { GeTime } = require("./TimeFormatter");


function convertTime(val) {
    const PArseTime = GeTime(val)
    const GetJam = PArseTime.HH;
    const GetMenit = PArseTime.MM;
    const Get10Detik = PArseTime.SS.substring(0, 1);
    const Get1Minute = GetMenit.substring(1, 2);
    const Get10Minute = GetMenit.substring(0, 1);
    const Get5Minutes = Get10Minute + Get1Minute == '00' ? Get10Minute + '0' : Get10Minute + Get1Minute < Get10Minute + 5 ? Get10Minute + 0 : Get10Minute + 5
    const Get15Minute =  Math.ceil((parseInt(GetMenit)+1) / 15).toString();
    const Get20Minute =  Math.ceil((parseInt(GetMenit)+1) / 20).toString();
    const Get30Minute =  Math.ceil((parseInt(GetMenit)+1) / 30).toString();
    const Get2Jam = Math.floor(parseInt(GetJam) / 2) + 1;

    const Prev10Detik = Get10Detik == '0' ? '5' : (Get10Detik - 1).toString();
    const Prev1Minute = Get1Minute == '0' ? '9' : (Get1Minute - 1).toString();
    const Prev5Minutes = Get5Minutes == '00' ? '55' : Get5Minutes == '05' ? '00' : (Get5Minutes - 5).toString()
    const Prev10Minute = Get10Minute == '0' ? '9' : (Get10Minute - 1).toString();
    const Prev15Minute = Get15Minute == 1 ? '4' : (Get15Minute - 1).toString();
    const Pre20Minute = Get20Minute == 1 ? '3' : (Get20Minute - 1).toString();
    const Pre30Minute = Get30Minute == 1 ? '2' : (Get30Minute - 1).toString();
    const PreJam = GetJam == '00' ? '23' : ((GetJam - 1)<9?'0'+(GetJam - 1):GetJam - 1).toString();
    const PreGet2Jam = Get2Jam == 1 ?12: parseInt(Get2Jam-1);
  
    return {
      year:PArseTime.Y,
      month:PArseTime.M,
      date:PArseTime.D,
      GetJam: GetJam, GetMenit: GetMenit, Get10Detik: Get10Detik, Get1Minute: Get1Minute, Get5Minutes: Get5Minutes, Get10Minute: Get10Minute,Get15Minute:Get15Minute,
      Get20Minute:Get20Minute,
      Get30Minute:Get30Minute,
      Get2Jam:Get2Jam,
      Prev10Detik: Prev10Detik,
      Prev1Minute: Prev1Minute,
      Prev5Minutes: Prev5Minutes,
      Prev10Minute: Prev10Minute,
      Prev15Minute:Prev15Minute,
      Pre20Minute:Pre20Minute,
      Pre30Minute:Pre30Minute,
      PreJam:PreJam,
      PreGet2Jam:PreGet2Jam
    }
  }


  module.exports =  {convertTime};