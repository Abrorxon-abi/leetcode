// Problem Statement: https://leetcode.com/problems/encode-and-decode-tinyurl/description/

/**
 * Encodes a URL to a shortened URL.
 */

const DOMAIN_PREFIX = "https://tinyurl.com/";

const idToUrlMap = new Map();

let idCounter = 0;

function encode(longUrl: string): string {
  idCounter++;
  const uniqueId = idCounter.toString();

  idToUrlMap.set(uniqueId, longUrl);

  return DOMAIN_PREFIX + uniqueId;
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  const idStartPos = shortUrl.lastIndexOf("/") + 1;

  const uniqueId = shortUrl.substring(idStartPos);

  return idToUrlMap.get(uniqueId) || "";
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
