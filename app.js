
/*initialize count_total: the total number of ticket events*/
var count_total = 0;
var last_modified_date = "";
/* Module dependencies */
var request =  require('request')
  , twilio = require('twilio')
  , credentials = require('./credentials');

var time_interval = 2*60*1000;
// var time_interval = 5*1000; //for testing purpose only.

//api address for eventbrite api
api_address = "https://www.eventbrite.com/json/event_get?app_key="+credentials.eventbrite_api+"&id=7302272293"

console.log("Programming Starting...");
console.log("Getting the data from Eventbrite every 2 mins")
setInterval(function(){check_using_modified_date()}, time_interval);


function check_using_modified_date()
{
	console.log("--------Check Using Change Date-------------")
	
	request(api_address, function (error, response, body) {
	var r=JSON.parse(body)["event"];
	modifiedDate=r["modified"];

	if (last_modified_date != modifiedDate)
	{
		console.log("Event is Modified, Inform Immediately");
		console.log(modifiedDate);
		last_modified_date = modifiedDate;
		send_sms('Techcrunch Disrupt Hackathon Ticket info is modified on '+modifiedDate);
	}
	else
	{
		console.log("No Change");
	}
		
	});

}

//depreciated method
function check_using_start_date()
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
		send_sms('Techcrunch Disrupt SF Ticket Open Date: '+tickets_avail[0]);
		count_total = count;
		//process.exit(code=0)
	}

	});

}


function send_sms(message_content)
{
	// Create a new REST API client to make authenticated requests against the
	// twilio back end
	var client = new twilio.RestClient(credentials.TWILIO_ACCOUNT_SID, credentials.TWILIO_AUTH_TOKEN);
	 
	// Pass in parameters to the REST API using an object literal notation. The
	// REST client will handle authentication and response serialzation for you.
	client.sms.messages.create({
	to: credentials.SEND_TXT_TO_NUMBER,
	from: credentials.TWILIO_SEND_TXT_FROM_NUMBER,
	body: message_content
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