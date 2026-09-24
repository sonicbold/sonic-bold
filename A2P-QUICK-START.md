# Quick Start: A2P 10DLC Registration for Sonic Bold

## CRITICAL: Read This First 🚨

**DO NOT send any SMS messages until your 10DLC campaign is approved by carriers.**

Sending messages from an unregistered number will result in:
- Carrier blocking
- Poor delivery rates (< 10%)
- Potential fines
- Blacklisting

---

## Step-by-Step Registration Process

### Step 1: Register Your Brand (1-7 days)

1. **Go to The Campaign Registry**
   - Visit: https://www.thecampaignregistry.com
   - Click "Register Your Brand"
   - Create an account

2. **Enter Business Information**
   ```
   Legal Business Name: Sonic Bold LLC
   Business Type: Limited Liability Company (LLC)
   Country: United States
   State: Montana
   EIN: [Your EIN Number]
   Website: https://www.sonicbold.com
   Business Phone: +1 203-791-3925
   Business Email: contact@sonicbold.com
   Address: 55 W 14th St Ste 101, Helena, MT 59601-3387
   ```

3. **Upload Verification Documents**
   Required documents:
   - [ ] EIN Letter from IRS (most important)
   - [ ] Certificate of Formation (Montana LLC docs)
   - [ ] Business License (if you have one)
   - [ ] Proof of website ownership (domain registration)

4. **Choose Vetting Level**
   
   **Option 1: Standard Vetting (FREE)**
   - Takes 5-7 business days
   - Lower trust score (lower throughput)
   - 60 messages per minute limit
   - Good for most businesses
   
   **Option 2: Enhanced Vetting ($40-$50)**
   - Takes 1-3 business days
   - Higher trust score
   - Better deliverability
   - 4,500+ messages per minute
   - **RECOMMENDED** if you'll send >500 messages/month

5. **Wait for Brand Approval**
   - You'll receive an email when approved
   - You'll get a **Brand ID** (save this!)

---

### Step 2: Register Your Campaign (1-5 days)

Once your brand is approved:

1. **Log in to TCR**
   - Go back to The Campaign Registry
   - Click "Register Campaign"

2. **Select Your Brand**
   - Choose "Sonic Bold LLC" (your approved brand)

3. **Choose Campaign Type**
   - **Select: "Mixed Marketing & Customer Care"**
   - This covers both marketing AND transactional messages

4. **Describe Your Campaign**
   
   **Campaign Name:**
   ```
   Sonic Bold - Marketing & Customer Service
   ```

   **Campaign Description:**
   ```
   B2B marketing and customer service text messages for plumbing contractor clients. Messages include appointment confirmations, marketing audit scheduling, campaign performance updates, service promotions, and account notifications. All recipients explicitly opt-in via required checkbox consent on our website forms.
   ```

   **Message Flow Description:**
   ```
   1. User submits contact form on sonicbold.com
   2. User must check SMS consent checkbox (required field)
   3. We send appointment confirmation via SMS
   4. We send service updates and marketing offers (2-4x/month)
   5. User can opt out anytime by replying STOP
   6. User can get help by replying HELP
   ```

5. **Provide Sample Messages**

   **Sample 1 (Appointment Confirmation):**
   ```
   Hi Dave, your free marketing audit is confirmed for Tues 3/15 at 2pm. We'll review your Google Ads + website. Reply CONFIRM. Questions? Call 203-791-3925. Reply STOP to opt out.
   ```

   **Sample 2 (Service Update):**
   ```
   Sonic Bold here! Your plumbing leads increased 40% this month. Check your dashboard for details or reply INFO. Need to chat? Text us anytime or call 203-791-3925. Reply STOP to unsubscribe.
   ```

   **Sample 3 (Marketing Offer):**
   ```
   [Name], special offer: Get a free AI receptionist trial (2 weeks) with any new website build. Capture every lead 24/7. Reply YES for details or STOP to opt out. 203-791-3925
   ```

6. **Message Content Attributes**
   
   **Message Type:** Check ALL that apply:
   - [x] Marketing
   - [x] Customer Care
   - [x] Account Notifications
   
   **Opt-In Method:**
   - [x] Website Form (with required checkbox)
   
   **Opt-Out Method:**
   - [x] Reply STOP to any message
   
   **Message Volume:** 
   ```
   Expected Monthly Volume: 500-2,000 messages
   Peak Monthly Volume: 5,000 messages
   ```

   **Help Keywords:**
   - [x] STOP (opt-out)
   - [x] HELP (support)

7. **Embedded Links/Phone Numbers**
   
   **Will messages contain links?**
   - [x] Yes
   
   **Types of links:**
   - Campaign performance dashboards
   - Booking/scheduling pages
   - Blog articles
   - Service information pages
   
   **Will messages contain phone numbers?**
   - [x] Yes
   - Phone: (203) 791-3925

8. **Age-Gated Content**
   - [ ] No (B2B service, not age-restricted)

9. **Submit Campaign**
   - Review all information
   - Click "Submit for Review"
   - Wait for approval email (1-5 business days)
   - You'll receive a **Campaign ID** when approved

---

### Step 3: Connect to Your SMS Provider

Once campaign is approved:

#### If Using Twilio:

1. **Log in to Twilio Console**
   - Go to https://console.twilio.com

2. **Navigate to Messaging > Regulatory Compliance**
   - Click "Regulatory Bundles"

3. **Create a New Bundle**
   - Select "A2P 10DLC"
   - Enter your TCR Brand ID
   - Enter your TCR Campaign ID

4. **Link Your Phone Number**
   - Go to Phone Numbers > Manage > Active Numbers
   - Click on your 10-digit number
   - Under "Messaging", select your A2P Bundle
   - Save

