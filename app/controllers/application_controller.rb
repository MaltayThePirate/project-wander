class ApplicationController < ActionController::API
    # TEMPORARY — stub auth. Replace with Devise's current_user once
    # implemented; everything downstream is written against this method name
    # specifically so that swap doesn't require touching other controllers.
    def current_user
        @current_user ||= User.first_or_create!(
            email: "neil@example.com",
            name: "Neil"
        )
    end
end
