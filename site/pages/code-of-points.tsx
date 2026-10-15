import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { Base } from "../components/Base";
import { isDev, paths } from "../config";

const CSV_URL =
  "https://raw.githubusercontent.com/lukewiwa/code_of_points_MAG_2020/master/code_of_points_MAG_2020.csv";

/** id and index are internal to the scrape and mean nothing to a reader. */
const HIDDEN_COLUMNS = new Set(["id", "index"]);

/** RFC 4180: quoted fields may contain commas, newlines and doubled quotes. */
const parseCsv = (text: string): string[][] => {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else field += c;
  }
  if (field || row.length) rows.push([...row, field]);
  return rows;
};

const fetchCsv = async () => {
  // The dev server rebuilds on every save; don't hit GitHub each time.
  const cached = path.join(paths.cache, "code-of-points.csv");
  if (isDev) {
    try {
      return await readFile(cached, "utf8");
    } catch {}
  }
  const response = await fetch(CSV_URL);
  if (!response.ok) {
    throw new Error(`Code of points CSV: HTTP ${response.status}`);
  }
  const text = await response.text();
  await mkdir(paths.cache, { recursive: true });
  await writeFile(cached, text);
  return text;
};

export const CodeOfPoints = async () => {
  const [header, ...rows] = parseCsv(await fetchCsv());
  const keep = header
    .map((name, i) => (HIDDEN_COLUMNS.has(name) ? -1 : i))
    .filter((i) => i >= 0);

  return (
    <Base url="/projects/code-of-points/" title="Code Of Points">
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
        Code Of Points
      </h1>
      <div className="-mx-4 overflow-x-auto px-4">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-stone-300 text-xs uppercase tracking-wide text-stone-500 dark:border-stone-700">
            <tr>
              {keep.map((i) => (
                <th key={i} className="py-2 pr-4 font-semibold whitespace-nowrap">
                  {header[i]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
            {rows.map((row, r) => (
              <tr key={r}>
                {keep.map((i) => (
                  <td key={i} className="py-1.5 pr-4 align-top">
                    {row[i]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Base>
  );
};
