var xml =
  '<rss xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:taxo="http://purl.org/rss/1.0/modules/taxonomy/" xmlns:activity="http://activitystrea.ms/spec/1.0/" version="2.0">\n' +
  "<channel>\n" +
  "<title>\n" +
  "<![CDATA[ jaeha23님의블로그 ]]>\n" +
  "</title>\n" +
  "<link>https://blog.naver.com/jaeha23</link>\n" +
  "<description>\n" +
  "<![CDATA[ 자기소개가없습니다. ]]>\n" +
  "</description>\n" +
  "<language>ko</language>\n" +
  "<generator>Naver Blog</generator>\n" +
  "<pubDate>Thu, 11 Mar 2021 13:50:47 +0900</pubDate>\n" +
  "<item>\n" +
  "<author>jaeha23</author>\n" +
  "<category>\n" +
  "<![CDATA[ 낙서장 ]]>\n" +
  "</category>\n" +
  "<title>\n" +
  "<![CDATA[ ㅎㅇ ]]>\n" +
  "</title>\n" +
  "<link>https://blog.naver.com/jaeha23/222238017401</link>\n" +
  "<guid>https://blog.naver.com/jaeha23/222238017401</guid>\n" +
  "<description>\n" +
  "<![CDATA[ https://www.instagram.com/p/CEzBqHnp8QD/?utm_source&#x3D;ig_web_copy_link ]]>\n" +
  "</description>\n" +
  "<pubDate>Tue, 09 Feb 2021 18:14:46 +0900</pubDate>\n" +
  "<tag>\n" +
  "<![CDATA[ ]]>\n" +
  "</tag>\n" +
  "<activity:verb>http://activitystrea.ms/schema/1.0/post</activity:verb>\n" +
  "<activity:object-type>http://activitystrea.ms/schema/1.0/blog-entry</activity:object-type>\n" +
  "</item>\n" +
  "<item>\n" +
  "<author>jaeha23</author>\n" +
  "<category>\n" +
  "<![CDATA[ 낙서장 ]]>\n" +
  "</category>\n" +
  "<title>\n" +
  "<![CDATA[ 나루토♬ ]]>\n" +
  "</title>\n" +
  "<link>https://blog.naver.com/jaeha23/140089776380</link>\n" +
  "<guid>https://blog.naver.com/jaeha23/140089776380</guid>\n" +
  "<description>\n" +
  "<![CDATA[ 사랑해★ ]]>\n" +
  "</description>\n" +
  "<pubDate>Tue, 08 Sep 2009 10:23:53 +0900</pubDate>\n" +
  "<tag>\n" +
  "<![CDATA[ ]]>\n" +
  "</tag>\n" +
  "<activity:verb>http://activitystrea.ms/schema/1.0/post</activity:verb>\n" +
  "<activity:object-type>http://activitystrea.ms/schema/1.0/blog-entry</activity:object-type>\n" +
  "</item>\n";
"</channel>\n" + "</rss>";

var parser = require("fast-xml-parser");
var he = require("he");

var options = {
  attributeNamePrefix: "@_",
  attrNodeName: "attr", //default is 'false'
  textNodeName: "#text",
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false,
  parseNodeValue: true,
  parseAttributeValue: false,
  trimValues: true,
  cdataTagName: "__cdata", //default is 'false'
  cdataPositionChar: "\\c",
  parseTrueNumberOnly: false,
  arrayMode: false, //"strict"
  attrValueProcessor: (val, attrName) =>
    he.decode(val, { isAttributeValue: true }), //default is a=>a
  tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
  stopNodes: ["parse-me-as-string"],
};

if (parser.validate(xml) === true) {
  //optional (it'll return an object in case it's not valid)
  var jsonObj = parser.parse(xml, options);
  console.log("resultCode:", jsonObj.response.header.resultCode);

  var json = JSON.stringify(jsonObj);
  console.log(json);
} else {
  console.log("실패");
  console.log("xml", xml);
}
