const dns = require("dns")

let domain = "nodejs.org"

dns.resolve(domain, function(err, address) {
    if(err) {
        console.log(err)
        return
    }
    console.log(address);
})

dns.reverse("104.20.22.46", function(err, domain) {
    if(err) {
        console.log(err)
        return
    }
    console.log(domain);
})