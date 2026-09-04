import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim(),
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim(),
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim(),
};

const isPlaceholder = (value?: string) => !value || value.startsWith('your_');

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  website?: string;
}

export interface EmailResult {
  success: boolean;
  message: string;
}

export const isEmailConfigured = () =>
  !isPlaceholder(emailConfig.serviceId) &&
  !isPlaceholder(emailConfig.templateId) &&
  !isPlaceholder(emailConfig.publicKey);

export const sendEmail = async (formData: ContactFormData): Promise<EmailResult> => {
  // A hidden honeypot catches basic bots without inconveniencing real visitors.
  if (formData.website) {
    return { success: true, message: 'Thanks — your request has been received.' };
  }

  if (!isEmailConfigured()) {
    console.error('EmailJS is not configured. Add the three VITE_EMAILJS_* variables.');
    return {
      success: false,
      message: 'Online messages are temporarily unavailable. Please call, WhatsApp, or email us directly.',
    };
  }

  const templateParams = {
    // Keep both naming conventions so existing and replacement templates work.
    name: formData.name,
    user_name: formData.name,
    from_name: formData.name,
    email: formData.email,
    user_email: formData.email,
    from_email: formData.email,
    reply_to: formData.email,
    phone: formData.phone,
    phone_number: formData.phone,
    message: formData.message,
    to_email: 'qadoshmedical@gmail.com',
  };

  try {
    await emailjs.send(
      emailConfig.serviceId!,
      emailConfig.templateId!,
      templateParams,
      {
        publicKey: emailConfig.publicKey!,
        limitRate: { id: 'qadosh-contact-form', throttle: 10_000 },
      },
    );

    return {
      success: true,
      message: 'Message sent. A member of our team will get back to you shortly.',
    };
  } catch (error) {
    const status = error instanceof EmailJSResponseStatus ? error.status : undefined;
    const detail = error instanceof EmailJSResponseStatus ? error.text : String(error);
    console.error('EmailJS request failed', { status, detail });

    return {
      success: false,
      message:
        status === 429
          ? 'Please wait a few seconds before trying again.'
          : 'We could not send that message. Please call, WhatsApp, or email us directly.',
    };
  }
};
