
let imBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrtext = document.getElementById("qrText");
let DownloadQrCode = document.getElementById("DownloadQrCode");
// generateQR fuction1
function generateQR() {


    if (qrText.value.length > 0) {
        qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
            + qrText.value;
        imBox.classList.add("show-img");
    } else {
        qrtext.classList.add('error');
        setTimeout(() => {
            qrtext.classList.remove('error');
        }, 1000);
    }
}

// DownloadQrCode function2

DownloadQrCode.addEventListener("click", async () => {
    const response = await fetch(qrImage.src);
    const blob = await response.blob();
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "qrcode.jpg";
    downloadLink.click();
});