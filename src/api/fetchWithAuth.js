import { config } from "@/utils/config";

export async function fetchWithAuth(url, options = {}) {
  return fetch(`${config.api_host}${url}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${config.token}`,
    },
  });
}
