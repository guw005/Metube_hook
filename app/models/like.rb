class Like < ApplicationRecord
    validates :user_id, :likable_id, :likable_type, presence: true
    validates :is_like, inclusion: { in: [true, false] }
    validates :user_id, uniqueness: { scope: [:likable_id, :likable_type] }

    belongs_to :likable, polymorphic: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end