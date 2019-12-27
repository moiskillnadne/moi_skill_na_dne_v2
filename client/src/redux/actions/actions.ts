import { ACTION_TEST } from '../actionTypes';

const test = (somePayload: any) => ({
  type: ACTION_TEST,
  payload: somePayload,
});

test('for_remove_warning');
