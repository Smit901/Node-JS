function countryCodeToFlag(countryCode) {
  if (!countryCode || countryCode.length !== 2) {
    return 'Invalid country code';
  }

  let url = `https://flagcdn.com/h40/${countryCode.toLowerCase()}.png`

  return url;
}

module.exports = countryCodeToFlag;
