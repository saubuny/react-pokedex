// Capitalize the first letter of a sentece
export const capitalize = (str: string | undefined): string => {
	if (typeof str === 'undefined') return 'err';
	return str[0].toUpperCase().concat(str.slice(1));
};
