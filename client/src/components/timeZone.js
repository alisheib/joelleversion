const timeZones = [
	{ timezoneid: 1, gmtadjustment: "GMT-12:00", usedaylighttime: 0, value: "12", countries: "(GMT-12:00) International Date Line West" },
	{ timezoneid: 2, gmtadjustment: "GMT-11:00", usedaylighttime: 0, value: "11", countries: "(GMT-11:00) Midway Island, Samoa" },
	{ timezoneid: 3, gmtadjustment: "GMT-10:00", usedaylighttime: 0, value: "10", countries: "(GMT-10:00) Hawaii" },
	{ timezoneid: 4, gmtadjustment: "GMT-09:00", usedaylighttime: 1, value: "9", countries: "(GMT-09:00) Alaska" },
	{ timezoneid: 5, gmtadjustment: "GMT-08:00", usedaylighttime: 1, value: "8", countries: "(GMT-08:00) Pacific Time (US &amp; Canada" },
	{ timezoneid: 6, gmtadjustment: "GMT-08:00", usedaylighttime: 1, value: "8", countries: "(GMT-08:00) Tijuana, Baja California" },
	{ timezoneid: 7, gmtadjustment: "GMT-07:00", usedaylighttime: 0, value: "7", countries: "(GMT-07:00) Arizona" },
	{ timezoneid: 8, gmtadjustment: "GMT-07:00", usedaylighttime: 1, value: "7", countries: "(GMT-07:00) Chihuahua, La Paz, Mazatlan" },
	{ timezoneid: 9, gmtadjustment: "GMT-07:00", usedaylighttime: 1, value: "7", countries: "(GMT-07:00) Mountain Time (US &amp; Canada" },
	{ timezoneid: 10, gmtadjustment: "GMT-06:00", usedaylighttime: 0, value: "6", countries: "(GMT-06:00) Central America" },
	{ timezoneid: 11, gmtadjustment: "GMT-06:00", usedaylighttime: 1, value: "6", countries: "(GMT-06:00) Central Time (US &amp; Canada)" },
	{ timezoneid: 12, gmtadjustment: "GMT-06:00", usedaylighttime: 1, value: "6", countries: "(GMT-06:00) Guadalajara, Mexico City, Monterrey" },
	{ timezoneid: 13, gmtadjustment: "GMT-06:00", usedaylighttime: 0, value: "6", countries: "(GMT-06:00) Saskatchewan" },
	{ timezoneid: 14, gmtadjustment: "GMT-05:00", usedaylighttime: 0, value: "5", countries: "(GMT-05:00) Bogota, Lima, Quito, Rio Branco" },
	{ timezoneid: 15, gmtadjustment: "GMT-05:00", usedaylighttime: 1, value: "5", countries: "(GMT-05:00) Eastern Time (US &amp; Canada)" },
	{ timezoneid: 16, gmtadjustment: "GMT-05:00", usedaylighttime: 1, value: "5", countries: "(GMT-05:00) Indiana (East)" },
	{ timezoneid: 17, gmtadjustment: "GMT-04:00", usedaylighttime: 1, value: "4", countries: "(GMT-04:00) Atlantic Time (Canada)" },
	{ timezoneid: 18, gmtadjustment: "GMT-04:00", usedaylighttime: 0, value: "4", countries: "(GMT-04:00) Caracas, La Paz" },
	{ timezoneid: 19, gmtadjustment: "GMT-04:00", usedaylighttime: 0, value: "4", countries: "(GMT-04:00) Manaus" },
	{ timezoneid: 20, gmtadjustment: "GMT-04:00", usedaylighttime: 1, value: "4", countries: "(GMT-04:00) Santiago" },
	{ timezoneid: 21, gmtadjustment: "GMT-03:30", usedaylighttime: 1, value: "3.5", countries: "(GMT-03:30) Newfoundland" },
	{ timezoneid: 22, gmtadjustment: "GMT-03:00", usedaylighttime: 1, value: "3", countries: "(GMT-03:00) Brasilia" },
	{ timezoneid: 23, gmtadjustment: "GMT-03:00", usedaylighttime: 0, value: "3", countries: "(GMT-03:00) Buenos Aires, Georgetown" },
	{ timezoneid: 24, gmtadjustment: "GMT-03:00", usedaylighttime: 1, value: "3", countries: "(GMT-03:00) Greenland" },
	{ timezoneid: 25, gmtadjustment: "GMT-03:00", usedaylighttime: 1, value: "3", countries: "(GMT-03:00) Montevideo" },
	{ timezoneid: 26, gmtadjustment: "GMT-02:00", usedaylighttime: 1, value: "2", countries: "(GMT-02:00) Mid-Atlantic" },
	{ timezoneid: 27, gmtadjustment: "GMT-01:00", usedaylighttime: 0, value: "1", countries: "(GMT-01:00) Cape Verde Is." },
	{ timezoneid: 28, gmtadjustment: "GMT-01:00", usedaylighttime: 1, value: "1", countries: "(GMT-01:00) Azores" },
	{ timezoneid: 29, gmtadjustment: "GMT+00:00", usedaylighttime: 0, value: "0", countries: "(GMT+00:00) Casablanca, Monrovia, Reykjavik" },
	{ timezoneid: 30, gmtadjustment: "GMT+00:00", usedaylighttime: 1, value: "0", countries: "(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh,Lisbon, London" },
	{ timezoneid: 31, gmtadjustment: "GMT+01:00", usedaylighttime: 1, value: "1", countries: "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm,Vienna" },
	{ timezoneid: 32, gmtadjustment: "GMT+01:00", usedaylighttime: 1, value: "1", countries: "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana,Prague" },
	{ timezoneid: 33, gmtadjustment: "GMT+01:00", usedaylighttime: 1, value: "1", countries: "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris" },
	{ timezoneid: 34, gmtadjustment: "GMT+01:00", usedaylighttime: 1, value: "1", countries: "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb" },
	{ timezoneid: 35, gmtadjustment: "GMT+01:00", usedaylighttime: 1, value: "1", countries: "(GMT+01:00) West Central Africa" },
	{ timezoneid: 36, gmtadjustment: "GMT+02:00", usedaylighttime: 1, value: "2", countries: "(GMT+02:00) Amman" },
	{ timezoneid: 37, gmtadjustment: "GMT+02:00", usedaylighttime: 1, value: "2", countries: "(GMT+02:00) Athens, Bucharest, Istanbul" },
	{ timezoneid: 38, gmtadjustment: "GMT+02:00", usedaylighttime: 1, value: "2", countries: "(GMT+02:00) Beirut" },
	{ timezoneid: 39, gmtadjustment: "GMT+02:00", usedaylighttime: 1, value: "2", countries: "(GMT+02:00) Cairo" },
	{ timezoneid: 40, gmtadjustment: "GMT+02:00", usedaylighttime: 0, value: "2", countries: "(GMT+02:00) Harare, Pretoria" },
	{ timezoneid: 41, gmtadjustment: "GMT+02:00", usedaylighttime: 1, value: "2", countries: "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius" },
	{ timezoneid: 42, gmtadjustment: "GMT+02:00", usedaylighttime: 1, value: "2", countries: "(GMT+02:00) Jerusalem" },
	{ timezoneid: 43, gmtadjustment: "GMT+02:00", usedaylighttime: 1, value: "2", countries: "(GMT+02:00) Minsk" },
	{ timezoneid: 44, gmtadjustment: "GMT+02:00", usedaylighttime: 1, value: "2", countries: "(GMT+02:00) Windhoek" },
	{ timezoneid: 45, gmtadjustment: "GMT+03:00", usedaylighttime: 0, value: "3", countries: "(GMT+03:00) Kuwait, Riyadh, Baghdad" },
	{ timezoneid: 46, gmtadjustment: "GMT+03:00", usedaylighttime: 1, value: "3", countries: "(GMT+03:00) Moscow, St. Petersburg, Volgograd" },
	{ timezoneid: 47, gmtadjustment: "GMT+03:00", usedaylighttime: 0, value: "3", countries: "(GMT+03:00) Nairobi" },
	{ timezoneid: 48, gmtadjustment: "GMT+03:00", usedaylighttime: 0, value: "3", countries: "(GMT+03:00) Tbilisi" },
	{ timezoneid: 49, gmtadjustment: "GMT+03:30", usedaylighttime: 1, value: "3.5", countries: "(GMT+03:30) Tehran" },
	{ timezoneid: 50, gmtadjustment: "GMT+04:00", usedaylighttime: 0, value: "4", countries: "(GMT+04:00) Abu Dhabi, Muscat" },
	{ timezoneid: 51, gmtadjustment: "GMT+04:00", usedaylighttime: 1, value: "4", countries: "(GMT+04:00) Baku" },
	{ timezoneid: 52, gmtadjustment: "GMT+04:00", usedaylighttime: 1, value: "4", countries: "(GMT+04:00) Yerevan" },
	{ timezoneid: 53, gmtadjustment: "GMT+04:30", usedaylighttime: 0, value: "4.5", countries: "(GMT+04:30) Kabul" },
	{ timezoneid: 54, gmtadjustment: "GMT+05:00", usedaylighttime: 1, value: "5", countries: "(GMT+05:00) Yekaterinburg" },
	{ timezoneid: 55, gmtadjustment: "GMT+05:00", usedaylighttime: 0, value: "5", countries: "(GMT+05:00) Islamabad, Karachi, Tashkent" },
	{ timezoneid: 56, gmtadjustment: "GMT+05:30", usedaylighttime: 0, value: "5.5", countries: "(GMT+05:30) Sri Jayawardenapura" },
	{ timezoneid: 57, gmtadjustment: "GMT+05:30", usedaylighttime: 0, value: "5.5", countries: "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi" },
	{ timezoneid: 58, gmtadjustment: "GMT+05:45", usedaylighttime: 0, value: "5.75", countries: "(GMT+05:45) Kathmandu" },
	{ timezoneid: 59, gmtadjustment: "GMT+06:00", usedaylighttime: 1, value: "6", countries: "(GMT+06:00) Almaty, Novosibirsk" },
	{ timezoneid: 60, gmtadjustment: "GMT+06:00", usedaylighttime: 0, value: "6", countries: "(GMT+06:00) Astana, Dhaka" },
	{ timezoneid: 61, gmtadjustment: "GMT+06:30", usedaylighttime: 0, value: "6.5", countries: "(GMT+06:30) Yangon (Rangoon)" },
	{ timezoneid: 62, gmtadjustment: "GMT+07:00", usedaylighttime: 0, value: "7", countries: "(GMT+07:00) Bangkok, Hanoi, Jakarta" },
	{ timezoneid: 63, gmtadjustment: "GMT+07:00", usedaylighttime: 1, value: "7", countries: "(GMT+07:00) Krasnoyarsk" },
	{ timezoneid: 64, gmtadjustment: "GMT+08:00", usedaylighttime: 0, value: "8", countries: "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi" },
	{ timezoneid: 65, gmtadjustment: "GMT+08:00", usedaylighttime: 0, value: "8", countries: "(GMT+08:00) Kuala Lumpur, Singapore" },
	{ timezoneid: 66, gmtadjustment: "GMT+08:00", usedaylighttime: 0, value: "8", countries: "(GMT+08:00) Irkutsk, Ulaan Bataar" },
	{ timezoneid: 67, gmtadjustment: "GMT+08:00", usedaylighttime: 0, value: "8", countries: "(GMT+08:00) Perth" },
	{ timezoneid: 68, gmtadjustment: "GMT+08:00", usedaylighttime: 0, value: "8", countries: "(GMT+08:00) Taipei" },
	{ timezoneid: 69, gmtadjustment: "GMT+09:00", usedaylighttime: 0, value: "9", countries: "(GMT+09:00) Osaka, Sapporo, Tokyo" },
	{ timezoneid: 70, gmtadjustment: "GMT+09:00", usedaylighttime: 0, value: "9", countries: "(GMT+09:00) Seoul" },
	{ timezoneid: 71, gmtadjustment: "GMT+09:00", usedaylighttime: 1, value: "9", countries: "(GMT+09:00) Yakutsk" },
	{ timezoneid: 72, gmtadjustment: "GMT+09:30", usedaylighttime: 0, value: "9.5", countries: "(GMT+09:30) Adelaide" },
	{ timezoneid: 73, gmtadjustment: "GMT+09:30", usedaylighttime: 0, value: "9.5", countries: "(GMT+09:30) Darwin" },
	{ timezoneid: 74, gmtadjustment: "GMT+10:00", usedaylighttime: 0, value: "10", countries: "(GMT+10:00) Brisbane" },
	{ timezoneid: 75, gmtadjustment: "GMT+10:00", usedaylighttime: 1, value: "10", countries: "(GMT+10:00) Canberra, Melbourne, Sydney" },
	{ timezoneid: 76, gmtadjustment: "GMT+10:00", usedaylighttime: 1, value: "10", countries: "(GMT+10:00) Hobart" },
	{ timezoneid: 77, gmtadjustment: "GMT+10:00", usedaylighttime: 0, value: "10", countries: "(GMT+10:00) Guam, Port Moresby" },
	{ timezoneid: 78, gmtadjustment: "GMT+10:00", usedaylighttime: 1, value: "10", countries: "(GMT+10:00) Vladivostok" },
	{ timezoneid: 79, gmtadjustment: "GMT+11:00", usedaylighttime: 1, value: "11", countries: "(GMT+11:00) Magadan, Solomon Is., New Caledonia" },
	{ timezoneid: 80, gmtadjustment: "GMT+12:00", usedaylighttime: 1, value: "12", countries: "(GMT+12:00) Auckland, Wellington" },
	{ timezoneid: 81, gmtadjustment: "GMT+12:00", usedaylighttime: 0, value: "12", countries: "(GMT+12:00) Fiji, Kamchatka, Marshall Is." },
	{ timezoneid: 82, gmtadjustment: "GMT+13:00", usedaylighttime: 0, value: "13", countries: "(GMT+13:00) Nuku'alofa" },
];

export default function mapTimeZones() {
	return timeZones.map(zone => <option timezoneid={zone.timezoneid} gmtadjustment={zone.gmtadjustment} usedaylighttime={zone.usedaylighttime} value={zone.value}>{zone.countries}</option>)
}