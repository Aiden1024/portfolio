export async function postSendEmail(content) {
    try {
      const response = await fetch('https://weima.info/vm/send_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: content,
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
        return response
      } else {
        console.error('Error sending email:', response.status);
        return response;
      }
    } catch (error) {
      console.error('Error:', error);

    }
  }
  