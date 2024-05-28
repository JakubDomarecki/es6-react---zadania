import { formatDistanceToNow } from "date-fns";

const dateToNow = formatDistanceToNow(new Date(2018, 4, 5));
console.log(dateToNow);

