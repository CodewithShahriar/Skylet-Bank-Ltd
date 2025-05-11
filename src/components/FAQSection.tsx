import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { X } from "lucide-react";

const FAQSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 2000);
  };

  const faqs = [
    {
      question: "How do I open a bank account with Skylet Bank?",
      answer:
        "To open a bank account with Skylet Bank, you can visit any of our branches with your ID proof, address proof, and passport-sized photographs. Alternatively, you can initiate the account opening process online through our website, and our representative will get in touch with you to complete the formalities.",
    },
    {
      question: "What documents are required for a personal loan?",
      answer:
        "For a personal loan, you'll need to submit your ID proof, address proof, income proof (salary slips or income tax returns), bank statements for the last 6 months, and a passport-sized photograph. Additional documents may be required based on your employment type and loan amount.",
    },
    {
      question: "How can I access my account online?",
      answer:
        "You can access your account online by registering for our Internet Banking service. Visit our website, click on 'Internet Banking', and select 'First Time User' to register. You'll need your account number and registered mobile number to complete the registration process.",
    },
    {
      question: "What are the charges for fund transfers?",
      answer:
        "Fund transfers within Skylet Bank accounts are free of charge. For NEFT/RTGS transfers to other banks, nominal charges apply based on the transfer amount and mode. Please refer to our Schedule of Charges on the website for detailed information.",
    },
    {
      question: "How secure is online banking with Skylet Bank?",
      answer:
        "Skylet Bank employs industry-leading security measures including 256-bit encryption, two-factor authentication, and real-time fraud monitoring systems. We also conduct regular security audits and updates to ensure your data and transactions remain secure.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-green-600 to-blue-700">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle">
            Find answers to commonly asked questions about our banking services
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-200 text-left font-medium text-bank-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 text-center">
  <p className="text-gray-600">
    Can't find what you're looking for?{" "}
    <button
      onClick={() => setIsModalOpen(true)}
      className="text-blue-600 text-base font-semibold hover:underline"
    >
      Contact our support team
    </button>
  </p>
</div>

      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-lg">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="text-lg font-bold mb-4 text-bank-primary">Contact Support</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full border rounded-md p-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full border rounded-md p-2"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full border rounded-md p-2"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-400 via-green-600 to-blue-700 text-white py-2 rounded-md hover:bg-gradient-to-r from-blue-600 via-green-600 to-blue-700/90">
                      Submit
</button>
                </form>
              </>
            ) : (
              <div className="text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-green-600 to-blue-700 font-medium py-10">
 
                 Thank you for reaching out. Our support team will contact you shortly via email.
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default FAQSection;
