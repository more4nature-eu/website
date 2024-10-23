import Header from '@/containers/header';

import AppMenu from '@/components/app-menu';
import Wrapper from '@/components/ui/wrapper';

export default function PrivacyPolicy() {
  return (
    <div className="border-b border-b-grey-800/30">
      <div className="bg-grey-800 px-6 py-2 md:py-4">
        <div className="container">
          <Header>
            <AppMenu />
          </Header>
        </div>
      </div>
      <Wrapper className="space-y-6">
        <h3 className="text-xl lg:text-2xl">Privacy Policy</h3>
        <p>
          At more4nature, we are committed to protecting your privacy and ensuring transparency
          about how we handle your personal data. This privacy policy outlines how we collect, use,
          and safeguard your information in compliance with the General Data Protection Regulation
          (GDPR) and other relevant privacy laws.
        </p>
        <ol className="list-decimal space-y-8 pl-10">
          <li className="space-y-4 text-lg font-semibold">
            <h4>Website Content</h4>
            <p className="text-base font-normal">
              This website provides information related to the more4nature project. It is presented
              for knowledge, education and information purposes only.{' '}
            </p>
          </li>
          <li className="space-y-4 text-lg font-semibold">
            <h4>Data Controller</h4>
            <p className="text-base font-normal">
              more4nature is the data controller responsible for your personal data. If you have any
              questions or concerns regarding your personal data or this privacy policy, please
              contact us at{' '}
              <a href="mailto:more4nature_project@un-ihe.org">more4nature_project@un-ihe.org</a>.
            </p>
          </li>
          <li className="space-y-4 text-lg font-semibold">
            <h4>Data We Collect</h4>
            <p className="text-base font-normal">
              We collect personal data for specific purposes, namely:
            </p>
            <ul className="list-disc space-y-4 pl-10 text-base font-normal">
              <li>
                Newsletter Subscription: When you subscribe to our newsletter, we collect your email
                address to send you updates and information about the more4nature project.
              </li>
              <li>
                Website Analytics: We use Plausible, a privacy-focused analytics tool, to gather
                anonymous data about how visitors use our website. This data does not include
                personally identifiable information and is aggregated to help us improve user
                experience.
              </li>
            </ul>
          </li>
          <li className="space-y-4 text-lg font-semibold">
            <h4>Legal Basis for Processing Your Data</h4>
            <p className="text-base font-normal">We process your data based on:</p>
            <ul className="list-disc space-y-4 pl-10 text-base font-normal">
              <li>
                Consent: By subscribing to our newsletter, you provide explicit consent for us to
                use your email address for communication purposes
              </li>
              <li>
                Legitimate Interest: We use anonymized website analytics to better understand how
                users interact with our site, improve our services, and maintain security.
              </li>
            </ul>
          </li>
          <li className="space-y-4 text-lg font-semibold">
            <h4>Data Retention</h4>
            <p className="text-base font-normal">
              We retain your personal data for as long as necessary to fulfill the purposes for
              which it was collected:
            </p>
            <ul className="list-disc space-y-4 pl-10 text-base font-normal">
              <li>
                Newsletter: Your email address will be stored until you choose to unsubscribe.
              </li>
              <li>
                Analytics: Plausible only collects anonymized data, and no personal data is stored
                beyond the session.
              </li>
            </ul>
          </li>
          <li className="space-y-4 text-lg font-semibold">
            <h4>Sharing of Data</h4>
            <p className="text-base font-normal">
              We do not share, sell, or rent your personal data to third parties. The only
              third-party service we use is Plausible for website analytics, which does not track
              personally identifiable information.
            </p>
          </li>
          <li className="space-y-4 text-lg font-semibold">
            <h4>Exercising Your Rights</h4>
            <p>Under the GDPR, you have the following rights concerning your personal data:</p>
            <ul className="list-disc space-y-4 pl-10 text-base font-normal">
              <li>The right to access, correct, or delete your data.</li>
              <li>
                The right to withdraw your consent at any time (e.g., unsubscribing from the
                newsletter).
              </li>
              <li>The right to object to the processing of your data.</li>
              <li>The right to data portability.</li>
            </ul>
            <p className="text-base font-normal">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:more4nature_project@un-ihe.org">more4nature_project@un-ihe.org</a>.
            </p>
          </li>
          <li className="space-y-4 text-lg font-semibold">
            <h4>Data Security and Confidentiality</h4>
            <p className="text-base font-normal">
              We implement appropriate technical and organizational measures to protect your
              personal data from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </li>
          <li className="space-y-4 text-lg font-semibold">
            <h4>Updating our Privacy Policy</h4>
            <p className="text-base font-normal">
              We may update this privacy policy from time to time to reflect changes in our
              practices or for other operational, legal, or regulatory reasons. Please review this
              policy periodically to stay informed about how we are protecting your data.
            </p>
          </li>
          <li className="space-y-4 text-lg font-semibold">
            <h4>Contact Us</h4>
            <p className="text-base font-normal">
              If you have any questions or concerns about this privacy policy or your personal data,
              please contact us at{' '}
              <a href="mailto:more4nature_project@un-ihe.org">more4nature_project@un-ihe.org</a>.
            </p>
          </li>
        </ol>
      </Wrapper>
    </div>
  );
}
