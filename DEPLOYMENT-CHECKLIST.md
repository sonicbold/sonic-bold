# Deployment Checklist for Sonic Bold Website Rebuild

## Pre-Deployment Checklist

### 1. Review All Changes ✅
- [ ] Read `REBUILD-SUMMARY.md` completely
- [ ] Review `index.html` changes in browser locally
- [ ] Understand A2P 10DLC requirements in `A2P-10DLC-COMPLIANCE.md`
- [ ] Review `A2P-QUICK-START.md` for registration process

### 2. Test Locally 🧪

#### Visual Testing
- [ ] Open `index.html` in browser
- [ ] Check hero section displays correctly
- [ ] Verify all 6 services show properly
- [ ] Scroll through entire page
- [ ] Check case studies are intact
- [ ] Verify footer displays with A2P disclosure

#### Form Testing
- [ ] Try submitting hero form WITHOUT checking SMS consent box (should fail)
- [ ] Try submitting WITH checkbox checked (should work)
- [ ] Verify checkbox is required
- [ ] Check consent language is readable
- [ ] Test modal form (click CTA, test same way)
- [ ] Verify form success messages appear

#### Mobile Testing
- [ ] Open in Chrome DevTools mobile view
- [ ] Test on iPhone size (375px width)
- [ ] Test on Android size (412px width)
- [ ] Check all forms work on mobile
- [ ] Verify mobile sticky bar appears
- [ ] Test all buttons are tappable

#### Link Testing
- [ ] Click all navigation links
- [ ] Test all footer links
- [ ] Verify Privacy Policy link works
- [ ] Verify Terms link works
- [ ] Check all service page links

### 3. Update Legal Documents 📄

#### Privacy Policy (CRITICAL)
Location: `privacy-policy.html`

Add or update these sections:

**Section: "Information We Collect"**
```
Phone Numbers and SMS Consent
When you submit a form on our website and check the SMS consent checkbox, 
we collect your phone number along with your explicit consent to receive 
text messages. We record:
- Phone number
- Date and time of consent
- IP address at time of consent
- Form location (which page)
- Consent checkbox status (checked = yes)
```

**Section: "How We Use Your Information"**
```
SMS/Text Messaging
If you provide consent via checkbox on our forms, we will send you text 
messages including:
- Appointment confirmations and reminders
- Marketing promotions and special offers
- Service updates and account notifications
- Campaign performance updates (for active clients)

Message frequency varies but typically averages 2-4 messages per month.
You can opt out at any time by replying STOP to any message.

We use third-party SMS service providers (Twilio, Bandwidth, etc.) to 
deliver messages. These providers may access your phone number and 
message history to provide the service.
```

**Section: "Third-Party Services"**
```
SMS Service Providers
We use [Provider Name] to send text messages. When you opt in to SMS, 
your phone number is shared with [Provider] to deliver messages. 
[Provider]'s privacy policy: [Link]
```

**Section: "Your Rights and Choices"**
```
SMS Opt-Out
You can opt out of text messages at any time by:
- Replying STOP to any message from us
- Emailing contact@sonicbold.com with "SMS Opt-Out" in subject
- Calling us at 203-791-3925

After opting out, you will receive one final confirmation message, 
then no further messages unless you opt back in.
```

**Section: "Data Retention"**
```
SMS Consent Records
We retain SMS opt-in records (including timestamp, IP address, and 
consent status) for a minimum of 4 years to comply with TCPA 
regulations. Opt-out requests are retained indefinitely.
```

#### Terms of Service (CRITICAL)
Location: `terms.html`

Add a new section:

