import { AlertCircle, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { sendEmail, type ContactFormData } from '../lib/emailjs';

const initialForm: ContactFormData = { name: '', phone: '', email: '', message: '', website: '' };

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: name === 'phone' ? value.replace(/\D/g, '') : value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const result = await sendEmail(formData);
    setSubmitStatus({ type: result.success ? 'success' : 'error', message: result.message });
    if (result.success) setFormData(initialForm);
    setIsSubmitting(false);
  };

  const fieldClass = 'form-field mt-2 w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-ink placeholder:text-muted/55 transition-[border-color,box-shadow] duration-150';

  return (
    <section id="contact" className="bg-white py-28 md:py-44">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-line pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <h2 className="section-title max-w-4xl">Tell us what care would make life easier right now.</h2>
          <p className="body-copy lg:justify-self-end">Share a little about what you need. We’ll respond to discuss availability and the right next step. For emergencies, contact your local emergency service.</p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[0.68fr_1.32fr]">
          <div className="flex flex-col justify-between">
            <div className="space-y-7">
              <a href="tel:+2348057820833" className="group flex items-center gap-4 border-b border-line pb-6">
                <span className="grid size-12 place-items-center rounded-full bg-wash text-primary"><Phone size={19} /></span>
                <span><span className="block text-sm text-muted">Call us</span><span className="mt-1 block text-lg font-medium group-hover:text-primary">+234 805 782 0833</span></span>
              </a>
              <a href="mailto:qadoshmedical@gmail.com" className="group flex min-w-0 items-center gap-4 border-b border-line pb-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-wash text-primary"><Mail size={19} /></span>
                <span className="min-w-0"><span className="block text-sm text-muted">Email us</span><span className="mt-1 block break-all text-lg font-medium group-hover:text-primary">qadoshmedical@gmail.com</span></span>
              </a>
              <div className="flex items-center gap-4 border-b border-line pb-6">
                <span className="grid size-12 place-items-center rounded-full bg-wash text-primary"><MapPin size={19} /></span>
                <span><span className="block text-sm text-muted">Service area</span><span className="mt-1 block text-lg font-medium">Nigeria</span></span>
              </div>
            </div>
            <p className="mt-12 max-w-sm text-sm leading-6 text-muted">Please do not send sensitive medical records through this form.</p>
          </div>

          <form onSubmit={handleSubmit} className="border border-line bg-wash p-7 sm:p-10 lg:p-14" aria-label="Contact Qadosh">
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="group text-sm font-medium transition-colors focus-within:text-primary">Name
                <input name="name" value={formData.name} onChange={handleInputChange} autoComplete="name" placeholder="John Doe" className={fieldClass} required />
              </label>
              <label className="group text-sm font-medium transition-colors focus-within:text-primary">Phone number
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} autoComplete="tel" inputMode="numeric" pattern="[0-9]*" maxLength={15} placeholder="08000000000" className={fieldClass} required />
              </label>
            </div>
            <label className="group mt-8 block text-sm font-medium transition-colors focus-within:text-primary">Email address
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} autoComplete="email" placeholder="johndoe@gmail.com" className={fieldClass} required />
            </label>
            <label className="group mt-8 block text-sm font-medium transition-colors focus-within:text-primary">How can we help?
              <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} minLength={10} placeholder="I’d like to arrange a home consultation." className={`${fieldClass} resize-y`} required />
            </label>
            <label className="absolute -left-[10000px]" aria-hidden="true">Website
              <input name="website" value={formData.website} onChange={handleInputChange} tabIndex={-1} autoComplete="off" />
            </label>

            {submitStatus.type && (
              <div role={submitStatus.type === 'error' ? 'alert' : 'status'} className={`mt-6 flex items-start gap-3 border p-4 text-sm ${submitStatus.type === 'success' ? 'border-secondary bg-white text-ink' : 'border-red-300 bg-red-50 text-red-900'}`}>
                {submitStatus.type === 'success' ? <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" /> : <AlertCircle size={20} className="mt-0.5 shrink-0" />}
                <span>{submitStatus.message}{submitStatus.type === 'error' && <> <a className="font-semibold underline" href="mailto:qadoshmedical@gmail.com">Email us instead.</a></>}</span>
              </div>
            )}

            <button type="submit" disabled={isSubmitting} className="primary-button mt-8 min-w-48 disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? 'Sending…' : 'Send your request'}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
