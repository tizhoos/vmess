const axios = require('axios');
const cheerio = require('cheerio');

const channels = [
  "VpnWLF",
  "Awlix_ir",
  "FreakConfig",
  "yaney_01",
  "DeamNet_Proxy",
  "forwardv2ray",
  "free4allVPN",
  "oneclickvpnkeys",
  "Hope_Net",
  "v2Line",
  "ConfigsHUB",
  "v2ray1_ng",
  "v2ray_outlineir",
  "ShadowProxy66",
  "proxystore11",
  "V2rayCollectorDonate",
  "prrofile_purple",
  "mftizi",
  "iP_CF"
];

const channel = channels[Math.floor(Math.random() * channels.length)];

const response = await axios.get(`https://t.me/s/${channel}`);
const $ = cheerio.load(response.data);

const vmessUris = [];

$("a[href^='vmess://']").each((i, el) => {
  vmessUris.push(el.attribs.href);
});

const res = vmessUris.slice(0, 5);

const json = {
  status: 200,
  result: res
};

console.log(JSON.stringify(json, null, 2));
