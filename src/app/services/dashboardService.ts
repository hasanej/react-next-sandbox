import { fetchWrapper } from 'src/app/helpers';

const apiUrl = process.env.NEXT_PUBLIC_DASHBOARD_API_URL;

export const dashboardService = {
  getUserList
}

async function getUserList() {
  const userList = await fetchWrapper.get(`${apiUrl}/users`);
  return userList;
}