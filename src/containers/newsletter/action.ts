'use server';

import { z } from 'zod';

import mailchimp from '@/lib/mailchimp';

import { NewsletterSchema } from '@/containers/newsletter/index';

interface MailchimpApiError {
  status?: number;
  response?: {
    body?: {
      type: string;
      title: string;
      status: number;
      detail: string;
      instance: string;
    };
    text?: string;
  };
}

function isMailchimpApiError(err: unknown): err is MailchimpApiError {
  return (typeof err === 'object' && err !== null && 'response' in err);
}

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
    if (isMailchimpApiError(err)) {
      return {
        ok: false,
        message: err.response?.body?.detail ?? err.response?.text ?? 'Mailchimp error',
      };
    }

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
