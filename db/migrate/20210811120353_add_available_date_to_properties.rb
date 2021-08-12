class AddAvailableDateToProperties < ActiveRecord::Migration[6.1]
  def change
    add_column :properties, :available_date, :datetime
  end
end
