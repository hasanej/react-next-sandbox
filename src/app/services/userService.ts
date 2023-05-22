import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import { fetchWrapper } from '../helpers';
// import { alertService } from './alert.service';

// const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const userSubject = new BehaviorSubject(typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user')));

export const userService = {
  user: userSubject.asObservable(),
  get userValue() { return userSubject.value },
  login,
  // logout,
  register,
  getUserData
  // getAll,
  // getById,
  // update,
  // delete: _delete
};

async function login(email, password) {
  const user = await fetchWrapper.post(`${apiUrl}/login`, { email, password });

  // Publish user to subscribers and store in local storage to stay logged in between page refreshes
  userSubject.next(user);
  localStorage.setItem('user', JSON.stringify(user));
}

async function register(email, password) {
  await fetchWrapper.post(`${apiUrl}/register`, { email, password });
}

async function getUserData() {
  // This is the ID for user named Eve
  const id = "4";
  
  const userData = await fetchWrapper.get(`${apiUrl}/users/${id}`);

  localStorage.setItem('isLoggedIn', "true");
  localStorage.setItem('userData', JSON.stringify(userData));
}