import { client } from '../utils/client';

export async function get(req, res, next) {
  const {
    data: { vk_link, instagram_link, phone_number, email, ...data },
  } = await client.getSingle('about_me');

  res.writeHead(200, { 'Content-Type': 'application/json' });

  res.end(
    JSON.stringify({
      ...data,
      links: {
        email,
        vkLink: vk_link,
        instagramLink: instagram_link,
        phoneNumber: phone_number,
      },
    })
  );
}
