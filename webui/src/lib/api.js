const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
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