**New Section: "SMS/Text Messaging Terms"**
```
SMS/TEXT MESSAGING TERMS

1. Consent to Receive Messages
By checking the SMS consent checkbox on our forms and providing your 
phone number, you expressly consent to receive text messages (SMS/MMS) 
from Sonic Bold at the number provided.

2. Types of Messages
Messages may include:
- Appointment confirmations and reminders
- Marketing promotions and special offers
- Service updates and notifications
- Account information and performance updates

3. Message Frequency
Message frequency varies based on your engagement and activity. You may 
receive an average of 2-4 messages per month, with a maximum of 8 
messages per month.

4. Cost
Message and data rates may apply from your mobile carrier. We do not 
charge for messages, but your carrier may charge you for SMS/data usage 
according to your plan.

5. Opt-Out (STOP)
You can opt out of receiving text messages at any time by replying STOP 
to any message from Sonic Bold. You will receive one final confirmation 
message after opting out, then no further messages unless you opt back in.

6. Help (HELP)
For assistance, reply HELP to any message or contact us at:
- Phone: 203-791-3925
- Email: contact@sonicbold.com

7. Opt Back In (START)
If you opt out and later wish to resume receiving messages, reply START 
to any of our previous messages or resubmit a form with SMS consent.

8. Supported Carriers
Messages are supported on major US carriers including AT&T, Verizon, 
T-Mobile, Sprint, and others. Message delivery is not guaranteed on all 
carriers or devices.

9. No Purchase Necessary
Consent to receive text messages is not required as a condition of 
purchasing any goods or services from Sonic Bold.

10. Privacy
Your phone number and SMS interactions are subject to our Privacy Policy 
available at [link]. We do not sell your phone number to third parties.

11. Changes to Terms
We may update these SMS terms at any time. Continued receipt of messages 
after changes constitutes acceptance of the updated terms.

12. Termination
We reserve the right to terminate SMS services to any number at any time 
for any reason, including suspected abuse, spam, or violations of these 
terms.
```

### 4. A2P 10DLC Registration ⚠️

#### Start BEFORE Deployment
**Critical:** You cannot send SMS until approved!

- [ ] Register brand with The Campaign Registry (1-7 days)
- [ ] Submit business documentation (EIN, etc.)
- [ ] Receive Brand ID
- [ ] Register campaign (1-5 days)
- [ ] Use sample messages from `A2P-10DLC-COMPLIANCE.md`
- [ ] Receive Campaign ID
- [ ] Connect to SMS provider (Twilio, etc.)
- [ ] Wait for carrier approval (instant - 3 days)

**Timeline: 4-19 days total**

See `A2P-QUICK-START.md` for detailed steps.

### 5. Set Up SMS System 📱

#### Choose SMS Provider
Options:
- **Twilio** (most popular, great docs)
- **Bandwidth** (good for high volume)
- **Telnyx** (cost-effective)

#### Get Phone Number
- [ ] Purchase US 10-digit number from provider
- [ ] Link number to your 10DLC campaign
- [ ] Test number can receive SMS

#### Set Up Automation
Must automate these responses:

**STOP Automation** (Required)
- [ ] When user texts STOP → immediate opt-out
- [ ] Send confirmation: "You have been unsubscribed..."
- [ ] Remove from all messaging lists
- [ ] Log opt-out with timestamp

**HELP Automation** (Required)
- [ ] When user texts HELP → send help message
- [ ] Include contact info (phone + email)
- [ ] Include opt-out instructions

**START Automation** (Optional)
- [ ] When user texts START → re-subscribe them
- [ ] Send confirmation: "You have been re-subscribed..."

Tools to use:
- Twilio Studio (visual flow builder)
- Zapier (if using Twilio + CRM)
- Make/Integromat
- Custom webhook/API

#### Set Up Consent Logging
- [ ] System to capture form submissions
- [ ] Log phone number + timestamp + IP + consent status
- [ ] Store for 4+ years (TCPA requirement)
- [ ] Export capability for audits

Suggestion: Use Google Sheets, Airtable, or proper CRM

### 6. Configure Web3Forms 📧

Your forms currently submit to Web3Forms. Ensure:

- [ ] Web3Forms access key is valid: `1dc563ff-b844-4df1-9254-53dc5b78e3f5`
- [ ] Receiving emails at correct address
- [ ] Form submissions include SMS consent status
- [ ] Test submission reaches your inbox
- [ ] Consider adding webhook to log consent to database

### 7. Validate Technical SEO 🔍

#### Schema Markup
- [ ] Go to https://search.google.com/test/rich-results
- [ ] Enter: https://www.sonicbold.com/
- [ ] Verify Organization schema validates
- [ ] Verify FAQPage schema validates
- [ ] Fix any errors

#### Page Speed
- [ ] Go to https://pagespeed.web.dev/
- [ ] Test desktop version
- [ ] Test mobile version
- [ ] Aim for 90+ score (currently should be good)

#### Mobile-Friendly Test
- [ ] Go to https://search.google.com/test/mobile-friendly
- [ ] Enter: https://www.sonicbold.com/
- [ ] Verify passes

#### Meta Tags
- [ ] Check title tag in browser tab
- [ ] View source, verify meta description
- [ ] Check Open Graph tags (share on social media)

### 8. Browser Testing 🌐

Test in multiple browsers:

- [ ] Chrome (latest)
- [ ] Safari (desktop)
- [ ] Safari (iPhone)
- [ ] Firefox
- [ ] Edge
- [ ] Chrome (Android)