5. **Wait for Carrier Approval**
   - AT&T: Usually instant
   - T-Mobile: 1-3 days
   - Verizon: 1-3 days

#### If Using Another Provider (Bandwidth, Telnyx, etc.):

- Follow their 10DLC setup guide
- Provide your TCR Brand ID and Campaign ID
- Link your phone number to the campaign

---

### Step 4: Set Up Automation

You MUST automate STOP and HELP responses:

#### STOP Keyword (Required)
When someone texts "STOP":
```
You have been unsubscribed from Sonic Bold text messages. You will not receive any further messages. Reply START to resubscribe or call 203-791-3925 with questions.
```

**Action:** Immediately remove from messaging list (NO delay)

#### HELP Keyword (Required)
When someone texts "HELP":
```
Sonic Bold - Marketing services for plumbers. For help, call 203-791-3925 or email contact@sonicbold.com. Msg frequency varies. Msg&data rates may apply. Reply STOP to opt out.
```

#### START Keyword (Optional but recommended)
When someone texts "START" after opting out:
```
You have been re-subscribed to Sonic Bold text messages. You'll receive appointment confirmations and updates 2-4x/month. Reply STOP anytime to opt out or HELP for assistance.
```

**Use automation tools:**
- Twilio Studio
- Zapier
- Make (Integromat)
- Custom webhook

---

### Step 5: Test Everything

Before sending to real customers:

1. **Test STOP**
   - Text STOP to your number
   - Verify immediate opt-out confirmation
   - Verify you receive no more messages

2. **Test HELP**
   - Text HELP to your number
   - Verify you receive help message
   - Verify contact info is correct

3. **Test START**
   - After STOP, text START
   - Verify re-subscription works

4. **Test Real Message Flow**
   - Submit a form on your website with YOUR phone number
   - Verify consent is logged
   - Verify you receive the expected message

5. **Check Deliverability**
   - Send test messages to multiple carriers (AT&T, T-Mobile, Verizon)
   - Verify 100% delivery

---

## Timeline

| Step | Action | Time |
|------|--------|------|
| 1 | Register Brand with TCR | 1-7 days |
| 2 | Register Campaign with TCR | 1-5 days |
| 3 | Connect to SMS Provider | 1-3 days |
| 4 | Carrier Approval | Instant - 3 days |
| 5 | Test & Launch | 1 day |
| **TOTAL** | | **4-19 days** |

**Plan for 2-3 weeks from start to launch**

---

## Costs

### Brand Registration
- **Standard Vetting:** FREE
- **Enhanced Vetting:** $40-50 (one-time)
- **Renewal:** $4-10/year

### Campaign Registration
- **Standard Campaign:** FREE
- **Special Use Cases:** May have fees

### SMS Provider (Ongoing)
- **Phone Number:** $1-2/month
- **Messages:** $0.0075 - $0.015 per message
- **Carrier Fees:** $0.003 - $0.005 per message

**Example Monthly Cost:**
- 500 messages = $4-10/month + phone number
- 2,000 messages = $15-40/month + phone number

---

## Troubleshooting

### Brand Registration Rejected
**Reasons:**
- EIN doesn't match business name
- Website doesn't load or looks suspicious
- Business address invalid

**Fix:**
- Double-check all information
- Upload clear EIN documentation
- Ensure website is live and professional
- Resubmit

### Campaign Registration Rejected
**Reasons:**
- Sample messages too vague
- Missing opt-in/opt-out details
- Prohibited content

**Fix:**
- Use sample messages from this guide
- Clearly describe opt-in process
- Remove any prohibited content (crypto, cannabis, age-restricted)
- Resubmit

### Low Delivery Rate After Approval
**Reasons:**
- High opt-out rate (>5% is bad)
- Spam complaints
- Sending too frequently
- Content looks like spam

**Fix:**
- Only send to people who opted in
- Reduce message frequency
- Make content more valuable
- Always include STOP instructions

---

## Important Rules

### ✅ DO:
- Get explicit checkbox consent BEFORE sending
- Honor STOP immediately (within seconds)
- Send opt-out confirmation
- Include STOP in every message
- Keep messages under 160 characters when possible
- Send during reasonable hours (9am-9pm local)
- Keep accurate opt-in records (4+ years)

### ❌ DON'T:
- Send before 10DLC approval
- Pre-check the opt-in checkbox
- Send after someone replies STOP
- Buy phone number lists
- Use deceptive sender names
- Send spam or scams
- Ignore high opt-out rates

---

## Getting Help

### TCR Support
- Email: support@thecampaignregistry.com
- Knowledge Base: https://www.campaignregistry.com/s/knowledge

### Twilio Support (if using Twilio)
- Docs: https://www.twilio.com/docs/sms/a2p-10dlc
- Support: https://support.twilio.com

### CTIA Resources
- Messaging Principles: https://www.ctia.org/the-wireless-industry/industry-commitments/messaging-principles-and-best-practices

---

## Checklist

Before you start:
- [ ] Have EIN documentation ready
- [ ] Website is live and professional
- [ ] Business phone and email active
- [ ] SMS provider chosen (Twilio, etc.)
- [ ] Know expected message volume

After approval:
- [ ] Brand approved (have Brand ID)
- [ ] Campaign approved (have Campaign ID)
- [ ] Phone number linked to campaign
- [ ] STOP automation working
- [ ] HELP automation working
- [ ] Opt-in logging system ready
- [ ] Tested on all carriers

Ready to launch:
- [ ] Privacy Policy updated
- [ ] Terms of Service updated
- [ ] Forms on website updated
- [ ] Team trained on compliance
- [ ] Recordkeeping system in place

---

**Status:** Follow this guide step-by-step  
**Support:** contact@sonicbold.com  
**Timeline:** Budget 2-3 weeks for full approval
