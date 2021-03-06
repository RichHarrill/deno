// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
import { open, openSync } from "./files.ts";
import { readAll, readAllSync } from "./buffer.ts";

/** Reads and returns the entire contents of a file.
 *
 *       const decoder = new TextDecoder("utf-8");
 *       const data = Deno.readFileSync("hello.txt");
 *       console.log(decoder.decode(data));
 *
 * Requires `allow-read` permission. */
export function readFileSync(path: string): Uint8Array {
  const file = openSync(path);
  const contents = readAllSync(file);
  file.close();
  return contents;
}

/** Reads and resolves to the entire contents of a file.
 *
 *       const decoder = new TextDecoder("utf-8");
 *       const data = await Deno.readFile("hello.txt");
 *       console.log(decoder.decode(data));
 *
 * Requires `allow-read` permission. */
export async function readFile(path: string): Promise<Uint8Array> {
  const file = await open(path);
  const contents = await readAll(file);
  file.close();
  return contents;
}
