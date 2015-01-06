require 'yaml'

file = YAML.load_file('languages.yml')

puts '['

file.each_with_index do |lang, i|
  if i == file.size - 1
    puts "  [\"#{lang[0]}\", \"#{lang[1]['color']}\"]"
  else
    if lang[1].has_key?('color') == true
      puts "  [\"#{lang[0]}\", \"#{lang[1]['color']}\"],"
    end
  end
end

puts ']'
