# EmailJS Setup Guide

This guide will help you set up EmailJS to enable your contact form to send emails directly from the frontend.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxxxxx`)

## Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env.local` in your project root
2. Add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual IDs from steps 2-4.

For the Vercel deployment, add the same three values under **Project Settings → Environment Variables** for Production and Preview, then redeploy. Vite reads these values at build time, so changing them without a new deployment will not update the live bundle.

In the EmailJS template, keep the provider-connected address as the **From Email**. Set **Reply-To** to `{{reply_to}}`; using a visitor's address as the sender can cause Gmail/Outlook authentication failures. The form sends both the current field names and common EmailJS aliases (`name`, `user_name`, `from_name`, `email`, `user_email`, `from_email`, and `reply_to`) to remain compatible with existing templates.

## Step 6: Test the Integration

1. Start your development server: `pnpm dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your email for the message

## Features Included

✅ **Form Validation**: All required fields are validated
✅ **Loading States**: Button shows "SENDING..." during submission
✅ **Success/Error Messages**: Clear feedback to users
✅ **Form Reset**: Form clears after successful submission
✅ **TypeScript Support**: Fully typed for better development experience

## Troubleshooting

### Common Issues:

1. **"Failed to send message" error**
   - Check that all environment variables are set correctly
   - Verify your EmailJS service is active
   - Check browser console for detailed error messages

2. **Emails not received**
   - Check spam/junk folder
   - Verify the email template is set up correctly
   - Ensure your email service provider allows the connection

3. **CORS or origin errors**
   - Make sure you're using the correct public key
   - Add both `https://qadoshmedical.com` and `https://www.qadoshmedical.com` to the EmailJS domain allowlist

4. **Works locally but not on Vercel**
   - Confirm all three variables are assigned to the Production environment
   - Redeploy after any environment-variable change
   - Check the browser console for the returned EmailJS status and message

### Testing in Development:

- The form will work in development mode
- Make sure to test with real email addresses
- Check the browser's Network tab for any failed requests

## Security Notes

- The public key is safe to expose in frontend code
- EmailJS handles the actual email sending securely
- No sensitive data is stored in the frontend
- Rate limiting is handled by EmailJS

## Support

If you encounter issues:
1. Check the EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Verify your configuration matches this guide
3. Test with a simple template first
