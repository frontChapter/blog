import { format } from 'date-fns-jalali'

const jalali = (date: string) => format(new Date(date), 'd MMMM yyyy')

export default jalali
