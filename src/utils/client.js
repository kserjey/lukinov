import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://lukinov.cdn.prismic.io/api/v2';
const accessToken = process.env.API_KEY;

export const client = Prismic.client(apiEndpoint, { accessToken });
