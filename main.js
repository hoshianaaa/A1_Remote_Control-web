const signalingUrl = 'ws://198.13.39.197:3000/signaling';
let roomId = 'TS-A1-001';
let clientId = null;
let videoCodec = null;
let audioCodec = null;
let signalingKey = null;

// query string から roomId, clientId を取得するヘルパー
function parseQueryString() {
  const qs = window.Qs;
  if (window.location.search.length > 0) {
    var params = qs.parse(window.location.search.substr(1));
    if (params.roomId) {
      roomId = params.roomId;
    }
    if (params.clientId) {
      clientId = params.clientId;
    }
    if (params.signalingKey) {
      signalingKey = params.signalingKey;
    }
  }
}


parseQueryString();


