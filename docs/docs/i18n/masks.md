# Masks

## Mask Targets

Masks are used to properly format and/or parse dates for `VCalendar` and `VDatePicker`.

| Property Name | Target Area | Default Mask |
| ------------ | ----------- | -------------- |
| `title` | Calendar header title | `"MMMM YYYY"` |
| `weekdays` | Calendar weekday headers | `"W"` |
| `navMonths` | Month labels in navigation dropdown | `"MMM"` |
| `dayPopover` | Date header in day popover when user hovers selected date | `"WWW, MMM D, YYYY"` |
| `data` | Parses attribute dates, if needed | `["L", "YYYY-MM-DD", "YYYY/MM/DD"]` |
| `modelValue` | Date picker model value when using `v-model.string` modifier | `"iso"` |
| `input` | Date picker input element text when `is-inline === false` | `["L", "YYYY-MM-DD", "YYYY/MM/DD"]` |

### Parsing using multiple masks

Note how an array was used to specify the `input` mask for `VDatePicker`. This is because it uses the supplied masks(s) to parse, as well as display, the selected date. The first supplied mask is used to display the date selection, while all masks are used (from first to last) to parse the date string. The first successfully parsed date is used as the selected date. This provides more flexibility for the user when manually typing in dates.

By default, `VDatePicker` will first try and use the localized long date mask to parse the date, but will also try to parse masks that are globally unambiguous (*YYYY-MM-DD* and *YYYY/MM/DD*). Furthermore, because `VDatePicker` uses its own parsing logic ([rather than relying on the browser's inconsistent `Date.parse` function](http://blog.dygraphs.com/2012/03/javascript-and-dates-what-mess.html)), it can properly parse ISO-8601 dates to the user's local time zone instead of converting to UTC.

If you plan on targeting browsers from multiple locales, it is probably best to defer to the default mask settings.

## Mask Tokens

Use the following tokens to configure your custom masks:

| | Token | Output |
| -------- | ----- | ------ |
| **Month** | `M` | 1, 2, ..., 12 |
| | `MM` | 01, 02, ..., 12 |
| | `MMM` | Jan, Feb, ..., Dec |
| | `MMMM` | January, February, ..., December |
| **Day of Month** | `D` | 1, 2, ..., 31 |
| | `DD` | 01, 02, ..., 31 |
| | `Do` | 1st, 2nd, ..., 31st |
| **Day of Week** | `d` | 1, 2, ..., 7 |
| | `d` | 1, 2, ..., 7 |
| | `dd` | 01, 02, ..., 07 |
| | `W` | S, M, ..., S |
| | `WW` | Su, Mo, ..., Sa |
| | `WWW` | Sun, Mon, ..., Sat |
| | `WWWW` | Sunday, Monday, ..., Saturday |
| **Year** | `YY` | 70, 71, ... 69 |
| | `YYYY` | 1970, 1971, ..., 2069 |
| **Long Date** | `L` | 01/21/1983 (en-US), 21/01/1983 (en-GB), ..., 1983/01/21 |