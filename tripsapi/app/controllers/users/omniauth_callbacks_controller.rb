# frozen_string_literal: true

class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  skip_before_action :verify_authenticity_token, raise: false

  def google_oauth2
    handle_omniauth
  end

  def apple
    handle_omniauth
  end

  private

  def handle_omniauth
    user = User.from_omniauth(request.env["omniauth.auth"])
    if user.persisted?
      sign_in(user, store: false)
      token = request.env["warden-jwt_auth.token"]
      frontend_url = ENV.fetch("FRONTEND_URL", "http://localhost:3000")
      redirect_to "#{frontend_url}/auth/callback?token=#{token}", allow_other_host: true
    else
      frontend_url = ENV.fetch("FRONTEND_URL", "http://localhost:3000")
      redirect_to "#{frontend_url}/auth/error", allow_other_host: true
    end
  end
end
