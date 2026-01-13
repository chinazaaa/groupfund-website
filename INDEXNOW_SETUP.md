# IndexNow Integration Guide

This guide covers the IndexNow integration for GroupFund website. IndexNow is a protocol that allows websites to notify search engines (Bing, Yandex, and others) when content is created, updated, or deleted, enabling instant indexing.

## ✅ Setup Complete

The IndexNow integration has been set up with the following configuration:

### API Key
- **Key**: `65470e0d5653976027dd5306768af9a94759c7fa802f7ef49363f229b6a88b26`
- **Key File**: `public/65470e0d5653976027dd5306768af9a94759c7fa802f7ef49363f229b6a88b26.txt`
- **Public URL**: `https://groupfund.app/65470e0d5653976027dd5306768af9a94759c7fa802f7ef49363f229b6a88b26.txt`

## Integration Steps Completed

### 1. ✅ API Key Generated
A secure 64-character hexadecimal API key has been generated using cryptographically secure random bytes.

### 2. ✅ Key File Hosted
The key file has been placed in the `public/` directory, which will be served from the root of your website after deployment. The file contains only the key value and is UTF-8 encoded.

**File Location**: `public/65470e0d5653976027dd5306768af9a94759c7fa802f7ef49363f229b6a88b26.txt`

### 3. ✅ URL Submission Script
A Node.js script has been created to submit URLs to IndexNow.

**Script Location**: `scripts/submit-indexnow.js`

## How to Use

### Submit Individual URLs

Submit one or more URLs directly from the command line:

```bash
node scripts/submit-indexnow.js https://www.groupfund.app/page1
node scripts/submit-indexnow.js https://www.groupfund.app/page1 https://www.groupfund.app/page2
```

### Submit URLs from a File

Create a text file with one URL per line:

```bash
# Create urls.txt
echo "https://www.groupfund.app/page1" > urls.txt
echo "https://www.groupfund.app/page2" >> urls.txt

# Submit all URLs
node scripts/submit-indexnow.js --file urls.txt
```

### Submit All URLs from Sitemap

Submit all URLs found in your sitemap.xml:

```bash
node scripts/submit-indexnow.js --all
```

### Set Your Domain

To ensure the correct domain is used in the key location URL, set the `VITE_SITE_URL` environment variable:

```bash
export VITE_SITE_URL=groupfund.app
node scripts/submit-indexnow.js https://www.groupfund.app/page1
```

Or set it inline (optional, script uses groupfund.app by default):

```bash
VITE_SITE_URL=groupfund.app node scripts/submit-indexnow.js https://www.groupfund.app/page1
```

## Verification Steps

### 1. Verify Key File Accessibility

After deployment, verify that your key file is publicly accessible:

1. Visit: `https://groupfund.app/65470e0d5653976027dd5306768af9a94759c7fa802f7ef49363f229b6a88b26.txt`
   (or `https://www.groupfund.app/65470e0d5653976027dd5306768af9a94759c7fa802f7ef49363f229b6a88b26.txt` if www redirects are configured)
2. You should see the key value: `65470e0d5653976027dd5306768af9a94759c7fa802f7ef49363f229b6a88b26`
3. The file should be accessible via HTTP/HTTPS (not blocked by authentication or robots.txt)

### 2. Verify URLs with Bing Webmaster Tools

