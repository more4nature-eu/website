'use server';

import { z } from 'zod';

import mailchimp from '@/lib/mailchimp';

import { NewsletterSchema } from '@/containers/newsletter/index';

export const subscribeNewsletter = async (
  email: z.infer<typeof NewsletterSchema>['email'],
  mergeFields: {
    FNAME: string;
    LNAME: string;
    ORG_TYPE?: string | undefined;
    ORG_TYPE_O?: string | undefined;
  },
) => {
  try {
    await mailchimp.lists.addListMember(z.string().parse(process.env.MAILCHIMP_LIST_ID), {
      status: 'subscribed',
      email_address: email,
      merge_fields: {
        ...mergeFields,
      },
    });

    return {
      ok: true,
    };
  } catch (err) {

    if (err instanceof Error) {

      return {
        ok: false,
        message: err.response.text,
      };
    }

    return {
      ok: false,
      message: 'Error subscribing to newsletter',
    };
  }
};

export default subscribeNewsletter;
