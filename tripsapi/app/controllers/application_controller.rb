class ApplicationController < ActionController::API
    include ActionView::Layouts
    include ActionController::Flash
    respond_to :json

    before_action :authenticate_user!
end
