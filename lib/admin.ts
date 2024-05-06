import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2TiHjjHIjAcqVAjGkcDDNVEtGJ0"];

export const isAdmin = async () => {
  const { userId } = auth();

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};
