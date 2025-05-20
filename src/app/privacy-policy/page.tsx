
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-8 flex-grow px-4 md:px-40">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary text-center">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-card-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">1. Introduction</h2>
            <p>
              Welcome to SGPAToPercentage ("us", "we", or "our"). We are committed to protecting your personal information
              and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices
              with regards to your personal information, please contact us.
            </p>
            <p className="mt-2">
              This privacy notice describes how we might use your information if you visit our website at sgpa2percentage.com
              or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">2. Information We Collect</h2>
            <p>
              We do not collect any personal information from users of our calculator tools. Our tools are designed to be
              used anonymously, without requiring registration or submission of identifiable data.
            </p>
            <p className="mt-2">
              We may collect non-personal information such as browser type, operating system, and usage statistics
              (e.g., which calculators are most frequently used) to improve our services. This data is anonymized
              and cannot be used to identify individual users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">3. How We Use Your Information</h2>
            <p>
              Since we do not collect personal information, we do not use it for any purpose. Non-personal
              information collected is used solely for analytical purposes to enhance the functionality and
              user experience of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">4. Cookies and Tracking Technologies</h2>
            <p>
              We currently do not use cookies or similar tracking technologies to track user activity on our service.
              If this changes in the future, this policy will be updated accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">5. Third-Party Services</h2>
            <p>
              Our website does not integrate with third-party services that would collect personal information from you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">6. Data Security</h2>
            <p>
              As we do not collect personal data, the risks associated with data breaches of personal information are
              minimized. We take reasonable measures to protect any non-personal anonymous data we collect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">7. Children's Privacy</h2>
            <p>
              Our services are not directed to children under the age of 13, and we do not knowingly collect
              any information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our contact page.
            </p>
          </section>
          <p className="text-sm text-muted-foreground mt-6">Last updated: {new Date().toLocaleDateString()}</p>
        </CardContent>
      </Card>
    </div>
  );
}
