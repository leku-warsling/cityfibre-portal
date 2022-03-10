import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { QueryFunctionContext } from 'react-query';
import { MigrationError } from '../entities/MigrationErrors';
import store from 'store';
import { concat, identity, partial, pathEq } from 'ramda';
import set from 'lodash-es/set';
import { goto } from '../utils/url';

const { NX_BASE_URI, NX_BASE_REQUEST_TIMEOUT = 15000 } = process.env;

const api = axios.create({
  baseURL: NX_BASE_URI,
  timeout: Number(NX_BASE_REQUEST_TIMEOUT),
});

const setAuth = (req: AxiosRequestConfig, token: string) => {
  return set(req, 'headers.Authorization', `Bearer ${token}`);
};

const isUnauthorized = pathEq(['response', 'status'], 401);

const requestHandler = async (config: AxiosRequestConfig) => {
  const token = store.get('access_token');
  return token ? setAuth(config, token) : config;
};

const errorResponseHandler = (err: AxiosError) => {
  if (err.response) {
    console.error(`
      url: ${err.config.url}
      method: ${err.config.method}
      status: ${err.response.status}
      message: ${err.response.data.message}
    `);
  }

  if (isUnauthorized(err)) {
    goto.login();
    return;
  }

  return Promise.reject(err);
};

api.interceptors.request.use(requestHandler);
api.interceptors.response.use(identity, errorResponseHandler);

const migration = {
  fetchAll: (context: QueryFunctionContext) => {
    const [, params] = context.queryKey;
    return api.get<MigrationError[]>('/migrations', { params });
  },
  remove: (id: number) => api.delete(`/migrations/${id}`),
  update: ({ id, ...data }: any) => api.put(`/migrations/${id}`, data)
}

export type AuthCredentials = {
  username: string;
  password: string;
};

const auth = (data: AuthCredentials) => api.post('/auth/login', data);

export {
  migration,
  auth,
}