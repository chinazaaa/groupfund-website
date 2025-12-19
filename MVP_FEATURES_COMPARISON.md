# GroupFund MVP Features - Website Comparison

This document compares the MVP features list with what's currently documented on the website across different pages.

## ✅ Well-Documented Features

### Groups
- ✅ **Create groups with invite codes** - Mentioned on How It Works, Features, Help pages
- ✅ **Join groups via invite code** - Mentioned on How It Works, Help pages
- ✅ **View my groups** - Implied throughout
- ✅ **Multi-currency support (NGN, USD, etc.)** - Prominently featured on Features, Home, FAQ pages
- ✅ **Fixed contribution amounts** - Featured on Features, Home, How It Works pages
- ✅ **Maximum group size** - Mentioned on Features, FAQ, Help pages
- ✅ **Approve/reject member requests** - Mentioned on Features, Help pages

### Birthday Features
- ✅ **Birthday calendar view** - Featured on Features, Home pages
- ✅ **Upcoming birthdays** - Mentioned in reminders context
- ✅ **Contribute to birthdays** - Implied through payment tracking
- ✅ **Confirm contributions** - Mentioned on FAQ, Help pages (celebrant confirms receipt)
- ✅ **Payment status tracking (Not Paid, Paid, Confirmed)** - Prominently featured on Features, Home, FAQ pages
- ✅ **Payment progress recaps** - Mentioned on Features, Home pages ("8 out of 10 members have paid")

### Notifications
- ✅ **Automatic reminders (7 days before, on deadline day)** - Prominently featured on Features, Home, How It Works, Help pages
- ✅ **Push notifications** - Mentioned on Download page
- ✅ **Notification preferences** - Mentioned on Help page

### Basic User Management
- ✅ **Password reset** - Mentioned on Help, FAQ pages
- ✅ **Account deletion** - Mentioned on FAQ, Help, Delete Account page

---

## ⚠️ Partially Documented Features

### Authentication & User Management
- ⚠️ **User signup with email/phone** - Implied but not explicitly detailed
- ⚠️ **OTP verification** - Not mentioned on public pages
- ⚠️ **JWT authentication** - Not mentioned (technical detail)
- ⚠️ **Change password (authenticated)** - Not explicitly mentioned
- ⚠️ **Resend OTP** - Not mentioned
- ⚠️ **User profile management** - Not explicitly mentioned
- ⚠️ **User verification system** - Not mentioned on public pages
- ⚠️ **User active/inactive status** - Not mentioned

### Groups
- ⚠️ **View group details** - Implied but not explicitly detailed
- ⚠️ **Preview group before joining** - Not mentioned
- ⚠️ **Group health/score (compliance metrics, health rating)** - Not mentioned
- ⚠️ **Group compliance tracking** - Not mentioned
- ⚠️ **Update group settings** - Partially mentioned (Help page says "not available in MVP" for changing amounts)
- ⚠️ **Accepting requests toggle (pause/resume)** - Not mentioned
- ⚠️ **Close groups (freeze activity)** - Not mentioned
- ⚠️ **Reopen closed groups** - Not mentioned
- ⚠️ **Group status management (active/closed)** - Not mentioned

### Member Management
- ⚠️ **View group members** - Implied but not explicitly detailed
- ⚠️ **Remove members (admin only)** - Mentioned on Help page
- ⚠️ **Leave groups** - Not explicitly mentioned
- ⚠️ **Member summary/reliability metrics** - **NOT MENTIONED AT ALL**
  - Total groups joined
  - Total contributions made
  - Total overdue contributions
  - On-time payment rate
  - Reliability score (0-100)
  - Summary rating (excellent/good/moderate/poor/new)

### Birthday Features
- ⚠️ **Past birthdays** - Not mentioned
- ⚠️ **Overdue contributions tracking** - Mentioned in admin context but not user-facing
- ⚠️ **Birthday details (user info, shared groups, contribution history)** - Not explicitly detailed
- ⚠️ **Reject contributions (celebrant marks as not received)** - Not explicitly mentioned (only "confirm" is mentioned)
- ⚠️ **Received contributions history** - Not explicitly mentioned
- ⚠️ **Contribution status: not_received** - Not mentioned (only Not Paid, Paid, Confirmed are mentioned)

### Notifications
- ⚠️ **In-app notifications** - Not explicitly mentioned
- ⚠️ **Notification types** - Only reminders are detailed, other types not mentioned:
  - Birthday wishes - Not mentioned
  - Birthday reminders (7 days, 1 day, same day) - Only "7 days before and on deadline" mentioned
  - Overdue contribution reminders - Not mentioned
  - Member join requests - Not mentioned
  - Contribution confirmations/rejections - Not mentioned
  - Group updates - Not mentioned
