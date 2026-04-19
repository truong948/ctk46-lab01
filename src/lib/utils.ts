type ClassValue =
	| string
	| number
	| null
	| undefined
	| false
	| Record<string, boolean>
	| ClassValue[];

function flattenClassValue(value: ClassValue, output: string[]) {
	if (!value) return;

	if (typeof value === "string" || typeof value === "number") {
		output.push(String(value));
		return;
	}

	if (Array.isArray(value)) {
		for (const item of value) {
			flattenClassValue(item, output);
		}
		return;
	}

	for (const [key, enabled] of Object.entries(value)) {
		if (enabled) output.push(key);
	}
}

export function cn(...inputs: ClassValue[]) {
	const classes: string[] = [];
	for (const input of inputs) {
		flattenClassValue(input, classes);
	}
	return classes.join(" ");
}