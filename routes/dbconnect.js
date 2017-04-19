module.exports = function(){var pg = require('pg');
var conString = "postgres://wmeohhogobxxep:1b10c14f241938b60ee36f2402d7b981e85956cdae37c9f5139df08beb857033@ec2-54-235-181-120.compute-1.amazonaws.com:5432/dc4346s2chta1g?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory";
var con = new pg.Client(conString);
return con;
}
