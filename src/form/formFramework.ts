export function validate(
	value: string,
	validation: {
		required: boolean;
	} | null = null
) {
	if (!validation) {
		return true;
	}

	let isValid = true;

	if (validation.required) {
		isValid = value.trim() !== "" && isValid;
	}

	return isValid;
}
