
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I open a bank account with Skylet Bank?",
      answer: "To open a bank account with Skylet Bank, you can visit any of our branches with your ID proof, address proof, and passport-sized photographs. Alternatively, you can initiate the account opening process online through our website, and our representative will get in touch with you to complete the formalities."
    },
    {
      question: "What documents are required for a personal loan?",
      answer: "For a personal loan, you'll need to submit your ID proof, address proof, income proof (salary slips or income tax returns), bank statements for the last 6 months, and a passport-sized photograph. Additional documents may be required based on your employment type and loan amount."
    },
    {
      question: "How can I access my account online?",
      answer: "You can access your account online by registering for our Internet Banking service. Visit our website, click on 'Internet Banking', and select 'First Time User' to register. You'll need your account number and registered mobile number to complete the registration process."
    },
    {
      question: "What are the charges for fund transfers?",
      answer: "Fund transfers within Skylet Bank accounts are free of charge. For NEFT/RTGS transfers to other banks, nominal charges apply based on the transfer amount and mode. Please refer to our Schedule of Charges on the website for detailed information."
    },
    {
      question: "How secure is online banking with Skylet Bank?",
      answer: "Skylet Bank employs industry-leading security measures including 256-bit encryption, two-factor authentication, and real-time fraud monitoring systems. We also conduct regular security audits and updates to ensure your data and transactions remain secure."
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to commonly asked questions about our banking services</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left font-medium text-bank-primary">
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
            Can't find what you're looking for? <a href="/" className="text-bank-primary font-medium hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
