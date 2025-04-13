import { createClient } from 'next-sanity';

const sanityClient = createClient({
    projectId: "1i8v3wtu",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
    apiVersion: '2023-10-01',
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_API_TOKEN,
});

export default sanityClient;

