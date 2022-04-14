import { DateTime } from 'luxon'

export default class DateService {
  /* constructor can accept values here to be used in toDate method
   * or we can directy isntantiate value to be used below
   */

  public defaultFormat = 'dd MM yyyy'

  constructor(defaultFormat: string | null = null) {
    this.defaultFormat = defaultFormat ?? this.defaultFormat
  }

  public static toDateTime(date: DateTime | null = null, time: DateTime | null = null) {
    let dateTime = DateTime.now()

    if (date) {
      dateTime = dateTime.set({
        year: date.year,
        month: date.month,
        day: date.day,
      })
    }

    if (time) {
      dateTime = dateTime.set({
        hour: time.hour,
        minute: time.minute,
        second: time.second,
      })
    }

    return dateTime
  }

  public toDate(dateTime: DateTime = DateTime.now(), format: string = this.defaultFormat) {
    // dateTime.toFormat('dd MM yyyy')
    // dateTime.toFormat(this.defaultFormat)
    return dateTime.toFormat(format)
  }
}

/* singleton services provide same instance throughout app lifetime
 * to create singleton service remove 'export default' from above
 * and instantiate like this
 * export default new DateService()
 * but static methods wont work
 */
