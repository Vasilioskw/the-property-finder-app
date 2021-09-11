class AddTelephoneToAccounts < ActiveRecord::Migration[6.1]
  def change
    add_column :accounts, :telephone, :string
  end
end
