module.exports = {
	description: "Ara's projects",
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 12, // (in minutes), 23 hours
		freshChrome: "run",
	},
	urls: [
		"https://www.itsmeara.com/",
		"https://www.kandji.io/",
		"https://www.firmwilloughby.com/"
	]
};
