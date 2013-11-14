# Important Notice
I made a more general purpose notifier for all eventbrite changes at

https://github.com/paulshi/EventbriteEventChangeNotifier

thus this project is no longer maintained.

#Techcrunch Disrupt Hackathon Ticket Availability Notifier
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

##License
```
The MIT License (MIT)

Copyright (c) 2013 Jianer Shi (hipaulshi@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/paulshi/techcrunch-disrupt-hackathon-ticket-availability-notifier/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

