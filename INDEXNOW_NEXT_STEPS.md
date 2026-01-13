# IndexNow - Next Steps Checklist

Follow these steps to complete your IndexNow integration:

## Step 1: Deploy Your Website ✅

If you haven't deployed yet, deploy your site so the key file is publicly accessible:

```bash
# Build your site
npm run build

# Deploy to Vercel (or your hosting service)
# If using Vercel CLI: vercel --prod
# Or push to your connected Git repository
```

The key file (`65470e0d5653976027dd5306768af9a94759c7fa802f7ef49363f229b6a88b26.txt`) will automatically be included in your deployment since it's in the `public/` directory.

---

## Step 2: Verify Key File is Accessible 🔍

After deployment, verify the key file is publicly accessible:

1. **Visit this URL in your browser:**
   ```
   https://groupfund.app/65470e0d5653976027dd5306768af9a94759c7fa802f7ef49363f229b6a88b26.txt
   ```

2. **You should see:**
   ```
   65470e0d5653976027dd5306768af9a94759c7fa802f7ef49363f229b6a88b26
   ```

3. **If you see the key value**, ✅ the key file is correctly deployed!
4. **If you get a 404 error**, check that the file exists in `public/` and was included in your deployment.

---

## Step 3: Set Up Bing Webmaster Tools 📊

1. **Go to Bing Webmaster Tools:**
   - Visit: https://www.bing.com/webmasters/
   - Sign in with your Microsoft account (or create one)

2. **Add Your Site:**
   - Click "Add a site"
   - Enter: `https://www.groupfund.app`
   - Click "Add"

3. **Verify Ownership:**
   - Choose a verification method:
     - **Option 1 (Recommended):** Upload an HTML file
     - **Option 2:** Add a meta tag to your HTML
     - **Option 3:** DNS verification
     - **Option 4:** Use the IndexNow key file (if supported)

4. **Complete Verification:**
   - Follow the instructions for your chosen method
   - Once verified, your site will appear in the dashboard

---

## Step 4: Submit URLs to IndexNow 🚀

### Option A: Submit Your Homepage (Quick Test)

```bash
node scripts/submit-indexnow.js https://www.groupfund.app/
```

You should see:
- ✅ Success message
- Status code 200 or 202
- Confirmation that URLs were submitted

### Option B: Submit All URLs from Sitemap

```bash
node scripts/submit-indexnow.js --all
```

This will automatically read all URLs from your `public/sitemap.xml` and submit them.

### Option C: Submit Specific URLs

```bash
node scripts/submit-indexnow.js https://www.groupfund.app/page1 https://www.groupfund.app/page2
```

---

## Step 5: Verify URLs in Bing Webmaster Tools ✅

1. **Wait 5-10 minutes** after submitting URLs

2. **Check Bing Webmaster Tools:**
   - Go to your Bing Webmaster Tools dashboard
   - Navigate to "Index Now" or "URL Inspection"
   - Look for your submitted URLs
   - Check indexing status

3. **Monitor Results:**
   - URLs should appear as "Submitted" or "Indexed"
   - Check for any errors or warnings
   - Review the "Index Now" section for submission history

---

## Step 6: Set Up Regular URL Submissions (Optional) 🔄

### For New/Updated Pages

Whenever you add or update content, submit the URLs:

```bash
# Submit new page
node scripts/submit-indexnow.js https://www.groupfund.app/new-page

# Submit multiple updated pages
node scripts/submit-indexnow.js https://www.groupfund.app/page1 https://www.groupfund.app/page2
```

### Add to Deployment Pipeline (Recommended)

Add URL submission to your deployment process. For Vercel, add a post-deployment script or use Vercel's "Deploy Hooks" to trigger URL submissions after successful deployments.

---

## Troubleshooting

### Key File Not Accessible?

- ✅ Check that the file exists in `public/` directory
- ✅ Verify the file was included in your build/deployment
- ✅ Check your hosting service serves files from the root
- ✅ Try accessing with both `www.` and without `www.`

### URLs Not Showing in Bing Webmaster Tools?

- ✅ Wait 10-15 minutes (can take time to process)
- ✅ Verify your site is verified in Bing Webmaster Tools
- ✅ Check that URLs are valid and accessible
- ✅ Review error messages in Bing Webmaster Tools dashboard

### Script Errors?

- ✅ Ensure Node.js is installed
- ✅ Check that URLs include `https://`
- ✅ Verify your internet connection
- ✅ Review error messages in the script output

---

## Quick Reference

**Key File URL:**
```
https://groupfund.app/65470e0d5653976027dd5306768af9a94759c7fa802f7ef49363f229b6a88b26.txt
```

**Submit Single URL:**
```bash
node scripts/submit-indexnow.js https://www.groupfund.app/page
```

**Submit All URLs:**
```bash
node scripts/submit-indexnow.js --all
```

**Bing Webmaster Tools:**
https://www.bing.com/webmasters/

---

## You're All Set! 🎉

Once you've completed these steps, IndexNow will help search engines index your content faster. Remember to submit URLs whenever you publish new content or make significant updates.

For more details, see [INDEXNOW_SETUP.md](./INDEXNOW_SETUP.md).
