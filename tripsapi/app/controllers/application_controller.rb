class ApplicationController < ActionController::API
    include ActionView::Layouts
    include ActionController::Flash
    respond_to :json

    before_action :authenticate_user!

    rescue_from StandardError do |e|
      Rails.logger.error("#{e.class}: #{e.message}\n#{e.backtrace&.first(10)&.join("\n")}")
      render json: { error: "Internal Server Error" }, status: :internal_server_error
    end

    rescue_from ActionController::ParameterMissing do |e|
      render json: { error: "Missing required parameter: #{e.param}" }, status: :bad_request
    end
end
