import { client } from '../utils/client';

export async function get(req, res, next) {
  const { data } = await client.getSingle('about_me');

  res.writeHead(200, { 'Content-Type': 'application/json' });

  res.end(
    JSON.stringify({
      ...data,
      vkLink: data.vk_link,
      instagramLink: data.instagram_link,
      phoneNumber: data.phone_number,
    })
  );
}
