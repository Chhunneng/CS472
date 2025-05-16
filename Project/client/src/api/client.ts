const API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:3000"

export async function get<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`)

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`)
  }

  return response.json() as Promise<T>
}

export async function post<T>(endpoint: string, data: any): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`)
  }

  return response.json() as Promise<T>
}

export async function put<T>(endpoint: string, data: any): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`)
  }

  return response.json() as Promise<T>
}

export async function del(endpoint: string): Promise<void> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`)
  }
}
