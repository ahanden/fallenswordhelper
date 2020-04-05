function theValueIsValid(theValue, min, max) {
  return !isNaN(theValue) && theValue > min && theValue < max;
}

export default function testRange(aValue, min, max) {
  const theValue = parseInt(aValue, 10);
  if (theValueIsValid(theValue, min, max)) {
    return theValue;
  }
}
