# @param {Integer[]} nums
# @return {Integer}
def dominant_index(nums)
    if nums.length < 2
        return 0
    end

    maximums = nums.each_with_index.max(2)
    first_maximum = maximums[0]
    second_maximum = maximums[1]

    first_maximum[0] / 2 >= second_maximum[0] ? first_maximum[1] : -1
end

puts dominant_index [1,2,3,4] # -1
puts dominant_index [3,6,1,0] # 1
puts dominant_index [1] # 0