Check:
- Forms work
- Checkboxes required
- Mobile responsive
- No JavaScript errors (F12 console)

### 9. Analytics & Tracking 📊

Verify these still work:

- [ ] Google Tag Manager: GTM-T854R3X2
- [ ] Google Analytics: GA4 G-5TQ9TZVP8Y
- [ ] Google Tag loads correctly
- [ ] Test by viewing page → check GA Real-Time reports
- [ ] Cloudflare Insights beacon loads

### 10. Create Backup 💾

Before deploying:

- [ ] Download current live site completely
- [ ] Save in safe location
- [ ] Include all files (HTML, CSS, JS, images)
- [ ] Test backup can be restored if needed

---

## Deployment Steps

### Option 1: Manual FTP/SFTP Upload

If you host with traditional web host:

1. **Backup Current Site**
   - [ ] Download all current files via FTP
   - [ ] Save locally with date stamp

2. **Upload New Files**
   - [ ] Upload `index.html` (replaces old one)
   - [ ] Upload `privacy-policy.html` (after updating)
   - [ ] Upload `terms.html` (after updating)
   - [ ] DO NOT upload .md files (those are docs for you)

3. **Verify Upload**
   - [ ] Visit https://www.sonicbold.com
   - [ ] Force refresh (Ctrl + Shift + R)
   - [ ] Check new content shows

### Option 2: Git Deploy

If you use GitHub/GitLab + hosting integration:

1. **Commit Changes**
   ```bash
   git add index.html
   git commit -m "Rebuild homepage with full service suite and A2P compliance"
   ```

2. **Update Legal Pages**
   ```bash
   git add privacy-policy.html terms.html
   git commit -m "Add SMS/A2P disclosures to legal pages"
   ```

3. **Push to Production**
   ```bash
   git push origin main
   ```

4. **Verify Deploy**
   - [ ] Check deployment status on hosting platform
   - [ ] Visit live site
   - [ ] Force refresh to clear cache

### Option 3: Static Site Host (Netlify, Vercel, etc.)

1. **Drag & Drop Deploy**
   - [ ] Zip your files
   - [ ] Drag to hosting platform
   - [ ] Wait for build
   - [ ] Get deploy preview URL
   - [ ] Test preview
   - [ ] Promote to production

---

## Post-Deployment Checklist

### Immediate (Within 1 Hour)

- [ ] Visit https://www.sonicbold.com
- [ ] Hard refresh (Ctrl + Shift + R or Cmd + Shift + R)
- [ ] Verify new hero text shows
- [ ] Check all 6 services display
- [ ] Submit test form (use YOUR phone number)
- [ ] Verify form submission works
- [ ] Check email notification arrives
- [ ] Verify on mobile (real device if possible)

### Same Day

- [ ] Submit form from desktop
- [ ] Submit form from mobile
- [ ] Test on different browsers
- [ ] Check Analytics shows visits
- [ ] Monitor for any error emails/reports
- [ ] Check page speed hasn't changed
- [ ] Test all navigation links

### Within 3 Days

- [ ] Google Search Console: Submit sitemap again
- [ ] Check for any crawl errors
- [ ] Monitor page speed trends
- [ ] Check no broken links reported
- [ ] Review form submission rate
- [ ] Monitor bounce rate changes

### Within 1 Week

- [ ] Complete A2P 10DLC registration
- [ ] Connect SMS provider
- [ ] Test STOP/HELP automation
- [ ] Send first test SMS to YOUR number
- [ ] Verify consent logging works
- [ ] Set up recurring backups

### Within 1 Month

- [ ] Monitor SEO rankings (did they improve/maintain?)
- [ ] Check conversion rate vs. before
- [ ] Update other service pages to match
- [ ] Consider updating blog posts
- [ ] Get client feedback on new positioning
- [ ] Optimize based on data

---

## Monitoring & Maintenance

### Daily (First Week)
- [ ] Check form submissions
- [ ] Monitor for errors
- [ ] Review SMS opt-out rate (should be < 2%)

### Weekly
- [ ] Review Analytics data
- [ ] Check page speed
- [ ] Monitor conversion rate
- [ ] Review SMS delivery rate

### Monthly
- [ ] Full site backup
- [ ] Security updates (if using CMS)
- [ ] Review and update FAQ
- [ ] Check all links still work
- [ ] Renew TCR brand (annually)

---

## Rollback Plan

If something goes wrong:

### Immediate Rollback
1. **Upload old backup files**
   - Via FTP or Git revert
   - Replace index.html with old version

