const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface CreateContactRequest {
  full_name: string;
  phone_number: string;
  email: string;
  company: string;
  message: string;
}

export async function createContact(data: CreateContactRequest) {
  const response = await fetch(`${API_URL}/support/contact/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create contact request");
  }

  return response.json();
}
