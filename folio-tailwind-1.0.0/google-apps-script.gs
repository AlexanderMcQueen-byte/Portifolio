function doGet() {
  return HtmlService.createHtmlOutput(
    '<p>Portfolio contact form is active.</p>'
  );
}

function doPost(e) {
  try {
    const payload = e && e.parameter ? e.parameter : {};
    const name = String(payload.name || 'Unknown').trim();
    const email = String(payload.email || '').trim();
    const message = String(payload.message || '').trim();

    if (!name || !email || !message) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Missing required fields.' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const to = 'alexanderwachira136@gmail.com';
    const subject = 'New portfolio message from ' + name;
    const body = [
      'Name: ' + name,
      'Email: ' + email,
      '',
      'Message:',
      message
    ].join('\n');

    GmailApp.sendEmail(to, subject, body, {
      replyTo: email,
      name: name
    });

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    MailApp.sendEmail(
      'alexanderwachira136@gmail.com',
      'Portfolio contact form failed',
      'There was an error processing the contact form.\n\n' + error.message
    );

    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
