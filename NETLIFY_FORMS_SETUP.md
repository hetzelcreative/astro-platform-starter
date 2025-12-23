# Netlify Forms Setup Guide

## ✅ What's Already Done

The contact form is set up and ready to go! It includes:
- ✅ Netlify Forms integration
- ✅ Honeypot spam prevention
- ✅ Form validation
- ✅ Thank you page redirect
- ✅ Responsive design

## 🚀 How It Works

When you deploy to Netlify, the form will automatically be detected and activated. No additional setup needed for basic functionality!

## 📧 Setting Up Email Notifications

To receive an email when someone submits the form:

1. **Deploy your site to Netlify** first (forms only work on deployed sites)

2. **Go to your Netlify dashboard:**
   - Navigate to: `Site Settings > Forms`
   - You'll see your "contact" form listed

3. **Add Email Notifications:**
   - Click on the form name
   - Go to `Form notifications` section
   - Click `Add notification`
   - Choose `Email notification`
   - Enter the email address where you want to receive submissions
   - Optional: Customize the email subject line

4. **Test it:**
   - Go to your live site
   - Fill out and submit the form
   - Check your email inbox!

## 🛡️ Spam Prevention Options

### Built-in (Already Configured):
- **Honeypot field** - Invisible field that bots fill out (already in the form)

### Additional Options (Configure in Netlify Dashboard):

1. **Akismet Spam Filtering** (Recommended):
   - Go to: `Site Settings > Forms > Form detection`
   - Enable Akismet
   - Sign up for free Akismet API key at akismet.com
   - Add API key in Netlify

2. **reCAPTCHA v2**:
   - Get reCAPTCHA keys from Google
   - Add to Netlify: `Site Settings > Forms > reCAPTCHA`
   - Update form to include reCAPTCHA widget

## 📊 Viewing Submissions

1. Go to Netlify Dashboard
2. Navigate to: `Forms` tab
3. Click on "contact" form
4. View all submissions with timestamps
5. Export to CSV if needed

## 💰 Pricing

- **Free Tier**: 100 submissions/month
- **Pro**: 1,000 submissions/month ($19/month)
- **Business**: 10,000 submissions/month ($99/month)

For most small business sites, the free tier is plenty!

## 🔧 Testing Locally

**Important:** Netlify Forms only work on deployed sites, not localhost!

To test locally:
1. Deploy to Netlify
2. Use the deploy preview URL
3. Or use Netlify Dev: `netlify dev` (requires Netlify CLI)

## 📝 Customization

### Change Success Message
Edit: `/src/pages/thank-you.astro`

### Add More Fields
Edit: `/src/components/ContactForm.astro`

Remember to keep:
- `data-netlify="true"`
- `name="contact"` (or update everywhere)
- The hidden honeypot field

### Send to Multiple Emails
In Netlify Dashboard, add multiple email notification rules

## 🔗 Alternative: Webhook Integration

Instead of email, you can send form submissions to:
- Slack
- Discord
- Zapier (connect to 1000+ apps)
- Custom webhook endpoint

Configure in: `Site Settings > Forms > Form notifications`

## 🎯 Best Practices

1. **Always test after deployment** - Forms don't work locally
2. **Monitor spam submissions** - Enable Akismet if you get spam
3. **Set up autoresponder** - Send confirmation email to submitter
4. **GDPR compliance** - Add privacy policy link (already included)
5. **Set reasonable rate limits** - Prevent abuse

## 📚 Resources

- [Netlify Forms Docs](https://docs.netlify.com/forms/setup/)
- [Form Spam Prevention](https://docs.netlify.com/forms/spam-filters/)
- [Form Notifications](https://docs.netlify.com/forms/notifications/)
