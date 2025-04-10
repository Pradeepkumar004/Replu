
# Setting Up Google Sheets Integration

To connect your EgoBid application with Google Sheets for data storage, follow these steps:

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Rename it to "EgoBid Data Collection"
3. Add the following columns to the first row:
   - Timestamp
   - Name
   - Email
   - User Type
   - Category (for influencers)
   - Message
   - Source

## Step 2: Create a Google Apps Script

1. In your Google Sheet, click on "Extensions" > "Apps Script"
2. Replace the default code with the following:

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Add a new row with the form data
    sheet.appendRow([
      new Date(), // Timestamp
      data.name,
      data.email,
      data.userType,
      data.category || "N/A",
      data.message || "N/A",
      "Website"
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3: Deploy the Web App

1. Click on "Deploy" > "New deployment"
2. Select "Web app" as the deployment type
3. Set the following settings:
   - Description: "EgoBid Data Collection"
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click "Deploy"
5. Copy the Web App URL that appears

## Step 4: Update Your Application

1. Open the file `src/utils/googleSheetsService.ts` in your codebase
2. Replace the `GOOGLE_SCRIPT_URL` value with your Web App URL from Step 3
3. Save the file

Your application is now configured to store form submissions in Google Sheets.

## Important Notes:

- The Google Apps Script has CORS enabled, so it can accept requests from any origin
- For production use, consider adding more security measures
- The script will automatically add a timestamp to each submission
- Make sure your Google Sheet remains accessible to the script owner
