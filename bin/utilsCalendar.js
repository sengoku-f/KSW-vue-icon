let DD = "17";
let MMM = "7月";
try {
  const time = new Date();
  const locale = "zh-cn";
  DD = time.getDate();
  MMM = time.toLocaleString(locale, { month: "short" }).toUpperCase();
} catch {}