1. **Add Your Site to Bing Webmaster Tools**
   - Go to [Bing Webmaster Tools](https://www.bing.com/webmasters/)
   - Sign in with your Microsoft account
   - Click "Add a site"
   - Enter your domain URL
   - Verify ownership using one of the available methods (HTML file, meta tag, DNS, etc.)

2. **Submit URLs via IndexNow**
   - Use the submission script to submit URLs
   - Wait a few minutes for processing

3. **Check URL Status**
   - Go to Bing Webmaster Tools dashboard
   - Navigate to "URL Inspection" or "Index Now"
   - Check if your submitted URLs appear in the index
   - Monitor indexing status and any errors

### 3. Test URL Submission

Test the integration by submitting a test URL:

```bash
node scripts/submit-indexnow.js https://www.groupfund.app/
```

You should see:
- ✅ Success message with status code 200 or 202
- Confirmation that URLs were submitted
- Next steps for verification

## API Details

### IndexNow Endpoint
- **URL**: `https://api.indexnow.org/IndexNow`
- **Method**: POST
- **Content-Type**: `application/json`

### Request Payload Format

```json
{
  "host": "groupfund.app",
  "key": "65470e0d5653976027dd5306768af9a94759c7fa802f7ef49363f229b6a88b26",
  "keyLocation": "https://groupfund.app/65470e0d5653976027dd5306768af9a94759c7fa802f7ef49363f229b6a88b26.txt",
  "urlList": [
    "https://www.groupfund.app/page1",
    "https://www.groupfund.app/page2"
  ]
}
```

### Response Codes

- **200 OK**: Request accepted and processed
- **202 Accepted**: Request accepted (most common)
- **400 Bad Request**: Invalid request format
- **403 Forbidden**: Key validation failed
- **422 Unprocessable Entity**: Invalid URLs or key location
- **429 Too Many Requests**: Rate limit exceeded

## Integration with Build Process

You can integrate IndexNow submission into your build/deployment process:

### After Deployment

Add a post-deployment script to submit important URLs:

```bash
# After deployment
npm run build
# Deploy...
node scripts/submit-indexnow.js --all
```

### With CI/CD

Add to your deployment pipeline (e.g., GitHub Actions, GitLab CI):

```yaml
- name: Submit URLs to IndexNow
  run: |
    node scripts/submit-indexnow.js --all
  env:
    VITE_SITE_URL: ${{ secrets.DOMAIN_NAME }}
```

## Best Practices

1. **Submit URLs Immediately After Publishing**
   - Submit new pages as soon as they're published
   - Submit updated pages when content changes significantly

2. **Batch Submissions**
   - Submit multiple URLs in a single request (up to 10,000 URLs per request)
   - More efficient than individual submissions

3. **Don't Over-Submit**
   - Only submit URLs when content is actually new or significantly updated
   - Avoid submitting the same URL repeatedly

4. **Monitor Results**
   - Regularly check Bing Webmaster Tools for indexing status
   - Monitor for any errors or issues

5. **Key Security**
   - Keep your API key secure
   - Don't expose the key in client-side code
   - If compromised, generate a new key

## Troubleshooting

### Key File Not Accessible

**Problem**: Getting 403 or 404 when accessing the key file URL.

**Solutions**:
- Verify the file exists in the `public/` directory
- Check that the file is being deployed correctly
- Ensure your hosting service serves files from the public/root directory
- Check for any redirects or rewrites that might interfere
- Verify the file has the correct permissions

### URLs Not Indexing

**Problem**: URLs are submitted but not appearing in search results.

**Solutions**:
- Verify key file is accessible (see above)
- Check Bing Webmaster Tools for indexing status
- Ensure URLs are valid and accessible
- Wait 24-48 hours for indexing (can take time)
- Verify site ownership in Bing Webmaster Tools

### Script Errors

**Problem**: Script fails with network or validation errors.

**Solutions**:
- Check internet connection
- Verify URLs are valid (must include https://)
- Ensure Node.js is installed and up to date
- Check that the key file exists
- Verify domain name is set correctly (VITE_SITE_URL)

## Additional Resources

- [IndexNow Official Documentation](https://www.indexnow.org/documentation)
- [Bing Webmaster Tools](https://www.bing.com/webmasters/)
- [IndexNow API Specification](https://www.indexnow.org/specification)

## Support

For issues with IndexNow integration:
1. Check this documentation
2. Review IndexNow official documentation
3. Check Bing Webmaster Tools for error messages
4. Verify key file accessibility
5. Test with a simple URL submission

---

**Last Updated**: Integration completed with API key generation, key file hosting, and URL submission script.
