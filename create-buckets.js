

/**
 * Return list of buckets each contain <= bucketSize of elements
 *
 * Skip item that contains > bucketSize elements
 *
 * @param {!Array} array - input array of objects
 * @param {!string} field - field to check
 * @param {!number} bucketSize - maximum bucket size
 * @return {Array.<Array>}
 */
function createBuckets(array, field, bucketSize) {
  var result = [];

  var bucket = [];
  var currentBucketSize = 0;

  while (array.length) {
    var arrayElement = array.shift();
    var item = arrayElement[field];

    var correctItem = Array.isArray(item) && item.length <= bucketSize;
    if (!correctItem) {
      continue;
    }

    currentBucketSize += item.length;
    if (currentBucketSize <= bucketSize) {
      bucket.push(arrayElement);
    } else {
      result.push(bucket);

      bucket = [];
      currentBucketSize = item.length;
      bucket.push(arrayElement);
    }
  }

  result.push(bucket);
  return result;
}


var countries = [
  {
    country: 'Russia',
    cities: ['Saint Petersburg', 'Moscow', 'Novosibirsk', 'Kazan']
  },
  {
    country: 'Ukraine',
    cities: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  {
    country: 'Kazakhstan',
    cities: [1, 2, 3, 4, 5]
  },
  {
    country: 'Azerbaijan',
    cities: [1, 2]
  }
];

var maxBucketSize = 12;
var field = 'cities';

var arrayOfBuckets = createBuckets(countries, field, maxBucketSize);

//[ [ { country: 'Russia', cities: [Object] },
//  { country: 'Ukraine', cities: [Object] } ],
//  [ { country: 'Kazakhstan', cities: [Object] },
//    { country: 'Azerbaijan', cities: [Object] } ] ]
console.log(arrayOfBuckets);
