import { isDate } from 'date-fns';
import { format } from 'date-fns/format';

export const dateFormatter = (date: string, formatter: string = 'LLLL dd, yyyy') => {
  if (!isDate(new Date(date))) return date;
  return format(new Date(date), formatter);
};

export default dateFormatter;
