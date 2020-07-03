import { KEY_REQUEST } from './types';

export function keyRequest(key) {
  return {
    type: KEY_REQUEST,
    key,
  };
}
