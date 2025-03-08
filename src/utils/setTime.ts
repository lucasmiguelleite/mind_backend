import { DateTime } from 'luxon';

export function setTime(): Date | undefined | string {
  return DateTime.now().setZone('America/Sao_Paulo').minus({ hours: 3 }).toJSDate();
}