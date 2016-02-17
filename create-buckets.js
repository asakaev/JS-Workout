

/**
 * Return list of buckets
 *
 * Each bucket contains <= bucketSize of total items in all bucket items
 * Skip element that contains > bucketSize items
 *
 * @param {!Array} items - input array of items
 * @param {!string} elementKey - element key
 * @param {!number} bucketSize - maximum bucket size
 * @return {Array.<Array>}
 */
function createBuckets(items, elementKey, bucketSize) {
  var bucketsResult = [];

  var bucket = [];
  var currentBucketSize = 0;

  while (items.length) {
    var item = items.shift();
    var element = item[elementKey];

    var correctElement = Array.isArray(element) && element.length <= bucketSize;
    if (!correctElement) {
      continue;
    }

    currentBucketSize += element.length;
    if (currentBucketSize <= bucketSize) {
      bucket.push(item);
    } else {
      bucketsResult.push(bucket);

      bucket = [];
      currentBucketSize = element.length;
      bucket.push(item);
    }
  }

  bucketsResult.push(bucket);
  return bucketsResult;
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
var key = 'cities';

var arrayOfBuckets = createBuckets(countries, key, maxBucketSize);

//[ [ { country: 'Russia', cities: [Object] },
//  { country: 'Ukraine', cities: [Object] } ],
//  [ { country: 'Kazakhstan', cities: [Object] },
//    { country: 'Azerbaijan', cities: [Object] } ] ]
console.log(arrayOfBuckets);
