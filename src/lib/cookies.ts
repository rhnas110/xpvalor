import { cookies } from "next/headers";

function getTokenFromCookies() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("next-auth.session-token");
  return accessToken?.value;
}

export { getTokenFromCookies };
