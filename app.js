/*API KEY*/
var eventbrite_api=""; //eventbrite_api key
var TWILIO_ACCOUNT_SID="";
var TWILIO_AUTH_TOKEN="";
var SEND_TXT_TO_NUMBER=""; //Your cell phone
var TWILIO_SEND_TXT_FROM_NUMBER=""; //Your twilio Number

/*initialize count_total: the total number of ticket events*/
var count_total = 0;

/* Module dependencies */
var request =  require('request')
  , twilio = require('twilio');

var api_address = "https://www.eventbrite.com/json/event_get?app_key="+eventbrite_api+"&id=7302272293"

console.log("Programming Starting...");
console.log("Getting the data from Eventbrite every 2 mins")
setInterval(function(){check()}, 120000);

function check()
{
	console.log("---------------------")
	request(api_address, function (error, response, body) {
	var r=JSON.parse(body)["event"];

	tickets=r["tickets"];
	var count=0;
	var tickets_avail=[];
	for (var i=0; i<tickets.length;i++)
	{
		var startdate=tickets[i]["ticket"]["start_date"];
		if (startdate!= null)
		{
			console.log(startdate);
			tickets_avail.push(startdate)
			count++;
		}
	}
	console.log("Total Number of Ticket Slot Opened: "+count);
	console.log("Latest Ticket Open Date: "+tickets_avail[0]);

	if (count_total!=count)
	{
		send_sms(tickets_avail[0]);
		count_total = count;
		//process.exit(code=0)
	}

	});

}


function send_sms(message_content)
{
	// Create a new REST API client to make authenticated requests against the
	// twilio back end
	var client = new twilio.RestClient(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
	 
	// Pass in parameters to the REST API using an object literal notation. The
	// REST client will handle authentication and response serialzation for you.
	client.sms.messages.create({
	to: SEND_TXT_TO_NUMBER,
	from: TWILIO_SEND_TXT_FROM_NUMBER,
	body:'Techcrunch Disrupt SF Ticket Open Date: '+message_content
	}, function(error, message) {
	// The HTTP request to Twilio will run asynchronously. This callback
	// function will be called when a response is received from Twilio
	// The "error" variable will contain error information, if any.
	// If the request was successful, this value will be "falsy"
	if (!error) {
	// The second argument to the callback will contain the information
	// sent back by Twilio for the request. In this case, it is the
	// information about the text messsage you just sent:
	console.log('Success! The SID for this SMS message is:');
	console.log(message.sid);
	 
	console.log('Message sent on:');
	console.log(message.dateCreated);
	}
	else {
	console.log('Oops! There was an error.');
	}
});

}