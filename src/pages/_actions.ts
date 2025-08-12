"use server";

import { getSingleProduct, createProducts } from "@/lib/actions";
import { revalidatePath } from "next/cache";

/**
 * Server Action: Create a new todo.
 */
export async function createProducts({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  await createProducts(title);
  revalidatePath(path);
}

/**
 * Server Action: Update an existing todo.
 */
// export async function updateTodoAction(
//   id: string,
//   update: { tilte?: string; completed?: boolean },
//   path: string
// ) {
//   await updateTodo(id, update);
//   revalidatePath(path);
// }

/**
 * Server Action: Delete a todo.
 */
// export async function deleteTodoAction({
//   id,
//   path,
// }: {
//   id: string;
//   path: string;
// }) {
//   await deleteTodo(id);
//   revalidatePath(path);
// }

export async function getSingleProduct({
  id,
  path,
}: {
  id: string;
  path: string;
}) {
  await getSingleProduct(id);
  revalidatePath(path);
}
