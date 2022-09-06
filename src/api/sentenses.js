import { APIGateway } from 'api';

export const get = async () => {
  const response = await APIGateway.get('?type=all-meat&sentences=1');

  return response.data;
};
