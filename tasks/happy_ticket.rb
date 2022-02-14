def happy? num 
    left = 0
    right = 0
    len = num.to_s.length
  
    num.to_s.each_char.with_index do |char, idx|
      if idx < len / 2
        left = left + char.to_i
      else
        right = right + char.to_i
      end
    end

    left == right
end


puts happy?(77) # true
puts happy?(7881) # false
puts happy?(732930) # true