Disrupt Hackathon Ticket Announcer
======================

Get the latest openings on disrupt hackathon SF 2013 ticket and notifies you on SMS. 

This uses ```start_date``` on Eventbrite API as the indicator of new ticket slot as described by https://medium.com/look-what-i-made/331a4054ef02

##Install
```npm install```

##API Keys
Fill in api keys section on top of the app.js. You will need twilio and eventbrite API keys. Notice the interval is set to check every 2 mins. Eventbrite API has limit of 1k request/day.

