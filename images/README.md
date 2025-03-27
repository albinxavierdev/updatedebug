# Local Images Directory

This directory contains local copies of images previously loaded from cdn.prod.website-files.com.

To complete the migration from external CDN to local resources:

1. Download all image assets from cdn.prod.website-files.com that are referenced in index.htm
2. Place them in this directory with appropriate subdirectories for organization
3. Update all references in index.htm to point to these local resources

Example path conversion:
- From: https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/62444031718f404cdfbea4cb_CCBP_Home_OG_1.png
- To: /images/ccbp/CCBP_Home_OG_1.png