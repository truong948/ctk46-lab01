"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { guestbookEntries } from "@/data/guestbook";

const guestbookSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, "Tên phải có ít nhất 2 ký tự")
		.max(100, "Tên không được quá 100 ký tự"),
	message: z
		.string()
		.trim()
		.min(3, "Lời nhắn phải có ít nhất 3 ký tự")
		.max(500, "Lời nhắn không được quá 500 ký tự"),
});

export interface ActionState {
	success: boolean;
	errors?: {
		name?: string[];
		message?: string[];
	};
}

export async function createGuestbookEntry(
	_prevState: ActionState,
	formData: FormData
): Promise<ActionState> {
	const parsed = guestbookSchema.safeParse({
		name: formData.get("name"),
		message: formData.get("message"),
	});

	if (!parsed.success) {
		return {
			success: false,
			errors: parsed.error.flatten().fieldErrors,
		};
	}

	guestbookEntries.unshift({
		id: crypto.randomUUID(),
		name: parsed.data.name,
		message: parsed.data.message,
		createdAt: new Date().toISOString(),
	});

	revalidatePath("/guestbook");
	return { success: true };
}

export async function deleteGuestbookEntry(id: string): Promise<void> {
	const index = guestbookEntries.findIndex((entry) => entry.id === id);
	if (index !== -1) {
		guestbookEntries.splice(index, 1);
	}
	revalidatePath("/guestbook");
}