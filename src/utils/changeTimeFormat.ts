export const chageeTimeFormat = (utc_time: string) => {
  let date = new Date(utc_time);
  return date.toLocaleDateString();
};
