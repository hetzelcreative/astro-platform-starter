# Sanity CMS Setup Guide

## ✅ What's Been Set Up

- ✅ Installed Sanity packages
- ✅ Configured Astro integration
- ✅ Created content schemas (Service, Page, Site Settings)
- ✅ Created Sanity client and query utilities
- ✅ Environment variable templates

## 🚀 Next Steps

### 1. Create Your Sanity Project

Go to [sanity.io](https://www.sanity.io/) and:

1. **Sign up or log in** to Sanity
2. **Click "Create Project"**
3. **Name your project** (e.g., "Company Name CMS")
4. **Choose a dataset name** (default: "production")
5. **Copy your Project ID** - you'll need this!

### 2. Add Your Project ID to Environment Variables

Open `.env` file and add your Project ID:

```
PUBLIC_SANITY_PROJECT_ID=your-project-id-here
PUBLIC_SANITY_DATASET=production
```

### 3. Deploy the Sanity Studio

Run this command to deploy your Studio to Sanity's hosting:

```bash
npx sanity deploy
```

When prompted:
- **Studio hostname**: Choose a unique name (e.g., `mycompany-cms`)
- Your Studio will be available at: `https://mycompany-cms.sanity.studio`

### 4. Access Your Studio

After deployment, you can access your Sanity Studio at:
- **Sanity-hosted**: `https://your-hostname.sanity.studio`
- **Locally (embedded)**: `http://localhost:4321/studio` (when running `npm run dev`)

### 5. Add Your First Content

In the Sanity Studio:

1. **Site Settings** (singleton)
   - Add your business name, address, phone
   - Add social media links
   - Set office hours

2. **Services** (create 5)
   - Add service title, description
   - Upload images
   - Mark services as "featured" to show on homepage

3. **Pages** (optional)
   - Create About, Contact, etc. pages

## 📚 Content Schemas

### Service
- Title, slug, icon/image
- Short description (for cards)
- Full description (for service pages)
- Featured toggle
- Display order

### Page
- Title, slug
- Meta description (SEO)
- Hero image & text
- Rich text content

### Site Settings
- Business name & logo
- NAP (Name, Address, Phone)
- Social media links
- Office hours
- License numbers

## 🔨 Using Sanity Data in Astro

### Example: Fetch services in a page

```astro
---
import { getFeaturedServices } from '../sanity/queries';
import { urlFor } from '../sanity/client';

const services = await getFeaturedServices();
---

{services.map((service) => (
  <div>
    <h2>{service.title}</h2>
    <p>{service.shortDescription}</p>
    {service.image && (
      <img src={urlFor(service.image).width(400).url()} alt={service.title} />
    )}
  </div>
))}
```

## 🎯 Next Development Tasks

1. Update Services component to fetch from Sanity instead of using hardcoded data
2. Update Footer to use Site Settings from Sanity
3. Create dynamic service pages using `[slug].astro`
4. Update Hero section to be editable from CMS

## 📖 Resources

- [Sanity Astro Plugin Docs](https://www.sanity.io/plugins/sanity-astro)
- [Sanity Query Language (GROQ)](https://www.sanity.io/docs/groq)
- [Sanity Studio Docs](https://www.sanity.io/docs/sanity-studio)
