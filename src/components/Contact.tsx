import { Helmet } from 'react-helmet-async';
import { Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { sendEmail, type ContactFormData } from '../lib/emailjs';

export default function Contact() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const result = await sendEmail(formData);
            setSubmitStatus({
                type: result.success ? 'success' : 'error',
                message: result.message
            });

            if (result.success) {
                // Reset form on success
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                });
            }
        } catch {
            setSubmitStatus({
                type: 'error',
                message: 'An unexpected error occurred. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact Qadosh Medical Services - Get in Touch Today</title>
                <meta name="description" content="Contact Qadosh Medical Services for home healthcare. Call +2348057820833 or email qadoshmedical@gmail.com. Get expert medical care at your convenience." />
                <meta name="keywords" content="contact us, medical consultation, home healthcare contact, Nigeria medical services, phone consultation, medical concierge contact" />
                
                {/* Open Graph */}
                <meta property="og:title" content="Contact Qadosh Medical Services - Get in Touch Today" />
                <meta property="og:description" content="Contact Qadosh Medical Services for home healthcare. Call +2348057820833 or email qadoshmedical@gmail.com." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://qadoshmedical.com/#contact" />
                
                {/* Twitter */}
                <meta name="twitter:title" content="Contact Qadosh Medical Services - Get in Touch Today" />
                <meta name="twitter:description" content="Contact Qadosh Medical Services for home healthcare. Call +2348057820833 or email qadoshmedical@gmail.com." />
            </Helmet>
            
            <section id="contact" className="bg-white rounded-lg px-2 py-2 lg:px-12 lg:py-18">
                <div className="">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">CONTACT US</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            If you have any questions, please feel free to get in touch with us via 
                            phone, text, email, the form below, or even on social media!
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Side - Contact Form */}
                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">GET IN TOUCH</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            NAME
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter your name*"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            PHONE NUMBER
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Enter your phone number*"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        EMAIL
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email*"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        YOUR MESSAGE
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={6}
                                        placeholder="Enter your message..."
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                    ></textarea>
                                </div>

                                {/* Status Message */}
                                {submitStatus.type && (
                                    <div className={`flex items-center space-x-2 p-4 rounded-md ${
                                        submitStatus.type === 'success' 
                                            ? 'bg-green-50 text-green-800 border border-green-200' 
                                            : 'bg-red-50 text-red-800 border border-red-200'
                                    }`}>
                                        {submitStatus.type === 'success' ? (
                                            <CheckCircle size={20} className="text-green-600" />
                                        ) : (
                                            <AlertCircle size={20} className="text-red-600" />
                                        )}
                                        <span className="text-sm font-medium">{submitStatus.message}</span>
                                    </div>
                                )}
                                
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 px-6 rounded-full font-semibold transition-colors duration-200 ${
                                        isSubmitting
                                            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                            : 'bg-primary text-white hover:bg-primary/90'
                                    }`}
                                >
                                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                                </button>
                            </form>
                        </div>

                        {/* Right Side - Contact Info & Hours */}
                        <div className="space-y-8">
                            {/* Contact Information */}
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">CONTACT INFORMATION</h3>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-6 h-6 text-primary mt-1">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-700 mb-1">PHONE</p>
                                            <a href="tel:+2348057820833" className="text-gray-900 hover:text-primary transition-colors duration-200">
                                                +234 805 782 0833
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <div className="w-6 h-6 text-primary mt-1">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-700 mb-1">EMAIL</p>
                                            <a href="mailto:qadoshmedical@gmail.com" className="text-gray-900 hover:text-primary transition-colors duration-200">
                                                qadoshmedical@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}