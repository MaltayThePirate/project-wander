class DateRangeValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    start_date_attr = options[:start_date] || :start_date
    start_date = record.send(start_date_attr)
    end_date = value

    return if start_date.blank? || end_date.blank?

    if end_date < start_date
      record.errors.add(attribute, options[:message] || "must be on or after the start date")
    end
  end
end
