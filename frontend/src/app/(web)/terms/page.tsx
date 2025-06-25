import Head from "next/head";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Munawara - Terms of Service</title>
        <meta
          name="description"
          content="Learn about Munawara's terms of service and how we protect your personal information."
        />
      </Head>
      <section className="min-h-screen flex items-center justify-center bg-gray-100 px-2">
        <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-2xl">
          <h1 className="text-4xl font-bold text-sky-800 mb-4 text-center">
            Terms of Service
          </h1>
          <p className="text-gray-700 mb-6 text-lg text-center">
            By using Munawara&apos;s website, you agree to abide by the following terms and conditions:
          </p>
          <ol className="list-decimal pl-6 space-y-4 text-base text-gray-700">
            <li>
              <span className="font-semibold text-sky-700">Use of Content:</span> All materials on this site are proprietary and may not be reproduced without prior permission.
            </li>
            <li>
              <span className="font-semibold text-sky-700">User Conduct:</span> Visitors must respect intellectual property rights and avoid unauthorized activity.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Limitation of Liability:</span> Munawara is not liable for damages resulting from the use of our services or the site.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Governing Law:</span> These terms are governed by the laws of the jurisdiction in which Munawara operates.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Changes to Terms:</span> Munawara reserves the right to modify these terms at any time. Continued use of the site constitutes acceptance of the updated terms.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Contact Information:</span> For any questions regarding these terms, please contact us at{" "}
              <Link href="/contact" className="text-sky-700 hover:underline font-medium">
                Contact Us
              </Link>.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Termination:</span> Munawara reserves the right to terminate access to the site for any user who violates these terms.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Privacy Policy:</span> Your use of our site is also governed by our{" "}
              <Link href="/privacy" className="text-sky-700 hover:underline font-medium">
                Privacy Policy
              </Link>.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Third-Party Links:</span> Munawara is not responsible for the content or practices of any third-party sites linked from our site.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Indemnification:</span> Users agree to indemnify Munawara against any claims arising from their use of the site.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Severability:</span> If any provision of these terms is found to be unenforceable, the remaining provisions will remain in effect.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Entire Agreement:</span> These terms constitute the entire agreement between the user and Munawara regarding the use of the site.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Force Majeure:</span> Munawara is not liable for any failure to perform its obligations under these terms due to events beyond its control.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Assignment:</span> Munawara may assign its rights and obligations under these terms without notice to users.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Waiver:</span> Failure to enforce any provision of these terms does not constitute a waiver of that provision or any other provision.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Headings:</span> The headings in these terms are for convenience only and do not affect their interpretation.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Electronic Communications:</span> By using our site, you consent to receive electronic communications from Munawara.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Feedback:</span> Any feedback or suggestions provided by users may be used by Munawara without obligation to the user.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Third-Party Services:</span> Munawara may use third-party services to enhance user experience but is not responsible for their content or functionality.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Cookies:</span> Munawara uses cookies to improve user experience. By using our site, you consent to our use of cookies.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Data Security:</span> Munawara takes reasonable measures to protect user data but cannot guarantee complete security.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Children&apos;s Privacy:</span> Munawara does not knowingly collect personal information from children under 13. If you believe your child has provided us with personal information, please contact us.
            </li>
            <li>
              <span className="font-semibold text-sky-700">International Users:</span> Munawara makes no representation that the site is appropriate or available for use outside its operating jurisdiction.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Intellectual Property:</span> All content on the Munawara website, including text, graphics, logos, and images, is the property of Munawara or its licensors and is protected by copyright and trademark laws.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Dispute Resolution:</span> Any disputes arising from these terms or your use of the site will be resolved through binding arbitration in accordance with the rules of the jurisdiction in which Munawara operates.
            </li>
            <li>
              <span className="font-semibold text-sky-700">Disclaimer of Warranties:</span> Munawara provides the site on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, express or implied, regarding the operation of the site or the information, content, materials, or products included on the site.
            </li>
          </ol>
          <div className="mt-8 space-y-4 text-center">
            <p className="text-gray-500 text-sm">
              Last updated: <span className="font-medium">April 2025</span>
            </p>
            <p className="text-gray-700">
              By using our site, you agree to comply with these terms and conditions. If you do not agree to these terms, please do not use our site.
            </p>
            <p className="text-gray-700">
              If you have any questions or concerns about these terms, please{" "}
              <Link href="/contact" className="text-sky-700 hover:underline font-medium">
                contact us
              </Link>
              .
            </p>
            <p className="text-gray-700">
              We are committed to providing a safe and enjoyable experience for all users.
            </p>
            <p className="text-gray-700">
              Thank you for choosing Munawara as your trusted platform for all your needs. We appreciate your understanding and cooperation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
