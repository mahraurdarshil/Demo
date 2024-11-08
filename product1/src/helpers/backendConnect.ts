

export async function getUserData(userId: number) {
  const res = await fetch(`/api/user/${userId}`);
  const data = await res.json();
  return data.data;
}