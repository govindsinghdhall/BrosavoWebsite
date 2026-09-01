import { CONTACT } from "@/lib/data";
import { CONTACT_FORM_SUBMIT_ERROR_MESSAGE } from "@/lib/contact";

export function ContactFormSubmitError({
  className,
}: {
  className?: string;
}) {
  return (
    <p className={className}>
      {CONTACT_FORM_SUBMIT_ERROR_MESSAGE}{" "}
      <a
        href={CONTACT.phones[1]?.href ?? CONTACT.phones[0].href}
        className="font-medium underline underline-offset-2 hover:text-red-300"
      >
        call
      </a>{" "}
      or{" "}
      <a
        href={CONTACT.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium underline underline-offset-2 hover:text-red-300"
      >
        WhatsApp
      </a>
      .
    </p>
  );
}
