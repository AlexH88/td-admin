export function formatDateTime(date: string, selector?: string): string {
	let sel = selector ? selector : ":";

	const month31 = [1, 3, 5, 7, 8, 10, 12];

	const timeZone = -new Date().getTimezoneOffset() / 60;
	let hours = Number(date.slice(11, 13));
	let minutes = date.slice(14, 16);
	let seconds = date.slice(17, 19);

	let day = date.slice(8, 10);
	let month = date.slice(5, 7);
	let year = date.slice(0, 4);

	hours = hours + timeZone;

	if (24 - Number(hours) <= 0) {
		let resHours = Number(hours) - 24;
		let resDay = Number(day) + 1;
		let resMonth = Number(month);
		let resYear = Number(year);

		if ((resDay > 31 && month31.includes(resMonth)) || (resDay > 30 && resMonth != 2)) {
			resDay = 1;
			resMonth = resMonth + 1;
		}

		if ((resDay > 29 && resMonth == 2 && resYear % 4 == 0) || (resDay > 28 && resMonth == 2 && resYear % 4 != 0)) {
			resDay = 1;
			resMonth = resMonth + 1;
		}

		if (resMonth > 12) {
			resMonth = 1;
			resYear = resYear + 1;
		}

		return selector
			? `${checkZero(resDay)}.${checkZero(resMonth)}.${checkZero(resYear)} ${checkZero(
					resHours
			  )}:${minutes}:${seconds}`
			: `${checkZero(resHours)}:${minutes}:${seconds} ${checkZero(resDay)}${sel}${checkZero(
					resMonth
			  )}${sel}${checkZero(resYear)}`;
	} else {
		return selector
			? `${day}${sel}${month}${sel}${year} ${checkZero(hours)}:${minutes}:${seconds}`
			: `${checkZero(hours)}:${minutes}:${seconds} ${day}.${month}.${year}`;
	}
}

export function checkZero(item: number | string): string {
	if (Number(item) < 10 || Number(item) == 0) {
		return `0${item}`;
	} else {
		return `${item}`;
	}
}

export function getNameDocument(
	documentId: string,
	listDocs: Array<{ fileName: string; documentId: string }> = []
): string | null {
	return listDocs.find((val) => val.documentId == documentId)?.fileName ?? null;
}

export function ceilNumber(number: number | string): string {
	let x = Number(number);
	return `${x.toFixed(2)}%`;
}

export function truncate(string: string): string {
	const LengthStr = 25;
	if (string.length > LengthStr) {
		return string.substring(0, LengthStr) + "...";
	} else {
		return string;
	}
}

export function isDevelopmentMode(): boolean {
	return process.env.NODE_ENV == "development";
}
