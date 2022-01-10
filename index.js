require('dotenv').config();
const path = require('path');
const fs = require('fs');
const key = fs.readFileSync(path.join(__dirname, 'cert/key.pem'));
const cert = fs.readFileSync(path.join(__dirname,'cert/cert.pem'));
// const https = require('https');
// const express = require('express');
const { PeerServer } = require('peer');
const port = process.env.PORT || 7422;


PeerServer({
    path:'/peerjs',
    port,
    ssl:{
        key, cert,
    }
});