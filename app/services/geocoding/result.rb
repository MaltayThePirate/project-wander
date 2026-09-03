module Geocoding
  Result = Struct.new(:name, :address, :latitude, :longitude, keyword_init: true)
end
