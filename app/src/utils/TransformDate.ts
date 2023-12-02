import { DateTime } from "luxon";

/** FIXME: Time is coming with +3H on first render
 */
export function TransformDateTime(date: Date, mode: "date" | "time") {
  if (mode === "date") {
    return DateTime.fromISO(date.toISOString()).toFormat("dd.MM.yyyy");
  } else {
    return DateTime.fromISO(date.toISOString())
      .setZone("utc")
      .toFormat("HH:mm");
  }
}
