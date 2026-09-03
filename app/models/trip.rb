class Trip < ApplicationRecord
  has_many :trip_memberships, dependent: :destroy
  has_many :users, through: :trip_memberships
  has_many :spots, dependent: :destroy

  validates :name, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validate :end_date_on_or_after_start_date

  private

  def end_date_on_or_after_start_date
    return if start_date.blank? || end_date.blank?
    return if end_date >= start_date

    errors.add(:end_date, "must be on or after the start date")
  end
end
