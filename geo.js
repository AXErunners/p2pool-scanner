var http = require('http')

function Geo(options) {
    var self = this;
        
    function request(options, callback)
    {    
        http.get(options.host, function(res){
         var body = '';

        res.on('data', function(chunk){
            body += chunk;
        });

        res.on('end', function(){
            var response = JSON.parse(body);
            console.log("Got a response: ", response);
            callback(null, response);       
        });
        }).on('error', function(e){
            console.error("Got an error: ", e);
        });
    }

    function extract_geo(response) {
        var countryString;
        if(response["city"] == "") {
          countryString = response["country_name"];
        } else {
          countryString = response["country_name"] + " (" + response["city"] + ", " + response["region_code"] + ")";
        }
        var o = {
            country : countryString,
            img : "https://geoiptool.com/static/img/flags/" + response["country_code"].toLowerCase() + ".gif"
        }

        return o;
    }

    self.get = function(ip, callback) {

        // console.log("QUERYING IP:",ip);
        var options = {
            host : 'http://freegeoip.net/json/'+ip,
            port : 80,
            method: 'GET'
        }

        request(options, function(err, response) {
            if(err)
                return callback(err);
            var geo = null;
            try {
                var geo = extract_geo(response);
            } catch(ex) {
                console.error(ex);
            }

            return callback(null, geo);

        }, true);
    }

}

module.exports = Geo;
