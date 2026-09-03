class User < ApplicationRecord
    has_many :trip_memberships
    has_many :trips, through: :trip_memberships
    has_many :spots, dependent: :destroy

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
end
