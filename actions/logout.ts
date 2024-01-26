"use server"

import { signOut } from "@/auth"

export const logout = async () => {
    // server side actions
    await signOut();
}