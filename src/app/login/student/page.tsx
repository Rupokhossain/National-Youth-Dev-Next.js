// src/app/login/student/page.tsx
import { redirect } from "next/navigation";

export default function StudentLoginPage() {
  redirect("/login?role=student");
}
