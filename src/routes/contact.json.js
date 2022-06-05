import { client } from '../utils/client';

export async function get() {
  const {
    data: { vk_link, instagram_link, phone_number, email, ...data },
  } = await client.getSingle('about_me');

  return {
    body: {
      ...data,
      links: {
        email,
        vkLink: vk_link,
        instagramLink: instagram_link,
        phoneNumber: phone_number,
      },
    },
  };
}
