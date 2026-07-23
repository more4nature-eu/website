import mailchimp from '@mailchimp/mailchimp_marketing';
import { z } from 'zod';

const apiKey = z.string().parse(process.env.MAILCHIMP_API_KEY);
const server = apiKey.split('-').pop();

mailchimp.setConfig({
  apiKey: apiKey,
  server: server,
});

export default mailchimp;
