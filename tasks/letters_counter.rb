def process str
    current_letter = str[0]
    counter = 1
    result = ''
  
    1.upto str.length do |i|
      current_char = str[i]
  
      if current_char == current_letter
        counter += 1
      else
        if counter > 1
          result = "#{result}#{counter}#{current_letter}"
        else
          result = "#{result}#{current_letter}"
        end
        counter = 1
        current_letter = current_char
      end
  
    end
  
    result
  end
  
  puts process 'aabcdefffg' # 2abcde3fg
  puts process 'aaabbbbcccccdddddd' # 3a4b5c6d
  puts process 'adkjlnnnabbatrsfaaag' # adkjl3na2batrsf3ag
  puts process 'abc' # abc
  puts process 'a' # a