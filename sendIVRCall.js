require('dotenv').config();
const twilio = require('twilio');
const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const callOptions = {
    to: process.env.YOUR_PHONE_NUMBER,
    from: process.env.TWILIO_PHONE_NUMBER,
    twiml: `<Response>
              <Gather action="http://localhost:3000/handle-key" method="POST">
                <Play>https://1drv.ms/u/s!AssNWNmUSYNtjv9VSb0TQm5cQ8_YQQ?e=ubsLY3</Play>
                <Pause length="10"/>
                <Say>Please press 1 for the interview link.</Say>
              </Gather>
              <Say>We did not receive any input. Goodbye!</Say>
            </Response>`,
    method: 'POST'
};

client.calls.create(callOptions)
    .then(call => console.log(`Call SID: ${call.sid}`))
    .catch(err => console.error(err));
