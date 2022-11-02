import React from "react";
import { CsvFile } from "csv";

export const title = "Code Of Points";
export const layout = "layouts/Base.tsx";

const excludeCols = [0, 4];

const filterCols = (value: string, i: number) => {
  if (!excludeCols.includes(i)) {
    return value;
  }
};

const csv = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/lukewiwa/code_of_points_MAG_2020/master/code_of_points_MAG_2020.csv",
  );
  const text = await response.text();
  const tmpFile = await Deno.makeTempFile();
  await Deno.writeTextFile(tmpFile, text);
  const csvFile = await Deno.open(tmpFile);
  const csv = new CsvFile(csvFile);

  const data = [];
  const headers = await (await csv.readHeader()).filter(filterCols);
  await csv.seekRecord(1);
  for await (const record of csv) {
    const filteredRecord = record.filter(filterCols);
    data.push(filteredRecord);
  }
  return { headers, data };
};

export default async () => {
  const { headers, data } = await csv();
  const widths = [{ width: "110px" }, { width: "60px" }, { width: "75px" }, {
    width: null,
  }];
  return (
    <table>
      <colgroup>
        {headers.map((_, i) => {
          const { width } = widths[i];
          if (width) return <col key={i} width={width} />;
          return <col key={i} />;
        })}
      </colgroup>
      <thead>
        <tr>
          {headers.map((header) => <th key={header}>{header.toLocaleUpperCase()}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => <tr key={i}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}
      </tbody>
    </table>
  );
};
