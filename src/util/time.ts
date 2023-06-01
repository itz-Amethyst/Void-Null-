const bday = new Date('04 April 2004');
const ageMilliseconds = Date.now() - bday.getTime();

export const MILLISECOND = 1;
export const SECOND = MILLISECOND * 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const YEAR = DAY * 365;

export const FullAge = ageMilliseconds / YEAR;

// ? ---------------------------

export const IRTimeFormatter = new Intl.DateTimeFormat(undefined, {
	timeZone: 'Asia/Tehran',
	hour: 'numeric',
	minute: 'numeric',
	hour12: false,
});

export const RelativeTimeFormatter = new Intl.RelativeTimeFormat('en', {
	style: 'long',
});

export const dob = new Date('2004-04-04');
export const age = new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970;
const today = new Date();

export const hasHadBirthdayThisYear = (
	today.getMonth() > dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate())
) && today.getFullYear() >= dob.getFullYear();
export const nextBirthdayYear = today.getFullYear() + (hasHadBirthdayThisYear ? 1 : 0);
export const daysUntilBirthday = RelativeTimeFormatter.formatToParts(
    // ? Fix

	Math.floor(
		(new Date(nextBirthdayYear, dob.getMonth(), dob.getDay() + 1).getTime() - today.getTime()) / 1000 / 60 / 60 / 24,
	),
	'day',
)[1]!.value.toString();