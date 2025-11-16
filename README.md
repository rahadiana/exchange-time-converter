# exchange-time-converter

Utilitas untuk mengkonversi timestamp menjadi berbagai representasi waktu (jam, menit, detik, pembulatan, dan nilai sebelumnya) dalam UTC+0.

## Penggunaan

```javascript
const { convertTime } = require('./index');

const timestamp = Date.now(); // atau timestamp milidetik lainnya
const result = convertTime(timestamp);

console.log(result);
// Output: objek dengan year, month, date, GetJam, dll. sebagai number
```

## Contoh Output

```javascript
{
  year: 2025,
  month: 11,
  date: 16,
  GetJam: 10,        // Jam dalam UTC
  GetMenit: 14,      // Menit
  Get10Detik: 0,     // Digit pertama detik
  Get1Minute: 4,     // Digit kedua menit
  Get5Minutes: 10,   // Pembulatan ke kelipatan 5 menit
  Get10Minute: 1,    // Digit pertama menit
  Get15Minute: 1,    // Pembulatan ke kelipatan 15 menit
  Get20Minute: 1,    // Pembulatan ke kelipatan 20 menit
  Get30Minute: 1,    // Pembulatan ke kelipatan 30 menit
  Get2Jam: 6,        // Pembulatan jam ke kelipatan 2
  Prev10Detik: 5,    // Nilai sebelumnya untuk Get10Detik
  Prev1Minute: 3,    // dll.
  Prev5Minutes: 5,
  Prev10Minute: 0,
  Prev15Minute: 4,
  Pre20Minute: 3,
  Pre30Minute: 2,
  PreJam: 9,
  PreGet2Jam: 5
}
```

## Error Handling

Jika input bukan number valid, return `{ error: "Invalid timestamp: input must be a valid number" }`.

## Catatan

- Semua waktu dalam UTC+0.
- Output adalah number, bukan string.
- Lihat folder `_test` untuk contoh demo.
