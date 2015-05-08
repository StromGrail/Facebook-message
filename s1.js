var options = {
	type : "basic",
	title : "PROSecure notification",
	message : window.open("https://www.facebook.com/messages"),
	iconUrl: "icon.png"
};
chrome.notifications.create(options,callback);

function callback(){
	
}