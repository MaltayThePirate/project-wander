class User < ApplicationRecord
    devise :database_authenticatable, :omniauthable, :jwt_authenticatable,
           omniauth_providers: [:google_oauth2, :apple],
           jwt_revocation_strategy: self

    include Devise::JWT::RevocationStrategies::JTIMatcher

    has_many :trip_memberships
    has_many :trips, through: :trip_memberships
    has_many :spots, dependent: :destroy
    has_many :day_plans, dependent: :destroy
    has_many :flights, dependent: :destroy

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true

    def self.from_omniauth(auth)
        find_or_create_by(provider: auth.provider, uid: auth.uid) do |user|
            user.email = auth.info.email
            user.name = auth.info.name
            user.password = Devise.friendly_token[0, 20]
        end
    end
end
