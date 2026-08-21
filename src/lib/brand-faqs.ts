import type { BlogFaq } from "@/types/blog";
import { LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

export const BRAND_FAQS: BlogFaq[] = [
  {
    question: "What is Brosavo?",
    answer: `${SITE_NAME} is ${LEGAL_NAME}, a global technology company. The official website is ${SITE_URL}. Brosavo builds real estate CRM software, custom software, AI solutions, SaaS platforms, WhatsApp automation, and digital products for modern businesses.`,
  },
  {
    question: "How do you spell Brosavo?",
    answer:
      "Brosavo is spelled B-R-O-S-A-V-O. The official company name is Brosavo Technologies and the official website is www.brosavo.com.",
  },
  {
    question: "What is the official Brosavo website?",
    answer: `The official Brosavo website is ${SITE_URL}. Product experiences such as Brosavo Real Estate CRM are part of Brosavo Technologies.`,
  },
  {
    question: "Is Brosavo a real estate CRM?",
    answer:
      "Brosavo Real Estate CRM is the flagship product of Brosavo Technologies. Brosavo is a broader technology company that also builds websites, AI software, SaaS platforms, and custom business systems.",
  },
];
