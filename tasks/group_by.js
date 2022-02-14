Array.prototype.groupBy = function(prop) {
    return this.reduce(function(groups, item) {
      const val = item[prop]
      groups[val] = groups[val] || []
      groups[val].push(item)
      return groups
    }, {})
  }
  
  
  const events = [
    { time: '12:00', location: 'mall' },
    { time: '9:00', location: 'store' },
    { time: '9:00', location: 'mall' },
    { time: '12:00', location: 'store' },
    { time: '12:00', location: 'market' },
  ]
  
  const groupedByTime = events.groupBy('time')
  /**
    groupedByTime = {
      '9:00': [
        { time: '9:00', location: 'store' },
        { time: '9:00', location: 'mall' },
      ],
      '12:00': [
        { time: '12:00', location: 'mall' },
        { time: '12:00', location: 'store' },
        { time: '12:00', location: 'market' },
      ],
    }
  */
  
  
  // ==============================================================================
  
  const groupBy = (arr, fn) =>
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});
  
  const array = [{id: 1, value: 'kokoko'}, {id: 2, value: 'uuuuuuu'}, {id: 3, value: 'vvv'}];
  
  const groupedByValue = groupBy(array, i => i.value);
  /* 
  {kokoko: Array(1), uuuuuuu: Array(1), vvv: Array(1)}
  */