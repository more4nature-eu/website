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
    await mailchimp.lists.addListMember('77ab6984cf', {
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
        message: err.message,
      };
    }

    return {
      ok: false,
      message: 'Error subscribing to newsletter',
    };
  }
};

export default subscribeNewsletter;
