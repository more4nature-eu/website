'use client';

import { FormEvent, useCallback, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/**
 * Mailchimp doesn't support CORS on its list-manage subscribe endpoint, so this posts as a plain
 * (non-fetch) HTML form submission opened in a new tab. Values come from
 * Audience > Signup forms > Embedded forms in the Mailchimp dashboard.
 */
const MAILCHIMP_FORM_ACTION = process.env.NEXT_PUBLIC_MAILCHIMP_FORM_ACTION ?? '';
const MAILCHIMP_HONEYPOT_NAME = process.env.NEXT_PUBLIC_MAILCHIMP_HONEYPOT_NAME ?? '';

const ORGANIZATION_TYPES_VALUES = [
  'NGO',
  'Citizen Science Initiative',
  'Public sector',
  'Research & Academia',
  'Industry',
  'Other',
] as const;

const ORGANIZATION_TYPES = [
  { label: 'NGO', value: ORGANIZATION_TYPES_VALUES[0] },
  { label: 'Citizen Science Initiative', value: ORGANIZATION_TYPES_VALUES[1] },
  { label: 'Public sector', value: ORGANIZATION_TYPES_VALUES[2] },
  { label: 'Research & Academia', value: ORGANIZATION_TYPES_VALUES[3] },
  { label: 'Industry', value: ORGANIZATION_TYPES_VALUES[4] },
  { label: 'Other', value: ORGANIZATION_TYPES_VALUES[5] },
];

export const NewsletterSchema = z.object({
  name: z.string({ message: 'Name is required' }).min(2, 'Name must contain at least 2 characters'),
  email: z
    .string({ message: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  privacyPolicy: z.boolean().refine((value) => value, {
    message: 'Privacy policy must be accepted',
  }),
  organizationType: z.enum(ORGANIZATION_TYPES_VALUES),
  otherOrganization: z.string().optional(),
});

const refinedNewsletterSchema = NewsletterSchema.superRefine(
  ({ organizationType, otherOrganization }, ctx) => {
    if (organizationType === 'Other' && otherOrganization === undefined) {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please, provide an answer',
        path: ['otherOrganization'],
      });
    }
  },
);

export default function Newsletter() {
  const [subscribedStatus, setSubscribedStatus] = useState<'idle' | 'subscribed'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const fnameRef = useRef<HTMLInputElement>(null);
  const lnameRef = useRef<HTMLInputElement>(null);
  const orgTypeRef = useRef<HTMLInputElement>(null);
  const orgOtherRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof refinedNewsletterSchema>>({
    resolver: zodResolver(refinedNewsletterSchema),
    defaultValues: {
      name: '',
      email: '',
      organizationType: undefined,
      privacyPolicy: false,
    },
    mode: 'onSubmit',
  });

  const handleNewsletter = useCallback(
    (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();

      form.handleSubmit((formValues) => {
        const parsed = NewsletterSchema.omit({ privacyPolicy: true }).safeParse(formValues);

        if (!parsed.success) return;

        const [firstName, ...rest] = parsed.data.name.trim().split(/\s+/);

        if (fnameRef.current) fnameRef.current.value = firstName ?? '';
        if (lnameRef.current) lnameRef.current.value = rest.join(' ');
        if (orgTypeRef.current) {
          orgTypeRef.current.value =
            parsed.data.organizationType !== 'Other' ? parsed.data.organizationType : '';
        }
        if (orgOtherRef.current) orgOtherRef.current.value = parsed.data.otherOrganization ?? '';

        setSubscribedStatus('subscribed');
        formRef.current?.submit();
      })(evt);
    },
    [form],
  );

  return (
    <div className="container space-y-14 py-10 md:py-16">
      <h2 className="text-xl font-bold text-grey-800 md:text-2xl">Interested in more4nature?</h2>
      <Form {...form}>
        <form
          ref={formRef}
          action={MAILCHIMP_FORM_ACTION}
          method="post"
          target="_blank"
          className="space-y-8 md:grid md:grid-cols-12 md:gap-[5%] md:space-y-0"
          onSubmit={handleNewsletter}
        >
          <input type="hidden" name="FNAME" ref={fnameRef} />
          <input type="hidden" name="LNAME" ref={lnameRef} />
          <input type="hidden" name="ORG_TYPE" ref={orgTypeRef} />
          <input type="hidden" name="ORG_TYPE_O" ref={orgOtherRef} />
          {/* Mailchimp bot trap: real users must never fill this in. */}
          <div aria-hidden="true" className="absolute left-[-5000px]">
            <input type="text" name={MAILCHIMP_HONEYPOT_NAME} tabIndex={-1} defaultValue="" />
          </div>

          <div className="flex w-full flex-col justify-between space-y-8 md:col-span-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      type="text"
                      autoComplete="name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="organizationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {ORGANIZATION_TYPES.map(({ label, value }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            {form.watch('organizationType') === 'Other' && (
              <FormField
                control={form.control}
                name="otherOrganization"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Please, provide more details" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          <div className="col-span-6 space-y-8 md:col-span-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      autoComplete="email"
                      {...field}
                      name="EMAIL"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="privacyPolicy"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          {...field}
                          id={field.name}
                          value="privacyPolicy"
                          onCheckedChange={field.onChange}
                          aria-invalid={form.formState.errors[field.name] !== undefined}
                        />
                        <Label htmlFor={field.name} className="font-normal">
                          I agree with more4nature&apos;s{' '}
                          <Link
                            href="/privacy-policy"
                            className="underline"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Privacy Policy
                          </Link>
                          .
                        </Label>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              {subscribedStatus === 'idle' && (
                <p className="text-sm">
                  Subscribe to stay connected! By clicking the button, you&apos;ll join the
                  more4nature mailing list and receive occasional updates directly to your inbox.
                  You can unsubscribe at any time.
                </p>
              )}
              {subscribedStatus === 'idle' && (
                <Button type="submit" className="w-full md:w-auto">
                  Subscribe to newsletter
                </Button>
              )}

              {subscribedStatus === 'subscribed' && (
                <p>
                  Thank you for subscribing! A confirmation page has opened in a new tab &mdash;
                  please follow its instructions to complete your subscription.
                </p>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
