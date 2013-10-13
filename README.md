#Notice
I made a more general purpose notifier for all eventbrite change at

https://github.com/paulshi/EventbriteEventChangeNotifier

Disrupt Hackathon Ticket Announcer
======================
Get the latest openings on disrupt hackathon SF 2013 ticket and notifies you on SMS. 

This is the ```modified``` attribute in the Eventbrite API

The script is written in [node.js](http://nodejs.org/)

##Install
```npm install```

##API Keys
Fill in ```credentials.sample.js``` and rename it to ```credentials.js```. You will need twilio and eventbrite API keys. Notice the interval is set to check every 2 mins. Eventbrite API has limit of 1k request/day.

##Run
```node app.js```

##Depreciated Method
It was using ```start_date``` on Eventbrite API as the indicator of new ticket slot as described by https://medium.com/look-what-i-made/331a4054ef02

This turns out to be unreliable as the event host can simply modified the number of people of a past ticketing event.
