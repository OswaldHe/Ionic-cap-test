var HID = require('node-hid');
var devices = HID.devices();
//console.log(devices);
var device = devices.find(function(d){
    return d.vendorId === 1452 && d.productId===33027;
});
if(device){
    var access = new HID.HID(device.path);
    access.on("data", function(data){
        console.log(data);
    });
}