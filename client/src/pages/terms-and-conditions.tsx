import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsAndConditions() {
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
                    <h1 className="text-4xl md:text-5xl font-serif text-gold">Terms & Conditions</h1>
                    <p className="text-white/50 mt-4">Last Updated: February 13, 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="prose prose-invert prose-gold max-w-none space-y-10 text-white/80 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">1. Acceptance of Terms</h2>
                        <p>
                            These Terms and Conditions ("Terms") govern your use of the website and services provided by श्री Balaji Events & Entertainment ("Company," "we," "us," or "our"), a proprietary entity registered under the laws of India, with its principal office at Bhubaneswar, Odisha.
                        </p>
                        <p>
                            By accessing our website or engaging our event management services, you ("Client," "you," or "your") agree to be bound by these Terms. If you do not agree to these Terms, you must not use our website or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">2. Services Offered</h2>
                        <p>We provide end-to-end event management services, including but not limited to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Wedding planning and execution</li>
                            <li>Corporate events, conferences, and seminars</li>
                            <li>Stage shows and artist management</li>
                            <li>Stage fabrication and theme decoration</li>
                            <li>Sound, light, and AV solutions</li>
                            <li>Catering and hospitality services</li>
                            <li>Photography and videography coordination</li>
                            <li>School functions and cultural events</li>
                        </ul>
                        <p className="mt-4">
                            The scope of services for each event shall be defined in a separate Service Agreement or quotation mutually agreed upon by both parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">3. Booking & Confirmation</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All bookings are confirmed only upon receipt of a signed Service Agreement and an advance payment as specified in the quotation.</li>
                            <li>A minimum advance of <strong>30% to 50%</strong> of the total estimated cost is required to confirm your booking.</li>
                            <li>The remaining balance must be paid as per the payment schedule outlined in the Service Agreement, with full settlement no later than <strong>3 business days before the event date</strong>.</li>
                            <li>Event dates are reserved on a first-come, first-served basis. No date is guaranteed until the advance payment is received.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">4. Payment Terms</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All payments shall be made in Indian Rupees (INR) via bank transfer (NEFT/RTGS/IMPS), UPI, cheque, or other mutually agreed methods.</li>
                            <li>Applicable GST (Goods and Services Tax) at the prevailing rate shall be charged in addition to the quoted amount, as per the <strong>Central Goods and Services Tax Act, 2017</strong>.</li>
                            <li>Receipts and invoices compliant with GST regulations will be issued for all payments.</li>
                            <li>Any additional services or modifications requested after the Service Agreement is signed may incur extra charges.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">5. Cancellation & Refund Policy</h2>
                        <div className="bg-white/5 border border-gold/10 rounded-lg p-6 mt-2">
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong className="text-white">More than 60 days before the event:</strong> 70% refund of the advance amount</li>
                                <li><strong className="text-white">30–60 days before the event:</strong> 50% refund of the advance amount</li>
                                <li><strong className="text-white">15–30 days before the event:</strong> 25% refund of the advance amount</li>
                                <li><strong className="text-white">Less than 15 days before the event:</strong> No refund shall be provided</li>
                            </ul>
                        </div>
                        <p className="mt-4">
                            Cancellation requests must be submitted in writing via email or registered post. Refunds, if applicable, will be processed within 30 business days.
                        </p>
                        <p>
                            If the Company cancels the event due to reasons attributable to it, a full refund of all amounts paid shall be made within 15 business days.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">6. Client Responsibilities</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide accurate and timely information regarding event requirements, guest count, and venue details.</li>
                            <li>Secure all necessary permits, licenses, and permissions for the event venue (e.g., noise permits, municipal approvals).</li>
                            <li>Ensure the venue is accessible and safe for our team to set up and execute.</li>
                            <li>Communicate any changes or modifications at least 10 days before the event.</li>
                            <li>Make payments as per the agreed schedule.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">7. Force Majeure</h2>
                        <p>
                            Neither party shall be liable for failure to perform obligations due to circumstances beyond reasonable control, including but not limited to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Natural disasters (floods, earthquakes, cyclones)</li>
                            <li>Epidemics, pandemics, or public health emergencies</li>
                            <li>Government orders, curfews, lockdowns, or restrictions</li>
                            <li>Civil unrest, strikes, or bandhs</li>
                            <li>War, terrorism, or acts of God</li>
                        </ul>
                        <p className="mt-4">
                            In such events, both parties shall mutually agree on rescheduling or alternative arrangements. If the event cannot be rescheduled, refund terms shall be negotiated in good faith.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">8. Intellectual Property</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All content on this website, including text, images, logos, designs, and videos, is the intellectual property of Balaji Events & Entertainment and is protected under the <strong>Copyright Act, 1957</strong> and the <strong>Trade Marks Act, 1999</strong>.</li>
                            <li>You may not copy, reproduce, distribute, or use our content without prior written permission.</li>
                            <li>Event photographs and videos taken by our team may be used for marketing and portfolio purposes unless the Client provides written objection prior to the event.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">9. Limitation of Liability</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Our total liability for any claim arising from our services shall not exceed the total amount paid by the Client for the specific event in question.</li>
                            <li>We shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, reputation, or goodwill.</li>
                            <li>We are not responsible for the actions, quality, or reliability of third-party vendors engaged independently by the Client.</li>
                            <li>Minor variations in decoration, setup, or arrangements from the agreed design are inherent to live events and shall not constitute a breach of contract.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">10. Damage to Property</h2>
                        <p>
                            The Client shall be responsible for any damage to the venue, equipment, or property of the Company caused by the Client, their guests, or any third parties present at the event. The cost of repair or replacement shall be borne by the Client.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">11. Indemnification</h2>
                        <p>
                            The Client agrees to indemnify and hold harmless Balaji Events & Entertainment, its directors, employees, and agents from any claims, losses, liabilities, or expenses arising from the Client's breach of these Terms, negligence, or any unlawful activity conducted during the event.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">12. Dispute Resolution</h2>
                        <p>
                            In the event of any dispute or disagreement arising out of or in connection with these Terms or our services:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Both parties shall first attempt to resolve the matter amicably through mutual discussion.</li>
                            <li>If unresolved, the dispute shall be referred to <strong>arbitration</strong> in accordance with the <strong>Arbitration and Conciliation Act, 1996</strong>.</li>
                            <li>The arbitration shall be conducted by a sole arbitrator, mutually appointed, with the seat of arbitration in <strong>Bhubaneswar, Odisha, India</strong>.</li>
                            <li>The language of arbitration shall be English.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">13. Governing Law & Jurisdiction</h2>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of India. Any legal proceedings shall be subject to the exclusive jurisdiction of the courts located in <strong>Bhubaneswar, Odisha, India</strong>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">14. Modifications</h2>
                        <p>
                            We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised "Last Updated" date. Your continued use of our website or services after modifications constitutes acceptance of the updated Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-gold mb-4">15. Contact Information</h2>
                        <p>For any questions regarding these Terms, please contact us:</p>
                        <div className="bg-white/5 border border-gold/10 rounded-lg p-6 mt-4">
                            <p><strong className="text-white">श्री Balaji Events & Entertainment</strong></p>
                            <p>Ketuka Complex-2, Plot No.- 531, 2nd Floor, Jagamara Road, Khandagiri, Bhubaneswar, India 751030</p>
                            <p>Phone: +91 89172 90824</p>
                            <p>Email: contact@balajievents.com</p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
