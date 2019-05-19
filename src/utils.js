import csv from "csvtojson";

export const magCode = async () => {
  const response = await fetch.get(
    "https://raw.githubusercontent.com/lukewiwa/code_of_points_MAG_2020/master/code_of_points_MAG_2020.csv",
    { responseType: "text" }
  );
  const text = response.data;
  const table = await csv({
    ignoreColumns: /(id|index)/
  }).fromString(text);
  return table;
};
