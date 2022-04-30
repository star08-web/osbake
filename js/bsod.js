var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "https://github.com/star08-web/winpe_creator",
	width: 110,
	height: 110,
	colorDark : "#106faa",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});
