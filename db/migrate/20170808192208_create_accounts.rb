class CreateAccounts < ActiveRecord::Migration[5.1]
  def change
    create_table :accounts do |t|
      t.column :first_name, :string
      t.column :last_name, :string
      t.column :business_name, :string
      t.column :user_id, :integer
      t.timestamps
    end
  end
end