2. **Clear CDN cache** (if using Cloudflare)
   - Go to Cloudflare dashboard
   - Purge cache for entire site

3. **Verify old site is back**
   - Force refresh multiple browsers
   - Check forms still work

### Partial Rollback
If only one thing is broken:
- Keep new index.html
- Fix specific issue
- Redeploy fixed version

---

## Emergency Contacts

### Technical Issues
- **Hosting Support:** [Your host's support]
- **DNS/Cloudflare:** Cloudflare support
- **Web3Forms:** support@web3forms.com

### A2P/SMS Issues
- **TCR Support:** support@thecampaignregistry.com
- **SMS Provider:** [Twilio/Bandwidth support]

### Legal/Compliance
- **TCPA Compliance:** [Your lawyer if needed]
- **Privacy Laws:** [Legal counsel]

---

## Success Metrics

Track these to measure success:

### Traffic
- [ ] Organic traffic trend
- [ ] Bounce rate
- [ ] Pages per session
- [ ] Time on site

### Conversions
- [ ] Form submission rate
- [ ] Phone calls
- [ ] Email inquiries
- [ ] Demo/audit requests

### SEO
- [ ] Keyword rankings
- [ ] Impressions in GSC
- [ ] Click-through rate
- [ ] Backlinks

### SMS (After A2P Approval)
- [ ] Delivery rate (should be 95%+)
- [ ] Opt-out rate (should be < 5%)
- [ ] Response rate
- [ ] Conversion from SMS

---

## Common Issues & Fixes

### Issue: Forms Not Submitting
**Check:**
- JavaScript errors in console (F12)
- Web3Forms API key valid
- Checkbox validation working
- Network request succeeds

**Fix:**
- Check console for errors
- Verify checkbox `required` attribute exists
- Test with simple form first

### Issue: SMS Consent Checkbox Not Required
**Check:**
- HTML has `required` attribute on checkbox
- JavaScript not removing requirement
- Browser supports required on checkboxes

**Fix:**
- Add `required` to input element
- Test in multiple browsers

### Issue: Mobile Layout Broken
**Check:**
- Viewport meta tag present
- CSS responsive breakpoints working
- Forms too wide

**Fix:**
- Clear browser cache
- Test in DevTools mobile view
- Check CSS media queries

### Issue: SEO Rankings Drop
**Check:**
- Schema markup still valid
- Meta tags correct
- No broken links
- Page speed still good

**Fix:**
- Use Search Console to diagnose
- Check for manual actions
- Resubmit sitemap
- Wait 2-4 weeks for rankings to stabilize

---

## Final Pre-Deployment Checklist

### Legal ✅
- [ ] Privacy Policy updated with SMS disclosures
- [ ] Terms updated with SMS terms
- [ ] Both publicly accessible
- [ ] A2P registration started

### Technical ✅
- [ ] Tested locally in multiple browsers
- [ ] Forms work correctly
- [ ] Checkbox is required
- [ ] Mobile responsive
- [ ] No JavaScript errors
- [ ] Schema validates
- [ ] Page speed good
- [ ] Analytics working

### Content ✅
- [ ] All services listed
- [ ] Case studies intact
- [ ] FAQ updated
- [ ] Contact info correct
- [ ] Footer compliance notice present
- [ ] No typos

### Backup ✅
- [ ] Current site backed up
- [ ] Can restore if needed
- [ ] Emergency contact list ready

### SMS System ✅
- [ ] A2P 10DLC registered (or in progress)
- [ ] SMS provider chosen
- [ ] STOP/HELP automation planned
- [ ] Consent logging system ready
- [ ] Know you CANNOT send SMS until approved

---

## Ready to Deploy?

If you checked ✅ everything above, you're ready!

**Recommended deployment time:**
- Tuesday or Wednesday
- Morning (9am-11am your time)
- NOT on Friday
- NOT before a holiday

This gives you time to monitor and fix issues before the weekend.

---

## Post-Launch Marketing

Once live, tell people:

- [ ] Update Google Business Profile description
- [ ] Update LinkedIn company page
- [ ] Update Facebook page
- [ ] Email existing clients about new services
- [ ] Update email signature
- [ ] Update business cards (if applicable)
- [ ] Update any ad copy to mention full services

---

**Rebuild Version:** 1.0  
**Deploy Date:** [Fill in after deployment]  
**Deployed By:** [Your name]  
**A2P Status:** [Registered/Pending/Not Started]  
**Next Review:** [30 days after deploy]
