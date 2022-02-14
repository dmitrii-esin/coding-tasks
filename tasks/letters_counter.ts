// letter counter 'aabbcc' => '2a2b2c'

const process = (str: string): string => {
    let result = '';
    let track = str[0];
  
    for (let i = 1; i <= str.length; i++) {
      const letter = track[0];
  
      if (str[i] !== letter) {
        const currentResult = track.length > 1 ? `${track.length}${letter}` : `${track}`;
        result = `${result}${currentResult}`;
        track = str[i];
      } else {
        track = `${track}${str[i]}`;
      }
    }
  
    return result;
  }
  
  console.log(
    process('aabcdefffg') // 2abcde3fg
  );
  
  console.log(
    process('aaabbbbcccccdddddd') // 3a4b5c6d
  );
  
  console.log(
    process('adkjlnnnabbatrsfaaag') // adkjl3na2batrsf3ag
  );
  
  console.log(
    process('abc') // abc
  );
  
  console.log(
    process('a') // a
  );