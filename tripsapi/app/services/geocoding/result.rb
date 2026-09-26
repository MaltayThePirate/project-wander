module Geocoding
  Result = Struct.new(:name, :address, :latitude, :longitude, :photo_reference, keyword_init: true)
end
