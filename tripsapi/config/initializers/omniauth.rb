Rails.application.config.middleware.use OmniAuth::Builder do
  OmniAuth.config.allowed_request_methods = [:post, :get]
  OmniAuth.config.silence_get_warning = true

  provider :google_oauth2,
    Rails.application.credentials.dig(:google, :client_id) || "dummy_google_client_id",
    Rails.application.credentials.dig(:google, :client_secret) || "dummy_google_client_secret",
    scope: "email,profile"

  provider :apple,
    Rails.application.credentials.dig(:apple, :client_id) || "dummy_apple_client_id",
    "",
    {
      scope: "email name",
      team_id: Rails.application.credentials.dig(:apple, :team_id) || "",
      key_id: Rails.application.credentials.dig(:apple, :key_id) || "",
      pem: Rails.application.credentials.dig(:apple, :pem) || ""
    }
end
