const basePath = 'https://geo-notice-4b2331a7d3bf.herokuapp.com'

export const postOneChat = async (chatData: any) => {
  const url = `${basePath}/api/chat`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(chatData),
  });
  const resAsJson = await res.json();
  return resAsJson;
};

export const getAllChat = async (id: string) => {

  const url = `${basePath}/api/chat/${id}`;
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
