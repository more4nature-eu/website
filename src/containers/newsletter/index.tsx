'use client';

import { FormEvent, useCallback, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import subscribeNewsletter from '@/containers/newsletter/action';

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

const ORGANIZATION_TYPES_VALUES = [
  'NGO',
  'Citizen Science Initiative',
  'Policy and Authorities',
  'Research & Academia',
  'other',
] as const;

const ORGANIZATION_TYPES = [
  { label: 'NGO', value: ORGANIZATION_TYPES_VALUES[0] },
  { label: 'Citizen Science Initiative', value: ORGANIZATION_TYPES_VALUES[1] },
  { label: 'Policy and Authorities', value: ORGANIZATION_TYPES_VALUES[2] },
  { label: 'Research & Academia', value: ORGANIZATION_TYPES_VALUES[3] },
  { label: 'Other', value: ORGANIZATION_TYPES_VALUES[4] },
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
    if (organizationType === 'other' && otherOrganization === undefined) {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please, provide an answer',
        path: ['otherOrganization'],
      });
    }
  },
);

export default function Newsletter() {
  const [subscribedStatus, setSubscribedStatus] = useState<
    'idle' | 'loading' | 'subscribed' | 'error'
  >('idle');
  const formRef = useRef<HTMLFormElement>(null);
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

      form.handleSubmit(async (formValues) => {
        try {
          setSubscribedStatus('loading');
          const parsed = NewsletterSchema.omit({
            privacyPolicy: true,
          }).safeParse(formValues);

          if (parsed.success) {
            const response = await subscribeNewsletter(parsed.data.email, {
              FNAME: parsed.data.name.split(' ')[0],
              LNAME: parsed.data.name.split(' ')[1],
              ...(parsed.data.organizationType !== 'other' && {
                ORG_TYPE: parsed.data.organizationType,
              }),
              ...(parsed.data.otherOrganization && { ORG_TYPE_O: parsed.data.otherOrganization }),
            });

            setSubscribedStatus(response.ok ? 'subscribed' : 'error');
          }
        } catch (err) {
          setSubscribedStatus('error');
        }
      })(evt);
    },
    [form],
  );

  return (
    <div className="container space-y-14 py-10 md:py-16">
      <h2 className="text-xl font-bold text-grey-800 md:text-2xl">
        Interested in environmental conservation?
      </h2>

      <Form {...form}>
        <form
          ref={formRef}
          className="space-y-8 md:grid md:grid-cols-12 md:gap-[5%] md:space-y-0"
          onSubmit={handleNewsletter}
        >
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
            {form.watch('organizationType') === 'other' && (
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
                    <Input placeholder="Enter your email" autoComplete="email" {...field} />
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
              {['idle', 'loading'].includes(subscribedStatus) && (
                <p className="text-sm">
                  Subscribe to stay connected! By clicking the button, you&apos;ll join the
                  more4nature mailing list and receive occasional updates directly to your inbox.
                  You can unsubscribe at any time.
                </p>
              )}
              {!['subscribed', 'error'].includes(subscribedStatus) && (
                <Button
                  type="submit"
                  className="w-full md:w-auto"
                  disabled={subscribedStatus === 'loading'}
                >
                  Subscribe to newsletter
                </Button>
              )}

              {subscribedStatus === 'subscribed' && <p>Thank you for subscribing.</p>}
              {subscribedStatus === 'error' && (
                <p>There was an error subscribing to the newsletter. Please, try again</p>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
