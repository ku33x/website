# 🚀 Deploy vuhnra.wtf to GitHub Pages

Your bio link is built and ready to deploy! Follow these steps:

## 📦 Step 1: Get Your Build Files

All deployment-ready files are in: `/app/frontend/build/`

This folder contains:
- `index.html` - Main page (cleaned, no emergent branding)
- `static/` - JS and CSS bundles
- `video.mp4` - Your background video
- `youtube-logo.png` - YouTube icon
- `roblox-logo.png` - Roblox icon  
- `CNAME` - Contains "vuhnra.wtf"
- `.nojekyll` - Tells GitHub not to process with Jekyll

**Download the zip:** `/app/frontend/bio-link-vuhnra.zip` (21MB)

## 🐙 Step 2: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `vuhnra.wtf` (or any name you prefer)
3. Set to **Public** (required for free GitHub Pages)
4. **Don't** initialize with README
5. Click **Create repository**

## 📤 Step 3: Upload Files to GitHub

### Easy Method (Web Upload):
1. On your new empty repo page, click **"uploading an existing file"**
2. Extract `bio-link-vuhnra.zip` on your computer
3. Drag **ALL contents** of the extracted folder (not the folder itself) into GitHub
4. Important files to include:
   - `index.html`
   - `static/` folder
   - `video.mp4`
   - `youtube-logo.png`, `roblox-logo.png`
   - `CNAME`
   - `.nojekyll`
5. Commit message: "Initial deployment"
6. Click **Commit changes**

### Command Line Method:
```bash
cd /path/to/extracted/build/files
git init
git add .
git commit -m "Initial deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vuhnra.wtf.git
git push -u origin main
```

## ⚙️ Step 4: Enable GitHub Pages

1. Go to your repo → **Settings** (top right tab)
2. Click **Pages** (left sidebar)
3. Under "Build and deployment":
   - **Source:** Deploy from a branch
   - **Branch:** `main` 
   - **Folder:** `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment

## 🌐 Step 5: Configure Custom Domain (vuhnra.wtf)

### In GitHub:
1. Still in **Settings → Pages**
2. Under "Custom domain", enter: `vuhnra.wtf`
3. Click **Save**
4. Wait for DNS check to complete
5. Enable **"Enforce HTTPS"** (checkbox at bottom)

### In Your Domain Registrar (where you bought vuhnra.wtf):
Add these DNS records:

**For apex domain (vuhnra.wtf):**
```
Type: A      Name: @    Value: 185.199.108.153
Type: A      Name: @    Value: 185.199.109.153
Type: A      Name: @    Value: 185.199.110.153
Type: A      Name: @    Value: 185.199.111.153
```

**For www subdomain (optional):**
```
Type: CNAME   Name: www   Value: YOUR_USERNAME.github.io
```

## ⏱️ Step 6: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually works within 10-30 minutes
- Check status at: https://dnschecker.org

## ✅ You're Live!

Visit **https://vuhnra.wtf** and your bio link is live! 🎉

## 🔧 Making Changes Later

To update your bio link:
1. Edit files in `/app/frontend/src/components/BioLink.js`
2. Run: `cd /app/frontend && yarn build`
3. Replace files in your GitHub repo with new build folder contents
4. GitHub Pages will auto-deploy within 1-2 minutes

## 🆘 Troubleshooting

**Site not loading?**
- Wait 5-10 more minutes for DNS
- Check GitHub Pages settings show green checkmark
- Verify CNAME file contains only: `vuhnra.wtf`

**HTTPS not working?**
- Wait for GitHub to issue SSL certificate (can take 1 hour)
- Make sure DNS records are correct

**Video not playing?**
- video.mp4 must be in repo root
- Check file size (should be ~21MB)

**Discord status not showing?**
- Make sure you're still in the Lanyard Discord server
- Check that your Discord ID is correct in the code

---

**Your bio link features:**
- ✅ Click-to-enter splash screen with audio
- ✅ LUCIFER - JINXED music video background
- ✅ Live Discord status from Lanyard API
- ✅ Live Spotify with album art & progress bar
- ✅ YouTube & Roblox links with glow effect
- ✅ Starfield particle animation
- ✅ Custom domain: vuhnra.wtf

Enjoy your sick bio link! 🔥
