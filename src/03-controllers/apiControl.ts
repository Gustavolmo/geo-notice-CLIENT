
export const postOneChat = async (chatData: any) => {
  const url = `http://localhost:4000/api/chat`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(chatData),
  });
  const resAsJson = await res.json();
  return resAsJson;
};

export const getAllChat = async (id: string) => {

  const url = `http://localhost:4000/api/chat/${id}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const resAsJson = await res.json();
  return resAsJson;
};

export default {
  postOneChat,
  getAllChat,
};
