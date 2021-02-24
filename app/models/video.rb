class Video < ApplicationRecord
    validates :title, :view_counts, presence: true
    validate :ensure_video
    validate :ensure_thumbnail

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
    
    has_many :comments,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Comment,
        dependent: :destroy
    
    has_many :likes,
        as: :likable,
        dependent: :destroy

    has_one_attached :video_file
    has_one_attached :thumbnail

    def ensure_video
        unless self.video_file.attached?
            errors[:video_file] << "Must be attached"
        end
    end

    def ensure_thumbnail
        unless self.thumbnail.attached?
            errors[:thumbnail] << "Must be attached"
        end
    end

    def self.search_by_title(search_input)
        Video.where("title ILIKE :search", search: "%#{search_input}%").to_a
    end
end
