import { client } from '../utils/client';

export async function get() {
  const { data } = await client.getSingle('homepage');

  return {
    body: {
      leftPhoto: data.left_photo,
      rightPhoto: data.right_photo,
      landscapePhoto: data.landscape_photo,
      portraitPhoto: data.portrait_photo,
    },
  };
}