- ⚠️ **Mark notifications as read** - Not mentioned
- ⚠️ **Mark all as read** - Not mentioned
- ⚠️ **Unread count** - Not mentioned
- ⚠️ **Notification preferences (7 days before, 1 day before, same day)** - Only "7 days before and on deadline" mentioned

### Admin Panel
- ⚠️ **Admin panel exists** - Documented in ADMIN_README.md but not mentioned on public pages
- ⚠️ **User management** - Admin feature, not public
- ⚠️ **Group management** - Admin feature, not public
- ⚠️ **Transaction management** - Admin feature, not public
- ⚠️ **Contribution management** - Admin feature, not public
- ⚠️ **Notification management** - Admin feature, not mentioned
- ⚠️ **System statistics** - Admin feature, not public
- ⚠️ **Birthday management (trigger wishes, reminders, newsletter)** - Admin feature, visible in AdminDashboard

### Email System
- ⚠️ **Email service integration** - Not mentioned on public pages
- ⚠️ **OTP emails** - Not mentioned
- ⚠️ **Password reset emails** - Implied but not explicitly mentioned
- ⚠️ **Birthday wish emails** - Not mentioned
- ⚠️ **Birthday reminder emails** - Not explicitly mentioned (only in-app reminders are mentioned)
- ⚠️ **Overdue contribution reminder emails** - Not mentioned
- ⚠️ **Comprehensive birthday reminder emails** - Not mentioned
- ⚠️ **Contact form confirmation emails** - Not mentioned
- ⚠️ **Waitlist confirmation emails** - Not mentioned

---

## ❌ Missing Features (Not Mentioned on Website)

### Critical Missing Features:

1. **Member Reliability Metrics** ⚠️ **HIGH PRIORITY**
   - Total groups joined
   - Total contributions made
   - Total overdue contributions
   - On-time payment rate
   - Reliability score (0-100)
   - Summary rating (excellent/good/moderate/poor/new)
   - **This is a key differentiator and should be prominently featured!**

2. **Group Health/Score System** ⚠️ **HIGH PRIORITY**
   - Group compliance metrics
   - Health rating
   - **This could be a major selling point!**

3. **Advanced Group Management**
   - Preview group before joining
   - Pause/resume accepting requests
   - Close/reopen groups
   - Group status management

4. **Comprehensive Notification System**
   - All notification types beyond basic reminders
   - In-app notification center
   - Notification preferences

5. **Email System Details**
   - Email notifications and confirmations
   - Email-based OTP verification

6. **Advanced Birthday Features**
   - Past birthdays view
   - Reject contributions feature
   - Detailed birthday history

---

## 📋 Recommendations

### High Priority Updates Needed:

1. **Add Member Reliability Metrics to Features Page**
   - This is a unique selling point that should be prominently displayed
   - Consider adding a dedicated feature card about "Member Reliability Tracking"
   - Mention how users can see member reliability scores before joining groups

2. **Add Group Health/Score to Features Page**
   - Highlight group compliance tracking
   - Show how groups can maintain health ratings

3. **Update Features Page with Missing Features**
   - Add feature cards for:
     - Member reliability metrics
     - Group health scoring
     - In-app notifications
     - Email notifications
     - Advanced group management (pause/resume, close/reopen)

4. **Update How It Works Page**
   - Add step about viewing member reliability before joining
   - Mention group health scores
   - Add step about notification preferences

5. **Update FAQ Page**
   - Add questions about:
     - What is a member reliability score?
     - How does group health scoring work?
     - How do I pause accepting new members?
     - How do I close a group?
     - What notification types are available?

6. **Update Help Page**
   - Add sections for:
     - Member Reliability & Ratings
     - Group Health & Compliance
     - Advanced Group Management
     - Notification Preferences

7. **Add to Security Page**
   - Mention OTP verification system
   - Email verification process

8. **Consider Adding New Page**
   - "Member Reliability" or "Trust & Safety" page explaining the reliability system

---

## Summary

**Well Documented:** ~40% of MVP features
**Partially Documented:** ~35% of MVP features  
**Missing/Not Mentioned:** ~25% of MVP features

**Key Gaps:**
- Member reliability metrics (completely missing - this is a major feature!)
- Group health/scoring system (completely missing)
- Advanced group management features
- Comprehensive notification system details
- Email system details

The website does a good job covering the core user-facing features (groups, contributions, reminders), but misses several advanced features that could be major selling points, especially the member reliability system and group health scoring.

