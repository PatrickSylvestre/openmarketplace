// Custom Filters

import moment from 'moment'

export function date (value) {
  return moment(value).format('DD/MM/YYYY')
}
