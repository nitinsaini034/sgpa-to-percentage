
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto py-8 flex-grow px-4 md:px-40">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary text-center">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-card-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using EduCalculators ("the Service"), you accept and agree to be bound by the terms and
              provision of this agreement. In addition, when using these particular services, you shall be subject to
              any posted guidelines or rules applicable to such services. Any participation in this service will
              constitute acceptance of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">2. Description of Service</h2>
            <p>
              EduCalculators provides a collection of online academic calculation tools. You understand and agree that
              the Service is provided "AS-IS" and that EduCalculators assumes no responsibility for the timeliness,
              deletion, mis-delivery or failure to store any user communications or personalization settings. The calculations
              provided are for informational purposes only and should not be considered as professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">3. User Conduct</h2>
            <p>
              You agree to use the Service only for lawful purposes. You are prohibited from posting on or transmitting
              through the Service any unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene,
              sexually explicit, profane, hateful, racially, ethnically, or otherwise objectionable material of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">4. Accuracy of Information</h2>
            <p>
              While we strive to provide accurate calculations, EduCalculators makes no warranty that the Service will be
              error-free or uninterrupted. The tools are provided for guidance only. Users are advised to verify all
              calculations with official academic sources or guidelines. EduCalculators is not responsible for any
              inaccuracies or decisions made based on the results provided by the tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">5. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive
              property of EduCalculators and its licensors. The Service is protected by copyright, trademark, and
              other laws of both [Your Country/Region] and foreign countries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">6. Limitation of Liability</h2>
            <p>
              In no event shall EduCalculators, nor its directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, special, consequential or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">7. Modifications to Terms</h2>
            <p>
              EduCalculators reserves the right, at its sole discretion, to modify or replace these Terms at any time.
              If a revision is material we will try to provide at least 30 days' notice prior to any new terms
              taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of [Your Country/Region],
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-3">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us through our contact page.
            </p>
          </section>
          <p className="text-sm text-muted-foreground mt-6">Last updated: {new Date().toLocaleDateString()}</p>
        </CardContent>
      </Card>
    </div>
  );
}
