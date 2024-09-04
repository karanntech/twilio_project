const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Endpoint to handle the IVR keypress
app.post('/handle-key', (req, res) => {
    const digit = req.body.Digits;

    if (digit === '1') {
        res.type('text/xml');
        res.send(`<Response>
                    <Say>Here is your personalized interview link: https://v.personaliz.ai/?id=9b697c1a&uid=fe141702f66c760d85ab&mode=test</Say>
                    <Hangup/>
                  </Response>`);
    } else {
        res.type('text/xml');
        res.send(`<Response>
                    <Say>Invalid option. Goodbye!</Say>
                    <Hangup/>
                  </Response>`);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//JVWGMQ4GB9D6YH8W9X5JM77P