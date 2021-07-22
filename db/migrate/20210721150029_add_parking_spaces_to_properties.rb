class AddParkingSpacesToProperties < ActiveRecord::Migration[6.1]
  def change
    add_column :properties, :parking_spaces, :integer, default: 0
  end
end
