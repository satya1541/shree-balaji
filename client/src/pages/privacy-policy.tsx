import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <div className="bg-gradient-to-b from-[#0f0a00] to-black py-20 border-b border-gold/10">
                <div className="container mx-auto px-4">
                    <Link href="/">
                        <a className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors mb-8 text-sm">
                            <ArrowLeft size={16} /> Back to Home
                        </a>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-serif text-gold">Privacy Policy</h1>
                    <p className="text-white/50 mt-4">Last Updated: February 13, 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="prose prose-invert prose-gold max-w-none space-y-10 text-white/80 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">1. Introduction</h2>
                        <p>
                            श्री Balaji Events & Entertainment ("we," "us," or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or engage our event management services, in compliance with the <strong>Information Technology Act, 2000</strong>, the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>, and the <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>.
                        </p>
                        <p>
                            By accessing our website or using our services, you consent to the collection and use of your information as outlined in this policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">2. Information We Collect</h2>
                        <p>We may collect the following categories of personal data:</p>
                        <h3 className="text-lg font-semibold text-white mt-4 mb-2">a) Information You Provide</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Full name, email address, phone number, and postal address</li>
                            <li>Event details such as date, type, venue preferences, and guest count</li>
                            <li>Payment and billing information</li>
                            <li>Photographs, videos, or media shared for event planning purposes</li>
                            <li>Any other information submitted through our contact forms or during consultations</li>
                        </ul>
                        <h3 className="text-lg font-semibold text-white mt-4 mb-2">b) Automatically Collected Information</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>IP address, browser type, and operating system</li>
                            <li>Pages visited, time spent, and interaction data</li>
                            <li>Cookies and similar tracking technologies</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">3. Purpose of Data Collection</h2>
                        <p>We use your personal information for the following lawful purposes:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To plan, coordinate, and execute events as per your requirements</li>
                            <li>To communicate with you regarding bookings, inquiries, and updates</li>
                            <li>To process payments and issue invoices</li>
                            <li>To improve our website, services, and customer experience</li>
                            <li>To comply with applicable legal and regulatory obligations</li>
                            <li>To send promotional content (only with your explicit consent)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">4. Data Storage & Security</h2>
                        <p>
                            We implement reasonable security practices and procedures as mandated under the IT Act, 2000, and the SPDI Rules, 2011, to protect your data from unauthorized access, disclosure, alteration, or destruction. These measures include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Encryption of sensitive personal data during transmission (SSL/TLS)</li>
                            <li>Access controls restricting data to authorized personnel only</li>
                            <li>Regular security audits and vulnerability assessments</li>
                            <li>Secure storage on servers located within India or in jurisdictions with adequate data protection</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">5. Sharing of Information</h2>
                        <p>We do not sell your personal data. We may share your information with:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Service Partners:</strong> Vendors, decorators, caterers, photographers, and other professionals involved in event execution, only to the extent necessary</li>
                            <li><strong>Payment Processors:</strong> For secure transaction processing</li>
                            <li><strong>Legal Authorities:</strong> When required by law, court order, or government request under Indian law</li>
                            <li><strong>With Your Consent:</strong> For any purpose disclosed to you at the time of collection</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">6. Your Rights (Under DPDPA, 2023)</h2>
                        <p>As a Data Principal under the Digital Personal Data Protection Act, 2023, you have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Access:</strong> Request information about the personal data we hold about you</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                            <li><strong>Erasure:</strong> Request deletion of your personal data, subject to legal retention obligations</li>
                            <li><strong>Grievance Redressal:</strong> Lodge a complaint with our Grievance Officer or the Data Protection Board of India</li>
                            <li><strong>Withdraw Consent:</strong> Withdraw previously given consent at any time</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">7. Cookies Policy</h2>
                        <p>
                            Our website uses cookies to enhance your browsing experience. Cookies are small data files stored on your device. You may disable cookies through your browser settings; however, some features of the website may not function properly without them.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">8. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites (e.g., social media platforms). We are not responsible for the privacy practices of these external sites. We encourage you to review their respective privacy policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">9. Data Retention</h2>
                        <p>
                            We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable Indian laws, including tax and accounting regulations. Typically, event-related data is retained for a period of 7 years.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">10. Grievance Officer</h2>
                        <p>In accordance with the IT Act, 2000, and the DPDPA, 2023, our Grievance Officer is:</p>
                        <div className="bg-white/5 border border-gold/10 rounded-lg p-6 mt-4">
                            <p><strong className="text-white">Name:</strong> Balaji Events & Entertainment</p>
                            <p><strong className="text-white">Address:</strong> Ketuka Complex-2, Plot No.- 531, 2nd Floor, Jagamara Road, Khandagiri, Bhubaneswar, India 751030</p>
                            <p><strong className="text-white">Phone:</strong> +91 89172 90824</p>
                            <p><strong className="text-white">Email:</strong> contact@balajievents.com</p>
                        </div>
                        <p className="mt-4">
                            Grievances will be addressed within 30 days of receipt as per applicable regulations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">11. Changes to This Policy</h2>
                        <p>
                            We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our website or services after changes constitutes acceptance of the revised policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">12. Governing Law</h2>
                        <p>
                            This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bhubaneswar, Odisha, India.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
