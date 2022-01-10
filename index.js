const path = require('path');
const fs = require('fs');
const key = fs.readFileSync(path.join(__dirname, 'cert/key.pem'));
const cert = fs.readFileSync(path.join(__dirname,'cert/cert.pem'));
const { PeerServer } = require('peer');

PeerServer({
    path:'/peerjs',
    port: 7422,
    ssl:{
        key, cert,
    }
});