const net = require('net');

function zeroFill(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

const date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
const formattedTime = `${year}-${zeroFill(month)}-${zeroFill(day)} ${zeroFill(hours)}:${zeroFill(minutes)}\n`;

const server = net.createServer(socket => {
  socket.end(formattedTime);
});

server.listen(Number(process.argv[2]));
