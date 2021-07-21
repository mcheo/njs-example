const search = "[0-9]{4}";
const replacer = new RegExp(search, 'g');
const replacestring = "xxxx";

//const search = "xmas";
//const replacer = new RegExp(search, 'g');
//const replacestring = "Christmas";


function masksensitive(r) {
    
  switch (r.method) {
    case 'POST':
        var body  = r.requestText;
        if (r.headersIn['Content-Type'] == 'application/json' && body.length > 0 ) 
        {
            return body.replace(replacer, replacestring);
        }
        break;
    default:
        return;
    }
}

export default {masksensitive};