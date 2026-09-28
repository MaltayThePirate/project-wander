const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

async function request(path, options = {}) {
  let token = null;
  const isServer = typeof window === "undefined";

  if (isServer) {
    try {
      const { cookies } = await import("next/headers");
      const cookieStore = await cookies();
      token = cookieStore.get("auth_token")?.value;
    } catch (e) {
      // ignore outside request context
    }
  }

  const baseUrl = isServer ? API_URL : "/api/proxy";
  const url = `${baseUrl}${path}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(isServer && token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.errors?.join(", ") || body.error || "Request failed");
  }

  if (response.status === 204) return null;
  return response.json();
}

export function apiGet(path) {
  return request(path);
}

export function apiPost(path, data) {
  return request(path, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function apiPut(path, data) {
  return request(path, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export function apiPatch(path, data) {
  return request(path, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export function apiDelete(path) {
  return request(path, {
    method: "DELETE",
  });
}
