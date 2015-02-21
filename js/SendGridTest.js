var sendgrid  = require('sendgrid')('TreeHacker', 'Jimdog90');
var email     = new sendgrid.Email({
  to:       'katglazko@gmail.com',
  from:     'you@yourself.com',
  subject:  'Petition from Concerned Citizens',
  text:     'Hello Sir We have information that there has been a broken entity. There are a million concerned citizens. Sincerely, Kate'
});
sendgrid.send(email, function(err, json) {
  if (err) { return console.error(err); }
  console.log(json);
});